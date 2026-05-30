// DCA Ingenieros — contact form handler (Vercel serverless function)
// Reemplaza el webhook n8n. Envia 1 email interno via Resend a proyectos@dcaingenieros.com.
// Sender: noreply@ideagency.pro (dominio verificado IDE Agency en Resend).
// Sin auto-reply al visitante — la UI de exito en la pagina es la unica confirmacion.

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM = "DCA Ingenieros <noreply@ideagency.pro>";
const TEAM_INBOX = process.env.DCA_TEAM_INBOX || "proyectos@dcaingenieros.com";

const MAX_LEN = {
    fullname: 100,
    email: 255,
    phone: 30,
    company: 150,
    motive: 200,
    message: 2000,
    source: 80,
    formType: 80,
};

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function sanitize(value, max) {
    if (value === undefined || value === null) return "";
    // strip ASCII control chars except \t \n \r, then trim + cap length
    return String(value)
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
        .trim()
        .slice(0, max);
}

function isValidEmail(value) {
    if (!value || value.length > 255) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildHtml(payload) {
    const rows = [
        ["Nombre", payload.fullname],
        ["Email", payload.email],
        ["Telefono / WhatsApp", payload.phone],
        ["Empresa", payload.company || "(no indicada)"],
        ["Asunto / Proyecto", payload.motive],
        ["Origen seccion", payload.source || "General"],
        ["Tipo de form", payload.formType || "Contacto / Cotizacion"],
        ["Enviado", payload.submittedAt],
    ]
        .map(
            ([label, value]) => `
            <tr>
                <td style="padding:8px 12px;background:#f5f7fb;border:1px solid #e3e7ef;font-size:13px;color:#4b5566;white-space:nowrap;">${escapeHtml(label)}</td>
                <td style="padding:8px 12px;border:1px solid #e3e7ef;font-size:14px;color:#1B316E;">${escapeHtml(value)}</td>
            </tr>`,
        )
        .join("");

    const messageBlock = payload.message
        ? `
        <h3 style="margin:24px 0 8px;font-family:Arial,Helvetica,sans-serif;color:#1B316E;font-size:15px;">Mensaje</h3>
        <div style="padding:14px 16px;background:#f5f7fb;border:1px solid #e3e7ef;border-radius:6px;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#3a4252;line-height:1.55;white-space:pre-wrap;">${escapeHtml(payload.message)}</div>`
        : "";

    return `<!doctype html>
<html lang="es"><body style="margin:0;padding:24px;background:#eef1f7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:600px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e3e7ef;">
        <tr>
            <td style="padding:20px 24px;background:#1B316E;color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.8;">DCA Ingenieros</p>
                <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;">Nuevo lead desde la web</h1>
            </td>
        </tr>
        <tr>
            <td style="padding:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    ${rows}
                </table>
                ${messageBlock}
                <p style="margin:24px 0 0;font-size:12px;color:#7a8294;line-height:1.5;">
                    Responde directo a este correo para contestarle al lead — el reply-to apunta a su email.
                </p>
            </td>
        </tr>
    </table>
</body></html>`;
}

function buildText(payload) {
    return [
        "DCA Ingenieros — Nuevo lead desde la web",
        "",
        `Nombre: ${payload.fullname}`,
        `Email: ${payload.email}`,
        `Telefono: ${payload.phone}`,
        `Empresa: ${payload.company || "(no indicada)"}`,
        `Asunto: ${payload.motive}`,
        `Origen: ${payload.source || "General"}`,
        `Tipo de form: ${payload.formType || "Contacto / Cotizacion"}`,
        `Enviado: ${payload.submittedAt}`,
        "",
        "Mensaje:",
        payload.message || "(sin mensaje adicional)",
    ].join("\n");
}

export default async function handler(req, res) {
    if (req.method === "GET") {
        return res.status(200).json({
            ok: true,
            service: "dca-ingenieros-contact",
            configured: Boolean(process.env.RESEND_API_KEY),
        });
    }

    if (req.method !== "POST") {
        res.setHeader("Allow", "GET, POST");
        return res.status(405).json({ ok: false, error: "method_not_allowed" });
    }

    if (!process.env.RESEND_API_KEY) {
        return res.status(500).json({ ok: false, error: "missing_api_key" });
    }

    // Parse body (Vercel Node functions parse JSON automatically when Content-Type matches)
    const body = typeof req.body === "string" ? safeJsonParse(req.body) : req.body || {};

    // Honeypot: bots fill all fields. Real users never see this field.
    if (typeof body.phone_alt === "string" && body.phone_alt.trim() !== "") {
        // Soft success so the bot thinks it worked, but send nothing.
        return res.status(200).json({ ok: true, swallowed: true });
    }

    const payload = {
        fullname: sanitize(body.fullname, MAX_LEN.fullname),
        email: sanitize(body.email, MAX_LEN.email),
        phone: sanitize(body.phone, MAX_LEN.phone),
        company: sanitize(body.company, MAX_LEN.company),
        motive: sanitize(body.motive, MAX_LEN.motive),
        message: sanitize(body.message, MAX_LEN.message),
        source: sanitize(body.source, MAX_LEN.source),
        formType: sanitize(body.formType, MAX_LEN.formType),
        submittedAt: new Date().toISOString(),
    };

    if (!payload.fullname || payload.fullname.length < 2) {
        return res.status(400).json({ ok: false, error: "invalid_fullname" });
    }
    if (!isValidEmail(payload.email)) {
        return res.status(400).json({ ok: false, error: "invalid_email" });
    }
    if (!payload.phone || payload.phone.length < 6) {
        return res.status(400).json({ ok: false, error: "invalid_phone" });
    }
    if (!payload.motive || payload.motive.length < 3) {
        return res.status(400).json({ ok: false, error: "invalid_motive" });
    }

    const subject = `Nueva consulta web DCA — ${payload.motive.slice(0, 80)}`;

    try {
        const resendRes = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
                "User-Agent": "dca-ingenieros-contact/1.0",
            },
            body: JSON.stringify({
                from: FROM,
                to: [TEAM_INBOX],
                reply_to: payload.email,
                subject,
                html: buildHtml(payload),
                text: buildText(payload),
            }),
        });

        if (!resendRes.ok) {
            const errText = await resendRes.text().catch(() => "");
            console.error("resend_error", resendRes.status, errText.slice(0, 300));
            return res.status(502).json({ ok: false, error: "email_provider_error" });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error("contact_handler_exception", err?.message || err);
        return res.status(500).json({ ok: false, error: "unexpected" });
    }
}

function safeJsonParse(str) {
    try {
        return JSON.parse(str);
    } catch {
        return {};
    }
}
