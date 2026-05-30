// DCA Ingenieros — unified form handler (Vercel serverless function)
// Reemplaza el webhook n8n. Recibe payloads de los 3 forms:
//   - ContactForm.tsx       (formType: "Contacto / Cotización")
//   - JobApplicationForm    (formType: "Talento / Postulación")   + CV base64 attachment
//   - LibroReclamaciones    (formType: "Libro de Reclamaciones")
// Envia 1 email interno via Resend a proyectos@dcaingenieros.com.
// Sender: noreply@ideagency.pro (dominio verificado IDE Agency en Resend).

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const FROM = "DCA Ingenieros <noreply@ideagency.pro>";
const TEAM_INBOX = process.env.DCA_TEAM_INBOX || "proyectos@dcaingenieros.com";

// Hard caps per field (anti-abuse)
const CAPS = {
    string: 2000,         // any individual string field
    message: 6000,        // long-form fields (claim detail, claim request)
    fileBytes: 4_500_000, // ~4.5 MB raw -> base64 sits ~6 MB which Vercel may reject; we keep CV under this
};

// Friendly labels for known keys (fallback to raw key for unknown ones)
const LABELS = {
    fullname: "Nombre",
    email: "Email",
    phone: "Telefono / WhatsApp",
    company: "Empresa",
    motive: "Asunto / Proyecto",
    message: "Mensaje",
    source: "Origen seccion",
    formType: "Tipo de form",
    submittedAt: "Enviado",
    jobTitle: "Vacante",
    docType: "Tipo de documento",
    docNumber: "Numero de documento",
    documentType: "Tipo de documento",
    documentNumber: "Numero de documento",
    address: "Domicilio",
    parentDetails: "Padre / representante legal",
    itemType: "Producto o servicio",
    claimedAmount: "Monto reclamado (S/.)",
    itemDescription: "Descripcion del bien",
    disconformityType: "Tipo de disconformidad",
    claimDetail: "Detalle del reclamo / queja",
    claimRequest: "Pedido del consumidor",
    terms: "Acepta terminos",
    privacyAccepted: "Acepta privacidad",
    cvName: "Archivo CV",
};

// Keys to NEVER render in the email body (sensitive / internal)
const HIDDEN_KEYS = new Set(["cvData", "phone_alt"]);

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

function cleanString(value, max) {
    if (value === undefined || value === null) return "";
    return String(value)
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "")
        .trim()
        .slice(0, max);
}

function isValidEmail(value) {
    if (!value || value.length > 255) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function humanizeKey(key) {
    if (LABELS[key]) return LABELS[key];
    return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (c) => c.toUpperCase())
        .trim();
}

function formatValue(value) {
    if (value === null || value === undefined || value === "") return "(no indicado)";
    if (typeof value === "boolean") return value ? "Si" : "No";
    if (typeof value === "object") {
        try {
            return JSON.stringify(value);
        } catch {
            return "(objeto no serializable)";
        }
    }
    return String(value);
}

function buildSubject(payload) {
    const ft = payload.formType || "Lead web";
    if (ft === "Talento / Postulación" || ft === "Talento / Postulacion") {
        const job = payload.jobTitle || "vacante sin especificar";
        const who = payload.fullname || "postulante";
        return `Nueva postulacion: ${job} — ${who}`.slice(0, 120);
    }
    if (ft === "Libro de Reclamaciones") {
        const t = payload.disconformityType || "Reclamo";
        const who = payload.fullname || "consumidor";
        const doc = payload.documentNumber ? ` (${payload.documentNumber})` : "";
        return `Libro de Reclamaciones [${t}] — ${who}${doc}`.slice(0, 120);
    }
    // Default: contact/cotizacion
    const motive = payload.motive || "consulta general";
    return `Nueva consulta web DCA — ${motive}`.slice(0, 120);
}

function buildRows(payload) {
    // Render every payload key (in insertion order) except hidden/empty bookkeeping
    const skipKeys = new Set([...HIDDEN_KEYS]);
    const entries = Object.entries(payload).filter(([k, v]) => {
        if (skipKeys.has(k)) return false;
        if (v === undefined) return false;
        return true;
    });

    return entries
        .map(
            ([k, v]) => `
            <tr>
                <td style="padding:8px 12px;background:#f5f7fb;border:1px solid #e3e7ef;font-size:13px;color:#4b5566;white-space:nowrap;vertical-align:top;">${escapeHtml(humanizeKey(k))}</td>
                <td style="padding:8px 12px;border:1px solid #e3e7ef;font-size:14px;color:#1B316E;word-break:break-word;">${escapeHtml(formatValue(v))}</td>
            </tr>`,
        )
        .join("");
}

