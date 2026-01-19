
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Construction,
    Zap,
    Droplets,
    Wrench,
    ShieldCheck,
    ArrowRight,
    Star,
    Truck
} from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { ContactDialog } from "@/components/ContactDialog";

const subServices = [
    {
        icon: Construction,
        title: "Materiales de Construcción",
        subtitle: "Base Estructural Certificada",
        description: "Comercializamos cemento, agregados, fierro y sistemas de tabiquería drywall. Todos nuestros materiales cuentan con certificaciones que aseguran la máxima integridad estructural.",
        keywords: ["Cemento y Fierro", "Drywall", "Agregados Certificados"]
    },
    {
        icon: Zap,
        title: "Materiales Eléctricos",
        subtitle: "Suministro de Alta Calidad",
        description: "Amplio stock en cables, tuberías, tableros y sistemas de iluminación. Proveemos accesorios eléctricos de marcas líderes para instalaciones seguras y duraderas.",
        keywords: ["Conductores", "Tableros", "Marcas Reconocidas"]
    },
    {
        icon: Droplets,
        title: "Suministros Sanitarios",
        subtitle: "Sistemas de Fluido y Gasfitería",
        description: "Venta especializada de tuberías, válvulas y grifería de alto rendimiento. Soluciones ideales para redes residenciales, comerciales e industriales de gran escala.",
        keywords: ["Válvulas", "Redes de Agua", "Sistemas Industriales"]
    },
    {
        icon: Wrench,
        title: "Herramientas de Obra",
        subtitle: "Manuales y Eléctricas",
        description: "Distribución de herramientas profesionales diseñadas para el uso intensivo en obra. Contamos con asesoría técnica para la selección del equipo adecuado según su proyecto.",
        keywords: ["Equipos Eléctricos", "Herramientas Manuales", "Asesoría"]
    },
    {
        icon: ShieldCheck,
        title: "Equipos de Seguridad",
        subtitle: "Protección Personal (EPP)",
        description: "Garantizamos la seguridad de sus colaboradores con equipos de protección personal y señalización industrial que cumplen con las normativas locales e internacionales.",
        keywords: ["Protección Industrial", "EPPs", "Señalización"]
    }
];

const FerreteriaIntegral = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Ferretería Integral"
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
                                Suministro Confiable
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Calidad y Stock: <br />
                            <span className="text-accent-light">Ferretería Integral</span>
                        </h1>

                        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Abastecemos su proyecto con las mejores marcas y garantía de producto. Todo lo que necesita en un solo lugar.
                        </p>

                        <ContactDialog
                            title="Ver Catálogo y Cotizar"
                            description="Solicita nuestra lista de precios y stock actualizado de materiales."
                            source="Ferretería Integral - Hero"
                        >
                            <Button size="lg" className="text-lg px-8 py-6 shadow-xl hover:scale-105 transition-transform">
                                Ver Catálogo
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </ContactDialog>
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
                                ¿Por qué comprar con nosotros?
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                Soluciones a su Medida
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                No somos solo una tienda, somos sus socios logísticos. Garantizamos la calidad de cada producto que sale de nuestro almacén.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-green-100 text-green-700 rounded-lg">
                                            <Star className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Marcas Reconocidas</h3>
                                        <p className="text-muted-foreground">
                                            Trabajamos directamente con fabricantes líderes para asegurar autenticidad y garantía.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="mt-1">
                                        <div className="p-3 bg-blue-100 text-blue-700 rounded-lg">
                                            <Truck className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">Despacho a Obra</h3>
                                        <p className="text-muted-foreground">
                                            Servicio de entrega programada directamente a su proyecto para optimizar su logística.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll className="lg:w-1/2 relative" delay={0.2}>
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4 translate-y-8">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Stock</h4>
                                        <p className="text-sm text-muted-foreground">Permanente</p>
                                    </div>
                                    <div className="bg-primary p-6 rounded-2xl shadow-lg text-white">
                                        <h4 className="font-bold text-lg mb-2 text-white">Calidad</h4>
                                        <p className="text-sm opacity-90">Certificada</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Atención</h4>
                                        <p className="text-sm text-muted-foreground">Personalizada</p>
                                    </div>
                                    <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                                        <h4 className="font-bold text-lg mb-2">Precios</h4>
                                        <p className="text-sm text-muted-foreground">Competitivos</p>
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
                        ¿Necesita cotizar materiales?
                    </h2>
                    <p className="text-lg opacity-90 mb-8 leading-relaxed">
                        Envíenos su lista de requerimientos y le responderemos a la brevedad con nuestra mejor propuesta.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <ContactDialog
                            title="Cotiza tus Materiales"
                            description="Sube tu lista de materiales o descríbenos qué necesitas."
                            source="Ferretería Integral - CTA Final"
                        >
                            <Button size="lg" variant="secondary" className="font-semibold text-lg px-8 py-6">
                                Cotizar Ahora
                            </Button>
                        </ContactDialog>
                        <Button size="lg" variant="outline" className="font-semibold text-lg px-8 py-6 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                            Contactar Asesor
                        </Button>
                    </div>
                </RevealOnScroll>
            </section>

            <Footer />
        </div>
    );
};

export default FerreteriaIntegral;
