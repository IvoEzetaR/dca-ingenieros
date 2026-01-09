
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Briefcase, Users, Star, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";

const beneficios = [
    {
        icon: Star,
        title: "Desarrollo Profesional",
        description: "Programas de capacitación continua y planes de carrera claros para que crezcas con nosotros."
    },
    {
        icon: Users,
        title: "Ambiente Colaborativo",
        description: "Trabajamos en un entorno de respeto, innovación y apoyo mutuo entre colegas."
    },
    {
        icon: GraduationCap,
        title: "Liderazgo y Mentores",
        description: "Aprende de los mejores profesionales del sector ingeniería y construcción."
    }
];

const Talento = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[500px] flex items-center justify-center pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Talento DCA"
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
                            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-primary-foreground">
                                Únete a nuestro equipo
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Construye tu futuro con <span className="text-accent-light">Grupo DCA</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            Buscamos personas apasionadas, talentosas y comprometidas con la excelencia en ingeniería.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">¿Por qué trabajar con nosotros?</h2>
                        <p className="text-muted-foreground text-lg">
                            En DCA, valoramos el talento humano como nuestro activo más preciado. Ofrecemos más que un trabajo, una oportunidad de transformar el país.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {beneficios.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-card border border-border/50 text-center hover:shadow-lg transition-shadow"
                            >
                                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions or Application CTA */}
            <section className="section-padding bg-secondary/30">
                <div className="section-container">
                    <div className="bg-[#1B316E] rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿No ves una posición abierta?</h2>
                                <p className="text-lg opacity-80 mb-8">
                                    Siempre estamos buscando nuevos talentos. Envíanos tu CV y te contactaremos cuando surja una oportunidad que encaje con tu perfil.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent-light w-5 h-5" />
                                        <span>Procesos de selección transparentes</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <CheckCircle2 className="text-accent-light w-5 h-5" />
                                        <span>Igualdad de oportunidades</span>
                                    </li>
                                </ul>
                                <Button size="lg" variant="secondary" className="font-bold text-lg px-8 py-6">
                                    Enviar mi CV
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                            <div className="hidden lg:block">
                                <Briefcase className="w-64 h-64 text-white opacity-10 -rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Talento;
