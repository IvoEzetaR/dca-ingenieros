
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    HardHat,
    Ruler,
    Building2,
    ShieldAlert,
    ClipboardCheck,
    ArrowRight,
    ShieldCheck,
    Award,
    CheckCircle2
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const subServices = [
    {
        icon: HardHat,
        title: "Obras Civiles",
        subtitle: "Edificaciones y Estructuras",
        description: "Ejecución experta de obras civiles en proyectos nuevos, ampliaciones y reforzamientos estructurales. Aplicamos las más estrictas normas técnicas de seguridad y calidad para garantizar solidez.",
        keywords: ["Normas técnicas", "Reforzamiento", "Calidad constructiva"]
    },
    {
        icon: Building2,
        title: "Remodelaciones",
        subtitle: "Optimización de Espacios",
        description: "Transformamos y adecuamos ambientes existentes para oficinas, locales comerciales e industriales. Maximizamos el diseño y el cumplimiento normativo para una funcionalidad superior.",
        keywords: ["Modernización", "Diseño funcional", "Cumplimiento legal"]
    },
    {
        icon: Ruler,
        title: "Infraestructura",
        subtitle: "Comercial e Institucional",
        description: "Desarrollo integral de proyectos para entidades públicas y privadas. Construimos centros educativos y corporativos con un enfoque en durabilidad extrema y máxima eficiencia operativa.",
        keywords: ["Centros educativos", "Sedes corporativas", "Eficiencia"]
    },
    {
        icon: ShieldAlert,
        title: "Adecuaciones ITSE",
        subtitle: "Seguridad y Cumplimiento",
        description: "Implementamos mejoras críticas para la obtención del Certificado ITSE. Diseñamos rutas de evacuación, señalización y sistemas de seguridad alineados a la normativa de Defensa Civil.",
        keywords: ["Defensa Civil", "Seguridad ITSE", "Evacuación"]
    },
    {
        icon: ClipboardCheck,
        title: "Gestión de Obras",
        subtitle: "Supervisión Profesional",
        description: "Control total técnico, administrativo y de seguridad. Aseguramos que cada fase del proyecto se ejecute cumpliendo rigurosamente con los plazos, costos y estándares de calidad establecidos.",
        keywords: ["Control de plazos", "Supervisión técnica", "Gestión de costos"]
    }
];

const IngenieriaConstruccion = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Ingeniería y Construcción"
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
                                Servicios Especializados
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Materializando Visiones: <br />
                            <span className="text-accent-light">Ingeniería y Construcción</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Soluciones estructurales y gestión de obra bajo estándares PMI e ISO. Desde el primer trazo hasta la entrega de llaves.
                        </p>

                        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            Cotizar Proyecto
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {subServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="p-8 md:p-10 flex flex-col h-full">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary">
                                            <service.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-primary dark:text-primary-foreground uppercase tracking-wide mb-2">
                                                {service.title}
                                            </h4>
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {service.subtitle}
                                            </h3>
                                        </div>
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
                                Por Qué Elegirnos
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                El Factor de Confianza
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                No solo construimos estructuras, construimos relaciones basadas en la seguridad, la calidad y la transparencia.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <ShieldCheck className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Seguridad Primero</h3>
                                        <p className="text-muted-foreground">
                                            Cero accidentes es nuestra meta. Cumplimos rigurosamente con los protocolos <strong className="text-foreground">ISO 45001</strong> en cada obra, protegiendo a nuestro equipo y su inversión.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <Award className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Calidad de Materiales</h3>
                                        <p className="text-muted-foreground">
                                            Trabajamos solo con proveedores certificados y realizamos pruebas de calidad rigurosas (probetas de concreto, tintes penetrantes en soldadura) para asegurar la durabilidad.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">5+ Años</h4>
                                        <p className="text-sm text-muted-foreground">Experiencia continua en el mercado</p>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg text-white">
                                        <h4 className="font-bold text-lg mb-2 text-white">ISO 9001</h4>
                                        <p className="text-sm opacity-90">Estándares de Calidad</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">100%</h4>
                                        <p className="text-sm text-muted-foreground">Entregas a Tiempo</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Soporte</h4>
                                        <p className="text-sm text-muted-foreground">24/7 durante ejecución</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-0" />
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding bg-primary text-white">
                <RevealOnScroll className="section-container text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                        ¿Listo para iniciar su proyecto de construcción?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Contáctenos hoy para una evaluación técnica inicial y descubra cómo podemos hacer realidad su visión con los más altos estándares.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                            Agendar Reunión
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Ver Proyectos
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default IngenieriaConstruccion;
