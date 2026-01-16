
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Timer,
    ShieldAlert,
    ListChecks,
    Calculator,
    HardHat,
    Leaf,
    ArrowRight,
    CheckCircle2,
    BarChart4,
    ClipboardCheck,
    Search
} from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg"; // Reusing high-quality construction image
import { RevealOnScroll } from "@/components/RevealOnScroll";

const subServices = [
    {
        icon: Timer,
        title: "Planificación y Control",
        subtitle: "Planificación y Control de Proyectos",
        description: "Establecemos cronogramas detallados y mecanismos de seguimiento rigurosos para asegurar el cumplimiento de hitos y plazos contractuales.",
        keywords: ["Cronogramas", "Hitos", "Seguimiento"]
    },
    {
        icon: ShieldAlert,
        title: "Riesgos y Oportunidades",
        subtitle: "Gestión de Riesgos y Oportunidades",
        description: "Identificamos, analizamos y mitigamos proactivamente riesgos potenciales mientras capitalizamos oportunidades de mejora durante el ciclo de vida del proyecto.",
        keywords: ["Mitigación", "Análisis", "Prevención"]
    },
    {
        icon: ListChecks,
        title: "Alcance y Cambios",
        subtitle: "Gestión del Alcance y Control de Cambios",
        description: "Definimos con precisión los límites del proyecto y gestionamos cualquier modificación de manera estructurada para evitar desviaciones críticas.",
        keywords: ["Línea base", "Control", "Objetivos"]
    },
    {
        icon: Calculator,
        title: "Costos y Presupuestos",
        subtitle: "Gestión de Costos y Presupuestos",
        description: "Optimizamos el uso de recursos financieros mediante un control presupuestario estricto y un análisis de valor ganado constante.",
        keywords: ["Eficiencia", "Presupuesto", "Rentabilidad"]
    },
    {
        icon: HardHat,
        title: "Supervisión y Coordinación",
        subtitle: "Supervisión y Coordinación de Obras",
        description: "Aseguramos una ejecución técnica impecable mediante la coordinación efectiva de subcontratistas y la supervisión directa en campo.",
        keywords: ["Campo", "Coordinación", "Calidad"]
    },
    {
        icon: Leaf,
        title: "Seguridad y Medio Ambiente",
        subtitle: "Gestión de Seguridad, Calidad y Medio Ambiente",
        description: "Implementamos los más altos estándares de seguridad (SST), aseguramiento de calidad y respeto al entorno ambiental.",
        keywords: ["ISO", "SST", "Sostenibilidad"]
    }
];

const GestionProyectos = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[550px] flex items-center justify-center pt-56 pb-32 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Gestión de Proyectos"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/60" />
                </div>

                <div className="section-container relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-primary-foreground">
                                Excelencia Operativa
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Gestión Integral de <br />
                            <span className="text-accent-light">Proyectos de Ingeniería</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Metodologías avanzadas y control riguroso para garantizar el éxito, la rentabilidad y la puntualidad de cada obra.
                        </p>

                        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            Cotizar Mi Proyecto
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestras Áreas de Especialización</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Aplicamos los estándares del PMBOK y metodologías ágiles adaptadas a la construcción e ingeniería.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {subServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                                            {service.subtitle}
                                        </h3>
                                    </div>

                                    <p className="text-muted-foreground leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {service.keywords.map((keyword, i) => (
                                            <span key={i} className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground border border-border">
                                                {keyword}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Us Section */}
            <section className="section-padding bg-secondary/30 relative overflow-hidden">
                <div className="section-container">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <RevealOnScroll className="lg:w-1/2">
                            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                                Nuestra Metodología
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Control Total en cada Etapa
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                No solo ejecutamos; gestionamos el conocimiento y los recursos para optimizar cada inversión, minimizando desviaciones y maximizando calidad.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <BarChart4 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Análisis de Datos</h3>
                                        <p className="text-muted-foreground">
                                            Utilizamos herramientas de BI y control de proyectos para tomar decisiones basadas en información real de obra.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <ClipboardCheck className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Aseguramiento de Calidad</h3>
                                        <p className="text-muted-foreground">
                                            Procesos estandarizados que garantizan que el entregable final cumpla con todas las especificaciones técnicas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="bg-white p-8 rounded-3xl shadow-2xl border border-border relative z-10">
                                <h4 className="text-2xl font-bold mb-6 text-foreground">Beneficios Clave</h4>
                                <div className="space-y-4">
                                    {[
                                        "Reducción de costos por retrabajos",
                                        "Cumplimiento de plazos con holguras controladas",
                                        "Transparencia total en el flujo de caja del proyecto",
                                        "Gestión proactiva de interesados (Stakeholders)",
                                        "Documentación técnica organizada y completa"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                            <span className="text-muted-foreground font-medium">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-0" />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-white">
                <RevealOnScroll className="section-container text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        ¿Tiene un proyecto desafiante en manos?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Contamos con la experiencia y la metodología para llevarlo al éxito. Conversemos sobre sus objetivos.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                            Agendar Consultoría
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Ver Portafolio
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default GestionProyectos;
