
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { Upload, Send, FileText } from "lucide-react";
import { toast } from "sonner";

interface JobApplicationFormProps {
    jobTitle: string;
    onSuccess: () => void;
}

export const JobApplicationForm = ({ jobTitle, onSuccess }: JobApplicationFormProps) => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [fileName, setFileName] = React.useState<string | null>(null);
    const [fileBase64, setFileBase64] = React.useState<string | null>(null);

    const { register, handleSubmit, setValue, watch, reset } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            phone: "",
            docType: "dni",
            message: "",
            terms: false,
        }
    });

    const [showSuccess, setShowSuccess] = React.useState(false);

    const onSubmit = async (data: any) => {
        setIsSubmitting(true);
        try {
            const payload = {
                ...data,
                jobTitle,
                cvName: fileName,
                cvData: fileBase64,
                formType: "Talento / Postulación",
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

            toast.success("Postulación enviada correctamente");
            setShowSuccess(true);
            reset();
            setFileName(null);
            setFileBase64(null);
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Hubo un problema al enviar tu postulación", {
                description: "Por favor, inténtalo de nuevo más tarde o contáctanos por WhatsApp.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-2xl font-bold text-[#1B316E] mb-2">¡Postulación Recibida!</h3>
                <p className="text-muted-foreground mb-8 max-w-[320px]">
                    Tu CV ha sido registrado en nuestra base de datos para la vacante de <strong>{jobTitle}</strong>. ¡Mucha suerte!
                </p>
                <Button
                    onClick={() => {
                        setShowSuccess(false);
                        onSuccess();
                    }}
                    className="bg-[#1B316E] hover:bg-accent text-white px-8 h-12 rounded-xl"
                >
                    Cerrar
                </Button>
            </div>
        );
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFileName(file.name);

            const reader = new FileReader();
            reader.onloadend = () => {
                setFileBase64(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-4">
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
                    <Label htmlFor="doc-type">Tipo de Documento</Label>
                    <Select onValueChange={(value) => setValue("docType", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="dni">DNI</SelectItem>
                            <SelectItem value="ce">CE</SelectItem>
                            <SelectItem value="pasaporte">Pasaporte</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">¿Por qué quieres unirte a DCA? (Opcional)</Label>
                <Textarea
                    id="message"
                    placeholder="Cuéntanos un poco sobre tu experiencia y motivación..."
                    className="min-h-[100px]"
                    {...register("message")}
                />
            </div>

            <div className="space-y-2">
                <Label>Tu Currículum Vitae (CV)</Label>
                <div className="flex items-center gap-4">
                    <div className="relative flex-1">
                        <Input
                            id="cv-upload"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                        />
                        <Label
                            htmlFor="cv-upload"
                            className="flex items-center justify-center gap-2 w-full p-4 border-2 border-dashed border-muted-foreground/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all cursor-pointer group"
                        >
                            <Upload className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-muted-foreground group-hover:text-primary transition-colors">
                                {fileName || "Subir PDF o Word (Máx. 10MB)"}
                            </span>
                        </Label>
                    </div>
                    {fileName && (
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                            <FileText className="w-6 h-6" />
                        </div>
                    )}
                </div>
            </div>

            <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                    id="terms"
                    onCheckedChange={(checked) => setValue("terms", checked as boolean)}
                    required
                />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Acepto los términos y condiciones y la política de privacidad de Grupo DCA.
                </label>
            </div>

            <Button
                type="submit"
                className="w-full bg-[#1B316E] hover:bg-[#1B316E]/90 text-white h-12 text-lg font-bold"
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
                        Enviar Postulación
                    </div>
                )}
            </Button>
        </form>
    );
};
