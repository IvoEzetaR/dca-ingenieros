
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Truck,
    Wrench,
    Zap,
    Scale,
    Cpu,
    ArrowRight,
    Settings,
    Shield,
    Timer
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const subServices = [
    {
        icon: Truck,
        title: "Maquinaria Ligera",
        subtitle: "Equipos de Construcción",
        description: "Alquiler de mezcladoras, vibradores de concreto, cortadoras y compactadoras. Nuestra flota está en constante renovación para asegurar máxima eficiencia en cada metro cuadrado de su obra.",
        keywords: ["Mezcladoras", "Compactadoras", "Equipos Auxiliares"]
    },
    {
        icon: Zap,
        title: "Herramientas Eléctricas",
        subtitle: "Potencia en sus Manos",
        description: "Contamos con una amplia gama de taladros, rotomartillos, amoladoras y demoledores de alto rendimiento. Equipos revisados minuciosamente para garantizar su operatividad total.",
        keywords: ["Rotomartillos", "Demoledores", "Equipos Bosch/Makita"]
    },
    {
        icon: Scale,
        title: "Trabajos en Altura",
        subtitle: "Acceso Seguro y Certificado",
        description: "Provisión de escaleras, andamios multidireccionales y plataformas elevadoras. Todos nuestros equipos para altura cumplen con certificaciones de seguridad nacionales e internacionales.",
        keywords: ["Andamios", "Plataformas", "Seguridad en Altura"]
    },
    {
        icon: Cpu,
        title: "Mantenimiento Industrial",
        subtitle: "Equipos Especializados",
        description: "Ofrecemos maquinaria técnica para procesos de mantenimiento mecánico, eléctrico y civil en plantas industriales. Soluciones robustas para entornos exigentes.",
        keywords: ["Equipos Mecánicos", "Mantenimiento Civil", "Plantas"]
    },
    {
        icon: Settings,
        title: "Soporte y Garantía",
        subtitle: "Asistencia Técnica Continua",
        description: "No solo alquilamos equipos; entregamos soluciones. Brindamos mantenimiento preventivo y asistencia técnica en campo durante todo el periodo de alquiler.",
        keywords: ["Asistencia Técnica", "Prevención", "Soporte en Obra"]
    }
];

const AlquilerMaquinarias = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[550px] flex items-center justify-center pt-56 pb-32 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Alquiler de Maquinarias"
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
                                Flota Moderna
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Potencia para su Obra: <br />
                            <span className="text-accent-light">Alquiler de Maquinarias</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Equipos confiables y de alto rendimiento para optimizar los tiempos y costos de su proyecto.
                        </p>

                        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            Ver Flota Disponible
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
                                Eficiencia Operativa
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Equipos que no Paran
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Sabemos que una máquina parada es dinero perdido. Por eso, nuestra flota pasa por rigurosos mantenimientos preventivos.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Mantenimiento Riguroso</h3>
                                        <p className="text-muted-foreground">
                                            Todos nuestros equipos cuentan con historial de mantenimiento al día y certificaciones de operatividad.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <Timer className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Disponibilidad Inmediata</h3>
                                        <p className="text-muted-foreground">
                                            Procesos de alquiler ágiles y logística de entrega rápida para que empiece a trabajar cuanto antes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">&lt; 3 Años</h4>
                                        <p className="text-sm text-muted-foreground">Antigüedad Promedio</p>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg text-white">
                                        <h4 className="font-bold text-lg mb-2 text-white">Soporte</h4>
                                        <p className="text-sm opacity-90">Técnico en Campo</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Flexibilidad</h4>
                                        <p className="text-sm text-muted-foreground">Por hora / Mes</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Operadores</h4>
                                        <p className="text-sm text-muted-foreground">Certificados</p>
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
                        ¿Requiere maquinaria para su proyecto?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Consulte la disponibilidad de nuestros equipos y solicite una cotización personalizada.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                            Consultar Disponibilidad
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Descargar Tarifario
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default AlquilerMaquinarias;
