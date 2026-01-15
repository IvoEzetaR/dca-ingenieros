
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Postulación enviada con éxito. ¡Mucha suerte!", {
                description: "Te contactaremos pronto por correo electrónico o teléfono.",
            });
            onSuccess();
        }, 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="fullname">Nombres y Apellidos</Label>
                    <Input id="fullname" placeholder="Ej. Juan Pérez" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="juan.perez@ejemplo.com" required />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                    <Input id="phone" type="tel" placeholder="+51 987 654 321" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="doc-type">Tipo de Documento</Label>
                    <Select required>
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
                <Checkbox id="terms" required />
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
