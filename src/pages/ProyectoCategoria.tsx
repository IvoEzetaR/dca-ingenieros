import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg"; // Reusing hero image

// ITSE Prosegur Alarma Images
import alarma1 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma1.jpg";
import alarma2 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma2.jpg";
import alarma3 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma3.jpg";
import alarma4 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma4.jpg";
import alarma5 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma5.jpg";
import alarma6 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma6.jpg";
import alarma7 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma7.jpg";
import alarma8 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma8.jpg";
import alarma9 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma9.jpg";
import alarma10 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma10.jpg";
import alarma11 from "@/assets/imagenes-proyectos/ITSE/Itse prosegur alarma11.jpg";

// ITSE Prosegur Cash Piura Images
import cash1 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura1.jpg";
import cash2 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura2.jpg";
import cash3 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura3.jpg";
import cash4 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura4.jpg";
import cash5 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura5.jpg";
import cash6 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura6.jpg";
import cash7 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura7.jpg";
import cash8 from "@/assets/imagenes-proyectos/ITSE/Prosegur Cash Piura8.jpg";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const categoryMap: Record<string, string> = {
    "levantamiento-itse": "Levantamiento itse",
    "remodelaciones": "Remodelaciones",
    "construccion": "Construcción",
    "servicios-generales": "Servicios generales",
};

const projects = [
    {
        id: 1,
        title: "Mantenimiento Correctivo de Barandas Metálicas",
        client: "GRUPO ATV BARRANCO",
        description: "Servicio integral de mantenimiento y reparación de estructuras metálicas para garantizar la seguridad y durabilidad.",
        image: heroImage,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [heroImage, heroImage, heroImage, heroImage]
    },
    {
        id: 2,
        title: "Remodelación Nuevo Soc Security Perú",
        client: "PROSEGUR SURCO",
        description: "Remodelación completa de instalaciones para adecuación de nuevos estándares de seguridad y operatividad.",
        image: heroImage,
        category: "remodelaciones",
        categoryLabel: "Remodelaciones",
        images: [heroImage, heroImage, heroImage, heroImage]
    },
    {
        id: 3,
        title: "Mantenimiento Correctivo",
        client: "ADUNI ATE",
        description: "Intervención correctiva en infraestructura educativa para asegurar el óptimo funcionamiento de las instalaciones.",
        image: heroImage,
        category: "servicios-generales",
        categoryLabel: "Servicios generales",
        images: [heroImage, heroImage, heroImage, heroImage]
    },
    {
        id: 4,
        title: "Levantamiento de observaciones ITSE Prosegur alarma",
        client: "PROSEGUR",
        description: "Adecuación de infraestructura y sistemas de alarma para cumplimiento de normativas de Inspección Técnica de Seguridad en Edificaciones.",
        image: alarma1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [alarma1, alarma2, alarma3, alarma4, alarma5, alarma6, alarma7, alarma8, alarma9, alarma10, alarma11]
    },
    {
        id: 5,
        title: "Levantamiento de observaciones ITSE Prosegur Cash Piura",
        client: "PROSEGUR CASH",
        description: "Implementación de mejoras y correcciones de seguridad en la sede Piura para certificación ITSE.",
        image: cash1,
        category: "levantamiento-itse",
        categoryLabel: "Levantamiento itse",
        images: [cash1, cash2, cash3, cash4, cash5, cash6, cash7, cash8]
    }
];

const ProyectoCategoria = () => {
    const { category } = useParams<{ category: string }>();
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [pageTitle, setPageTitle] = useState("Proyectos");

    useEffect(() => {
        if (category && categoryMap[category]) {
            setPageTitle(categoryMap[category]);
        } else {
            setPageTitle("Proyectos");
        }
    }, [category]);

    const filteredProjects = category
        ? projects.filter(p => p.category === category)
        : projects;

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative h-[85vh] min-h-[750px] flex items-center justify-center pt-96 pb-80 md:pt-80 md:pb-64 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            src={heroImage}
                            alt={pageTitle}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/60" />
                    </div>

                    <div className="section-container relative z-10 text-center">
                        <div className="animate-slide-up">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30 mx-auto">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                <span className="text-sm font-medium text-primary-foreground">
                                    Portafolio de Especialidad
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                                {pageTitle}
                            </h1>

                            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Portafolio de soluciones y casos de éxito en {pageTitle}.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Projects Grid Section */}
                <section className="py-20 bg-background">
                    <div className="section-container">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Experiencia Comprobada</h2>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Resultados tangibles y cumplimiento de objetivos en cada una de nuestras intervenciones en {pageTitle}.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project, index) => (
                                <RevealOnScroll
                                    key={project.id}
                                    delay={index * 0.1}
                                >
                                    <div
                                        className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <span className="text-white font-medium px-4 py-2 border border-white/30 bg-white/10 backdrop-blur rounded-full">
                                                    Ver Galería
                                                </span>
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow-sm">
                                                    {project.categoryLabel}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {project.title}
                                            </h3>

                                            <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                                {project.client}
                                            </div>

                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                                                {project.description}
                                            </p>

                                            <Button
                                                variant="outline"
                                                className="w-full mt-auto group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                            >
                                                Ver Galería
                                                <ChevronRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gallery Modal */}
                <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
                    <DialogContent className="max-w-4xl w-full bg-background border-border p-0 overflow-hidden">
                        {selectedProject && (
                            <div className="flex flex-col">
                                <div className="p-6 bg-muted/30 border-b border-border">
                                    <DialogHeader>
                                        <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                                        <DialogDescription className="text-base text-muted-foreground mt-2">
                                            Cliente: <span className="font-semibold text-foreground">{selectedProject.client}</span>
                                        </DialogDescription>
                                    </DialogHeader>
                                </div>

                                <div className="p-6 bg-background flex flex-col items-center justify-center min-h-[400px]">
                                    <Carousel className="w-full max-w-3xl">
                                        <CarouselContent>
                                            {selectedProject.images.map((img, index) => (
                                                <CarouselItem key={index}>
                                                    <div className="p-1">
                                                        <div className="overflow-hidden rounded-lg border border-border shadow-sm aspect-video relative">
                                                            <img
                                                                src={img}
                                                                alt={`${selectedProject.title} - Imagen ${index + 1}`}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur border-border text-foreground" />
                                        <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur border-border text-foreground" />
                                    </Carousel>
                                    <p className="mt-6 text-muted-foreground text-center max-w-2xl">
                                        {selectedProject.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </main>
            <Footer />
        </div>
    );
};

export default ProyectoCategoria;