function buildHtml(payload, headerLabel) {
    const rows = buildRows(payload);
    return `<!doctype html>
<html lang="es"><body style="margin:0;padding:24px;background:#eef1f7;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e3e7ef;">
        <tr>
            <td style="padding:20px 24px;background:#1B316E;color:#ffffff;">
                <p style="margin:0;font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:0.8;">DCA Ingenieros</p>
                <h1 style="margin:6px 0 0;font-size:20px;font-weight:700;">${escapeHtml(headerLabel)}</h1>
            </td>
        </tr>
        <tr>
            <td style="padding:24px;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                    ${rows}
                </table>
                <p style="margin:24px 0 0;font-size:12px;color:#7a8294;line-height:1.5;">
                    Responde directo a este correo para contestarle al lead — el reply-to apunta a su email.
                </p>
            </td>
        </tr>
    </table>
</body></html>`;
}

function buildText(payload, headerLabel) {
    const lines = [`DCA Ingenieros — ${headerLabel}`, ""];
    for (const [k, v] of Object.entries(payload)) {
        if (HIDDEN_KEYS.has(k) || v === undefined) continue;
        lines.push(`${humanizeKey(k)}: ${formatValue(v)}`);
    }
    return lines.join("\n");
}

function pickHeaderLabel(formType) {
    if (formType === "Talento / Postulación" || formType === "Talento / Postulacion") return "Nueva postulacion de Talento";
    if (formType === "Libro de Reclamaciones") return "Libro de Reclamaciones — registro";
    return "Nuevo lead desde la web";
}

// Parse a data URL ("data:application/pdf;base64,XXXX") into mime + base64.
function parseDataUrl(dataUrl) {
    if (typeof dataUrl !== "string") return null;
    const m = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!m) return null;
    return { mime: m[1], base64: m[2] };
}

function isAllowedCvMime(mime) {
    return [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ].includes(mime);
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

    const body = typeof req.body === "string" ? safeJsonParse(req.body) : req.body || {};

    // Honeypot: bots fill phone_alt; humans never see it
    if (typeof body.phone_alt === "string" && body.phone_alt.trim() !== "") {
        return res.status(200).json({ ok: true, swallowed: true });
    }

    // Build a sanitized payload preserving original key order
    const sanitized = {};
    let attachment = null;

    for (const [k, v] of Object.entries(body)) {
        if (k === "cvData") {
            const parsed = parseDataUrl(v);
            if (!parsed) continue;
            if (!isAllowedCvMime(parsed.mime)) {
                return res.status(400).json({ ok: false, error: "invalid_cv_mime" });
            }
            const approxBytes = Math.floor((parsed.base64.length * 3) / 4);
            if (approxBytes > CAPS.fileBytes) {
                return res.status(413).json({ ok: false, error: "cv_too_large" });
            }
            const safeName = cleanString(body.cvName || "cv.pdf", 120).replace(/[\/\\]/g, "_") || "cv.pdf";
            attachment = { filename: safeName, content: parsed.base64 };
            continue;
        }
        if (k === "phone_alt") continue;
        if (typeof v === "boolean" || v === null) {
            sanitized[k] = v;
            continue;
        }
        const cap = k === "message" || k === "claimDetail" || k === "claimRequest" ? CAPS.message : CAPS.string;
        sanitized[k] = cleanString(v, cap);
    }

    // Always ensure submittedAt and formType are present
    if (!sanitized.formType) sanitized.formType = "Lead web";
    sanitized.submittedAt = new Date().toISOString();

    // Minimum validation: need a name + valid email for reply_to
    const fullname = sanitized.fullname || "";
    if (!fullname || fullname.length < 2) {
        return res.status(400).json({ ok: false, error: "invalid_fullname" });
    }
    if (!isValidEmail(sanitized.email)) {
        return res.status(400).json({ ok: false, error: "invalid_email" });
    }

    const subject = buildSubject(sanitized);
    const headerLabel = pickHeaderLabel(sanitized.formType);

    const payloadOut = {
        from: FROM,
        to: [TEAM_INBOX],
        reply_to: sanitized.email,
        subject,
        html: buildHtml(sanitized, headerLabel),
        text: buildText(sanitized, headerLabel),
    };
    if (attachment) payloadOut.attachments = [attachment];

    try {
        const resendRes = await fetch(RESEND_ENDPOINT, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                "Content-Type": "application/json",
                "User-Agent": "dca-ingenieros-contact/1.1",
            },
            body: JSON.stringify(payloadOut),
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
