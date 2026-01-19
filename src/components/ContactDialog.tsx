
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { ContactForm } from "./ContactForm";
import { Badge } from "./ui/badge";

interface ContactDialogProps {
    children: React.ReactNode;
    title?: string;
    description?: string;
    source?: string;
}

export const ContactDialog = ({
    children,
    title = "Solicitar Cotización",
    description = "Completa el formulario y un ingeniero especializado se pondrá en contacto contigo.",
    source = "Botón CTA"
}: ContactDialogProps) => {
    const [open, setOpen] = React.useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[2rem] p-0 border-none shadow-2xl">
                <div className="bg-[#1B316E] p-8 text-white">
                    <Badge variant="secondary" className="bg-accent text-white border-none mb-4 uppercase tracking-tighter">
                        Contacto Directo
                    </Badge>
                    <DialogTitle className="text-3xl font-bold mb-2 text-white">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="text-white/70 text-base">
                        {description}
                    </DialogDescription>
                </div>
                <div className="p-8">
                    <ContactForm onSuccess={() => setOpen(false)} source={source} />
                </div>
            </DialogContent>
        </Dialog>
    );
};
