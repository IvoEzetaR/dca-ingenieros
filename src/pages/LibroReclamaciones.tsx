
import React from "react";
import { useForm } from "react-hook-form";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { BookOpen, Send, User, ShoppingBag, MessageSquare, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

interface LibroFormValues {
    fullname: string;
    address: string;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
    parentDetails?: string;
    itemType: "Producto" | "Servicio";
    claimedAmount: string;
    itemDescription: string;
    disconformityType: "Reclamo" | "Queja";
    claimDetail: string;
    claimRequest: string;
    privacyAccepted: boolean;
}

const LibroReclamaciones = () => {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [showSuccess, setShowSuccess] = React.useState(false);

    const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<LibroFormValues>({
        defaultValues: {
            documentType: "DNI",
            itemType: "Servicio",
            disconformityType: "Reclamo",
            privacyAccepted: false,
        }
    });

    const privacyAccepted = watch("privacyAccepted");

    const onSubmit = async (data: LibroFormValues) => {
        if (!data.privacyAccepted) {
            toast.error("Debe aceptar la política de privacidad");
            return;
        }

        setIsSubmitting(true);
        try {
            const payload = {
                ...data,
                formType: "Libro de Reclamaciones",
                submittedAt: new Date().toISOString(),
            };

            const response = await fetch("https://n8n-n8n.op5xvn.easypanel.host/webhook/DCA", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Error al enviar la reclamación");

            toast.success("Reclamación enviada con éxito");
            setShowSuccess(true);
            window.scrollTo({ top: 0, behavior: 'smooth' });
            reset();
        } catch (error) {
            console.error("Submission error:", error);
            toast.error("Hubo un problema al enviar su reclamación", {
                description: "Por favor, inténtelo de nuevo más tarde.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (showSuccess) {
        return (
            <div className="min-h-screen bg-background flex flex-col">
                <Header />
                <main className="flex-grow flex items-center justify-center py-20 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-md w-full text-center p-8 bg-card rounded-3xl shadow-2xl border border-primary/10"
                    >
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                        </div>
                        <h3 className="text-3xl font-bold text-[#1B316E] mb-4">¡Hoja de Reclamo Registrada!</h3>
                        <p className="text-muted-foreground mb-8 text-lg">
                            Su reclamo ha sido enviado correctamente. Conforme a ley, daremos respuesta en un plazo no mayor a quince (15) días hábiles.
                        </p>
                        <Button
                            onClick={() => setShowSuccess(false)}
                            className="bg-[#1B316E] hover:bg-accent text-white px-10 h-14 rounded-2xl text-lg font-bold"
                        >
                            Volver al Inicio
                        </Button>
                    </motion.div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-44 pb-20">
                <div className="section-container">
                    {/* Header Section */}
                    <div className="max-w-4xl mx-auto mb-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 border border-primary/20"
                        >
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Atención al Cliente
                            </span>
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-[#1B316E] mb-4">
                            Libro de Reclamaciones
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            Conforme a lo establecido en el Código de Protección y Defensa del Consumidor, ponemos a su disposición nuestro libro de reclamaciones virtual.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-card p-6 md:p-12 rounded-[2.5rem] shadow-xl border border-border/50">

                            {/* Section 1: Consumer Identification */}
                            <div className="space-y-6">
                                <div className="flex items-center gap-3 border-b border-border pb-4">
                                    <div className="p-2 bg-[#1B316E]/10 rounded-lg text-[#1B316E]">
                                        <User className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#1B316E]">1. Identificación del Consumidor</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullname">Nombres y Apellidos *</Label>
                                        <Input id="fullname" placeholder="Ej. Juan Pérez García" {...register("fullname", { required: true })} />
                                        {errors.fullname && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Correo Electrónico *</Label>
                                        <Input id="email" type="email" placeholder="juan.perez@ejemplo.com" {...register("email", { required: true })} />
                                        {errors.email && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Domicilio *</Label>
                                    <Input id="address" placeholder="Av. Los Olivos 123, Urb. Villa Azul" {...register("address", { required: true })} />
                                    {errors.address && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="space-y-2">
                                        <Label>Tipo de Documento *</Label>
                                        <Select onValueChange={(val) => setValue("documentType", val)} defaultValue="DNI">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Seleccione" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="DNI">DNI</SelectItem>
                                                <SelectItem value="CE">C.E.</SelectItem>
                                                <SelectItem value="RUC">RUC</SelectItem>
                                                <SelectItem value="PASAPORTE">Pasaporte</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2 md:col-span-1">
                                        <Label htmlFor="documentNumber">Número de Documento *</Label>
                                        <Input id="documentNumber" placeholder="12345678" {...register("documentNumber", { required: true })} />
                                        {errors.documentNumber && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Teléfono / Celular *</Label>
                                        <Input id="phone" type="tel" placeholder="987654321" {...register("phone", { required: true })} />
                                        {errors.phone && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="parentDetails">Si eres menor de edad, datos del padre o representante legal</Label>
                                    <Input id="parentDetails" placeholder="Nombre y DNI del padre/madre/tutor" {...register("parentDetails")} />
                                </div>
                            </div>

                            {/* Section 2: Product/Service Identification */}
                            <div className="space-y-6 pt-6">
                                <div className="flex items-center gap-3 border-b border-border pb-4">
                                    <div className="p-2 bg-[#1B316E]/10 rounded-lg text-[#1B316E]">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#1B316E]">2. Identificación del Bien Contratado</h2>
                                </div>

                                <div className="space-y-4">
                                    <Label>Producto o Servicio contratado *</Label>
                                    <RadioGroup
                                        defaultValue="Servicio"
                                        onValueChange={(val: "Producto" | "Servicio") => setValue("itemType", val)}
                                        className="flex gap-8"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Producto" id="product" />
                                            <Label htmlFor="product" className="cursor-pointer">Producto</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="Servicio" id="service" />
                                            <Label htmlFor="service" className="cursor-pointer">Servicio</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                    <div className="md:col-span-1 space-y-2">
                                        <Label htmlFor="claimedAmount">Monto Reclamado (S/.)</Label>
                                        <Input id="claimedAmount" type="number" step="0.01" placeholder="0.00" {...register("claimedAmount")} />
                                    </div>
                                    <div className="md:col-span-3 space-y-2">
                                        <Label htmlFor="itemDescription">Descripción del Bien</Label>
                                        <Input id="itemDescription" placeholder="Ej. Servicio de mantenimiento preventivo, Materiales de ferretería..." {...register("itemDescription")} />
                                    </div>
                                </div>
                            </div>

                            {/* Section 3: Claim Detail */}
                            <div className="space-y-6 pt-6">
                                <div className="flex items-center gap-3 border-b border-border pb-4">
                                    <div className="p-2 bg-[#1B316E]/10 rounded-lg text-[#1B316E]">
                                        <MessageSquare className="w-6 h-6" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-[#1B316E]">3. Detalle de la Reclamación</h2>
                                </div>

                                <div className="space-y-4">
                                    <Label>Tipo de Disconformidad *</Label>
                                    <RadioGroup
                                        defaultValue="Reclamo"
                                        onValueChange={(val: "Reclamo" | "Queja") => setValue("disconformityType", val)}
                                        className="flex flex-col md:flex-row gap-4 md:gap-12"
                                    >
                                        <div className="flex items-start space-x-3">
                                            <RadioGroupItem value="Reclamo" id="reclamo" className="mt-1" />
                                            <div>
                                                <Label htmlFor="reclamo" className="text-base font-bold cursor-pointer">Reclamo</Label>
                                                <p className="text-xs text-muted-foreground mt-1">Disconformidad relacionada a los productos o servicios.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-3">
                                            <RadioGroupItem value="Queja" id="queja" className="mt-1" />
                                            <div>
                                                <Label htmlFor="queja" className="text-base font-bold cursor-pointer">Queja</Label>
                                                <p className="text-xs text-muted-foreground mt-1">Disconformidad no relacionada a los productos/servicios o malestar/descontento en la atención.</p>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="claimDetail">Detalle del reclamo o queja *</Label>
                                    <Textarea
                                        id="claimDetail"
                                        placeholder="Describa lo sucedido con el mayor detalle posible..."
                                        className="min-h-[150px] resize-none"
                                        {...register("claimDetail", { required: true })}
                                    />
                                    {errors.claimDetail && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="claimRequest">Pedido (Lo que solicita) *</Label>
                                    <Textarea
                                        id="claimRequest"
                                        placeholder="¿Qué solución espera recibir por parte de la empresa?"
                                        className="min-h-[100px] resize-none"
                                        {...register("claimRequest", { required: true })}
                                    />
                                    {errors.claimRequest && <span className="text-xs text-destructive">Este campo es obligatorio</span>}
                                </div>
                            </div>

                            {/* Legal Notes */}
                            <div className="bg-secondary/50 p-6 rounded-2xl space-y-4 border border-border">
                                <div className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                                    <AlertCircle className="w-5 h-5 text-primary shrink-0" />
                                    <ul className="list-disc pl-4 space-y-2">
                                        <li>La respuesta de su reclamo o queja será notificada a la dirección o E-mail indicado.</li>
                                        <li>La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.</li>
                                        <li>El proveedor deberá dar respuesta al reclamo en un plazo no mayor de quince (15) días hábiles improrrogables.</li>
                                    </ul>
                                </div>

                                <div className="flex items-start space-x-3 pt-2">
                                    <Checkbox
                                        id="privacy"
                                        checked={privacyAccepted}
                                        onCheckedChange={(checked) => setValue("privacyAccepted", checked as boolean)}
                                        className="mt-1 border-primary data-[state=checked]:bg-primary"
                                    />
                                    <div className="grid gap-1.5 leading-none">
                                        <Label htmlFor="privacy" className="text-sm font-medium leading-normal cursor-pointer">
                                            He leído y acepto la Política de Privacidad y el tratamiento de mis datos personales para la atención de este reclamo. *
                                        </Label>
                                    </div>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#1B316E] hover:bg-accent text-white h-16 text-xl font-bold rounded-2xl transition-all shadow-xl hover:scale-[1.01] active:scale-[0.99]"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-3">
                                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                                        ENVIANDO RECLAMO...
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-3">
                                        <Send className="w-6 h-6" />
                                        ENVIAR RECLAMO
                                    </div>
                                )}
                            </Button>

                            <p className="text-center text-xs text-muted-foreground mt-4">
                                (*) Campos obligatorios
                            </p>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default LibroReclamaciones;
