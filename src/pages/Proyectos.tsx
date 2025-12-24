import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg"; // Reusing hero image for now
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

// Placeholder imports for project images - in a real scenario we'd have specific images
// For now, I'll use a placeholder div or reuse existing images to demonstrate the layout

const projects = [
  {
    id: 1,
    title: "Mantenimiento Correctivo de Barandas Metálicas",
    client: "GRUPO ATV BARRANCO",
    description: "Servicio integral de mantenimiento y reparación de estructuras metálicas para garantizar la seguridad y durabilidad.",
    image: heroImage,
    category: "Mantenimiento",
    images: [heroImage, heroImage, heroImage, heroImage] // Real images would go here
  },
  {
    id: 2,
    title: "Remodelación Nuevo Soc Security Perú",
    client: "PROSEGUR SURCO",
    description: "Remodelación completa de instalaciones para adecuación de nuevos estándares de seguridad y operatividad.",
    image: heroImage,
    category: "Remodelación",
    images: [heroImage, heroImage, heroImage, heroImage]
  },
  {
    id: 3,
    title: "Mantenimiento Correctivo",
    client: "ADUNI ATE",
    description: "Intervención correctiva en infraestructura educativa para asegurar el óptimo funcionamiento de las instalaciones.",
    image: heroImage,
    category: "Mantenimiento",
    images: [heroImage, heroImage, heroImage, heroImage]
  },
  {
    id: 4,
    title: "Levantamiento de Observaciones ITSE",
    client: "PROSEGUR MIRAFLORES",
    description: "Adecuación de infraestructura para cumplimiento de normativas de Inspección Técnica de Seguridad en Edificaciones.",
    image: heroImage,
    category: "Seguridad",
    images: [heroImage, heroImage, heroImage, heroImage]
  },
  {
    id: 5,
    title: "Levantamiento de Observaciones ITSE",
    client: "PROSEGUR CHIMBOTE",
    description: "Implementación de mejoras y correcciones según requerimientos de ITSE para certificación de seguridad.",
    image: heroImage,
    category: "Seguridad",
    images: [heroImage, heroImage, heroImage, heroImage]
  }
];

const Proyectos = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Proyectos Realizados"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-hero-overlay/95 via-hero-overlay/80 to-hero-overlay/60" />
          </div>

          <div className="section-container relative z-10 text-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 border border-primary/30 mx-auto">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary-foreground">
                  Portafolio de Éxito
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Nuestros <span className="text-accent-light">Proyectos</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                Una muestra de nuestro compromiso con la calidad, seguridad y excelencia en cada obra ejecutada.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="py-20 bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 flex flex-col h-full animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => setSelectedProject(project)}>
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
                        {project.category}
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
                      onClick={() => setSelectedProject(project)}
                    >
                      Ver Galería
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
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
                    <CarouselPrevious className="left-2 md:-left-12 bg-background/80 backdrop-blur border-border" />
                    <CarouselNext className="right-2 md:-right-12 bg-background/80 backdrop-blur border-border" />
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

export default Proyectos;
