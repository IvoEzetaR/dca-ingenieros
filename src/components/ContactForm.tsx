
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";
import { toast } from "sonner";

interface ContactFormProps {
    onSuccess?: () => void;
    source?: string;
}

export const ContactForm = ({ onSuccess, source = "General" }: ContactFormProps) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            company: "",
            motive: "",
            message: "",
        }
    });

    const [showSuccess, setShowSuccess] = React.useState(false);

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            const payload = {
                ...data,
                source,
                formType: "Contacto / Cotización",
                submittedAt: new Date().toISOString(),
            };

            const response = await fetch("https://n8n-n8n.op5xvn.easypanel.host/webhook/DCA", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Error en el servidor");

            toast.success("Mensaje enviado con éxito");
            setShowSuccess(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Hubo un problema al enviar tu mensaje", {
                description: "Por favor, inténtalo de nuevo por WhatsApp.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1B316E] mb-2">¡Envío Exitoso!</h3>
                <p className="text-muted-foreground mb-8 max-w-[300px]">
                    Tu solicitud ha sido recibida. Un especialista se pondrá en contacto contigo muy pronto.
                </p>
                <Button
                    onClick={() => {
                        setShowSuccess(false);
                        if (onSuccess) onSuccess();
                    }}
                    className="bg-[#1B316E] hover:bg-accent text-white px-8 h-12 rounded-xl"
                >
                    Entendido
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="fullname">Nombres y Apellidos</Label>
                    <Input
                        id="fullname"
                        placeholder="Ej. Juan Pérez"
                        {...register("fullname", { required: true })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="juan.perez@ejemplo.com"
                        {...register("email", { required: true })}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+51 987 654 321"
                        {...register("phone", { required: true })}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="company">Empresa (Opcional)</Label>
                    <Input
                        id="company"
                        placeholder="Nombre de tu empresa"
                        {...register("company")}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="motive">Asunto / Proyecto</Label>
                <Input
                    id="motive"
                    placeholder="Ej. Remodelación de oficinas, Mantenimiento preventivo..."
                    {...register("motive", { required: true })}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">Mensaje Adicional</Label>
                <Textarea
                    id="message"
                    placeholder="Cuéntanos más detalles sobre tu requerimiento..."
                    className="min-h-[120px]"
                    {...register("message")}
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-[#1B316E] hover:bg-accent text-white h-12 text-lg font-bold transition-all"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                    </div>
                ) : (
                    <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                    </div>
                )}
            </Button>
        </form>
    );
};
