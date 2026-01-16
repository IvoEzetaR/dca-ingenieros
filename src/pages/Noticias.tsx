
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Newspaper, ArrowRight, Calendar, User, Tag } from "lucide-react";
import heroImage from "@/assets/servicios-hero.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { Button } from "@/components/ui/button";

const noticias = [
    {
        title: "DCA Ingenieros obtiene nueva certificación ISO",
        date: "15 de Diciembre, 2025",
        author: "Admin",
        category: "Certificaciones",
        excerpt: "Nos enorgullece anunciar que hemos renovado nuestra certificación ISO 9001:2015, reafirmando nuestro compromiso con la calidad...",
        image: heroImage
    },
    {
        title: "Inicio de nuevo proyecto de infraestructura en Lima",
        date: "10 de Noviembre, 2025",
        author: "Gerencia de Proyectos",
        category: "Obras",
        excerpt: "Hemos dado inicio a uno de los proyectos de infraestructura más ambiciosos del año en el distrito de Los Olivos...",
        image: heroImage
    },
    {
        title: "DCA promueve la sostenibilidad en la construcción",
        date: "25 de Octubre, 2025",
        author: "Sustentabilidad",
        category: "Innovación",
        excerpt: "Implementamos nuevas metodologías de construcción verde para reducir la huella de carbono en todos nuestros proyectos...",
        image: heroImage
    }
];

const Noticias = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center pt-56 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Noticias DCA"
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
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                            Centro de <span className="text-accent-light">Noticias</span>
                        </h1>
                        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
                            Mantente al día con las últimas novedades, proyectos e innovaciones de Grupo DCA.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* News Grid */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {noticias.map((noticia, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-card rounded-2xl border border-border/50 hover:border-primary/50 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={noticia.image}
                                        alt={noticia.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                                            {noticia.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-3 h-3" />
                                            {noticia.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User className="w-3 h-3" />
                                            {noticia.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                        {noticia.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                                        {noticia.excerpt}
                                    </p>

                                    <Button variant="ghost" className="p-0 h-auto font-bold text-primary hover:bg-transparent hover:translate-x-2 transition-transform self-start">
                                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Noticias;
