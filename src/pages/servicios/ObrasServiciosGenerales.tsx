
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Wrench,
    Paintbrush,
    Zap,
    ArrowRight,
    Clock,
    CheckCircle2,
    Droplets,
    Layout,
    Hammer,
    RefreshCw,
    ShieldCheck
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const subServices = [
    {
        icon: Wrench,
        title: "Mantenimiento Integral",
        subtitle: "Preventivo y Correctivo",
        description: "Implementamos programas estratégicos para infraestructuras y equipos, enfocados en maximizar la vida útil de sus activos y garantizar la continuidad operativa sin interrupciones.",
        keywords: ["Gestión de activos", "Continuidad operativa", "Respuesta inmediata"]
    },
    {
        icon: Droplets,
        title: "Sistemas Sanitarios",
        subtitle: "Agua, Desagüe y Drenaje",
        description: "Expertos en el diseño, ejecución y mantenimiento de redes sanitarias. Trabajamos bajo rigurosas normativas para asegurar sistemas eficientes, seguros y de alto rendimiento.",
        keywords: ["Normativa vigente", "Redes de agua", "Eficiencia sanitaria"]
    },
    {
        icon: Zap,
        title: "Instalaciones Eléctricas",
        subtitle: "Baja y Media Tensión",
        description: "Soluciones eléctricas integrales: desde tableros y luminarias hasta sistemas de puesta a tierra. Garantizamos seguridad y eficiencia bajo el Código Nacional de Electricidad.",
        keywords: ["CNE Perú", "Puesta a tierra", "Tableros industriales"]
    },
    {
        icon: Layout,
        title: "Construcción en Seco",
        subtitle: "Sistema Drywall Avanzado",
        description: "División de ambientes, cielos rasos y ampliaciones con tecnología drywall. Ofrecemos rapidez, versatilidad y acabados premium para locales comerciales y oficinas.",
        keywords: ["Tabiquería ligera", "Cielos rasos", "Rapidez constructiva"]
    },
    {
        icon: Paintbrush,
        title: "Acabados Finales",
        subtitle: "Belleza y Funcionalidad",
        description: "Especialistas en pintura, enchapes, pisos y carpintería. Cuidamos cada detalle para entregar ambientes estéticos, duraderos y perfectamente funcionales.",
        keywords: ["Pintura profesional", "Revestimientos", "Estética premium"]
    },
    {
        icon: Hammer,
        title: "Carpintería Metálica",
        subtitle: "Estructuras de Alta Resistencia",
        description: "Fabricación y reparación de estructuras, rejas y portones con materiales certificados. Procesos de soldadura y acabados que aseguran máxima protección y durabilidad.",
        keywords: ["Acero certificado", "Estructuras metálicas", "Seguridad"]
    },
    {
        icon: RefreshCw,
        title: "Remodelación Integral",
        subtitle: "Adaptación de Espacios",
        description: "Rediseñamos sus ambientes para adaptarlos a nuevas necesidades. Optimizamos la funcionalidad operativa cumpliendo con todos los estándares técnicos y legales.",
        keywords: ["Modernización", "Cambio de uso", "Optimización espacial"]
    },
    {
        icon: ShieldCheck,
        title: "Seguridad Industrial",
        subtitle: "Señalización y Protección",
        description: "Implementación de sistemas de señalética, barandas y protecciones industriales. Aseguramos el cumplimiento de las normativas de SST y la prevención de riesgos laborales.",
        keywords: ["Normativa SST", "Señalética vial", "Protección industrial"]
    }
];

const ObrasServiciosGenerales = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Obras y Servicios Generales"
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
                                Soluciones Integrales
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Mantenimiento y Calidad: <br />
                            <span className="text-accent-light">Obras y Servicios Generales</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Aseguramos el funcionamiento óptimo de sus instalaciones con servicios rápidos, eficientes y profesionales.
                        </p>

                        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            Solicitar Servicio
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
                                Nuestra Garantía
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Continuidad y Eficiencia
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Entendemos que cada minuto cuenta. Nuestro equipo está preparado para resolver incidencias y ejecutar mejoras sin interrumpir su negocio.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <Clock className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Respuesta Rápida</h3>
                                        <p className="text-muted-foreground">
                                            Canales de atención prioritaria para emergencias y cronogramas de mantenimiento estrictos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <CheckCircle2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Personal Calificado</h3>
                                        <p className="text-muted-foreground">
                                            Técnicos especialistas en cada rubro (electricistas, gasfiteros, pintores) con amplia experiencia y seguro SCTR.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">24/7</h4>
                                        <p className="text-sm text-muted-foreground">Atención de Emergencias</p>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg text-white">
                                        <h4 className="font-bold text-lg mb-2 text-white">Expertos</h4>
                                        <p className="text-sm opacity-90">Técnicos Especialistas</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Garantía</h4>
                                        <p className="text-sm text-muted-foreground">En todos los trabajos</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Cobertura</h4>
                                        <p className="text-sm text-muted-foreground">Lima y Provincias</p>
                                    </div>
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
                        ¿Necesita mantenimiento o remodelación?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Deje sus instalaciones en manos de expertos. Contáctenos para coordinar una visita técnica.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                            Solicitar Visita
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Ver Servicios
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default ObrasServiciosGenerales;
