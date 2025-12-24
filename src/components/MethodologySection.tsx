import { motion } from "framer-motion";
import {
    ClipboardCheck,
    FileText,
    HardHat,
    HeadphonesIcon,
    Store,
    Factory,
    Building2,
    ArrowRight,
} from "lucide-react";

const processSteps = [
    {
        number: "01",
        title: "Diagnóstico",
        description: "Evaluación técnica del sitio y requerimientos del cliente.",
        icon: ClipboardCheck,
    },
    {
        number: "02",
        title: "Planificación",
        description: "Diseño, presupuesto y cronograma detallado del proyecto.",
        icon: FileText,
    },
    {
        number: "03",
        title: "Ejecución ISO",
        description: "Construcción bajo estándares de calidad y seguridad certificados.",
        icon: HardHat,
    },
    {
        number: "04",
        title: "Post-Venta",
        description: "Garantía, mantenimiento y soporte continuo post-entrega.",
        icon: HeadphonesIcon,
    },
];

const sectors = [
    { icon: Store, label: "Retail", description: "Tiendas y centros comerciales" },
    { icon: Factory, label: "Industrial", description: "Plantas y almacenes" },
    { icon: Building2, label: "Corporativo", description: "Oficinas y edificios" },
];

export const MethodologySection = () => {
    return (
        <>
            {/* Process Steps */}
            <section className="section-padding bg-background overflow-hidden" id="metodologia">
                <div className="section-container">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                            Metodología
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Nuestro Proceso de Trabajo
                        </h2>
                    </div>

                    {/* Horizontal Steps */}
                    <div className="relative">
                        {/* Connecting Line - Desktop */}
                        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="relative text-center group"
                                >
                                    {/* Step Number Circle */}
                                    <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-colors mb-6">
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                            {step.number}
                                        </div>
                                        <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
                                        {step.description}
                                    </p>

                                    {/* Arrow between steps - Desktop only */}
                                    {index < processSteps.length - 1 && (
                                        <div className="hidden lg:block absolute top-16 -right-6 transform translate-x-1/2">
                                            <ArrowRight className="w-5 h-5 text-border" />
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sectors Section */}
            <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

                <div className="section-container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div>
                            <span className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3 block">
                                Alcance
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                                Sectores que Atendemos
                            </h2>
                        </div>

                        <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                            {sectors.map((sector, index) => (
                                <motion.div
                                    key={sector.label}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 min-w-[140px] hover:bg-primary-foreground/15 transition-colors"
                                >
                                    <div className="p-4 bg-primary-foreground/20 rounded-xl">
                                        <sector.icon className="w-8 h-8 text-accent-light" />
                                    </div>
                                    <p className="text-lg font-bold text-primary-foreground">{sector.label}</p>
                                    <p className="text-xs text-primary-foreground/70 text-center">{sector.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
