
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Globe,
    Container,
    FileCheck,
    Ship,
    ArrowRight,
    TrendingUp,
    Map
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const subServices = [
    {
        icon: Container,
        title: "Importación de Maquinaria",
        subtitle: "Equipos Pesados e Industriales",
        description: "Gestionamos la importación de maquinaria nueva o de segundo uso desde los principales mercados globales (USA, China, Europa), encargándonos de toda la logística.",
        keywords: ["Maquinaria amarilla", "Líneas de producción", "Repuestos"]
    },
    {
        icon: Ship,
        title: "Logística Internacional",
        subtitle: "Flete y Transporte",
        description: "Coordinación completa de transporte marítimo, aéreo o terrestre. Buscamos las mejores rutas y tarifas para optimizar los costos de su importación.",
        keywords: ["Flete marítimo", "Consolidación de carga", "Seguro internacional"]
    },
    {
        icon: FileCheck,
        title: "Gestión Aduanera",
        subtitle: "Trámites y Permisos",
        description: "Asesoría y gestión en desaduanaje. Nos encargamos de la clasificación arancelaria, permisos especiales y todo el papeleo necesario para nacionalizar su carga sin contratiempos.",
        keywords: ["Nacionalización", "Partidas arancelarias", "Permisos MTC"]
    },
    {
        icon: Globe,
        title: "Sourcing",
        subtitle: "Búsqueda de Proveedores",
        description: "Le ayudamos a encontrar proveedores confiables en el extranjero para materiales específicos o equipos especializados que su proyecto requiera.",
        keywords: ["Validación de proveedores", "Negociación", "Muestras"]
    }
];

const Importacion = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[550px] flex items-center justify-center pt-32 pb-20 md:pt-20 md:pb-0 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Importación y Logística"
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
                                Conectando Mercados
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Soluciones Globales: <br />
                            <span className="text-accent-light">Importación Especializada</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Traemos el mundo a su empresa. Gestión integral de importaciones desde la búsqueda del proveedor hasta la entrega en su almacén.
                        </p>

                        <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                            Iniciar Importación
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
                                Aliados Estratégicos
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Experiencia que Cruza Fronteras
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                Importar no tiene por qué ser complicado. Ponemos a su disposición nuestro conocimiento en comercio exterior para simplificar el proceso.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <TrendingUp className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Optimización de Costos</h3>
                                        <p className="text-muted-foreground">
                                            Analizamos las mejores opciones para reducir costos en flete, impuestos y gastos operativos.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <Map className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Seguimiento Constante</h3>
                                        <p className="text-muted-foreground">
                                            Monitoreo en tiempo real de su carga desde el puerto de origen hasta su destino final.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Global</h4>
                                        <p className="text-sm text-muted-foreground">Red de Agentes</p>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg text-white">
                                        <h4 className="font-bold text-lg mb-2 text-white">Seguro</h4>
                                        <p className="text-sm opacity-90">Gestión sin Riesgos</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Aduanas</h4>
                                        <p className="text-sm text-muted-foreground">Asesoría Integral</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Puerta a Puerta</h4>
                                        <p className="text-sm text-muted-foreground">Servicio Completo</p>
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
                        ¿Quiere importar equipos o materiales?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Hable con nuestros especialistas en comercio exterior y reciba asesoría gratuita para su primera importación.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                            Contactar Especialista
                        </Button>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Más Información
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default Importacion;
