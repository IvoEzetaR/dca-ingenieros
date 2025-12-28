import { Building, Hammer, Wrench, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";

const services = [
  {
    icon: Building,
    title: "Ingeniería y Construcción",
    description:
      "Diseño, Gerencia de Proyectos y Construcción para sectores Retail, Industrial y Oficinas.",
    href: "/servicios/ingenieria-construccion",
  },
  {
    icon: Hammer,
    title: "Remodelaciones",
    description:
      "Implementaciones integrales para el sector Inmobiliario, Industrial e Institucional.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento",
    description:
      "Servicios preventivos y correctivos para Oficinas, Inmobiliarios y Retail.",
  },
  {
    icon: Settings,
    title: "Servicios Generales",
    description:
      "Instalaciones eléctricas, sanitarias, drywall, pintura y cableado estructurado.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-section-gray">
      <div className="section-container">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestras{" "}
            <span className="text-primary">Líneas de Negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ofrecemos soluciones integrales adaptadas a las necesidades
            específicas de cada proyecto.
          </p>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 0.1}
            >
              <div
                className="group bg-card rounded-xl p-8 shadow-md card-hover border border-border/50 h-full"
              >
                <div className="p-4 bg-primary/10 rounded-xl w-fit mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-border">
                  {service.href ? (
                    <Link
                      to={service.href}
                      className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      Más información
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </Link>
                  ) : (
                    <a
                      href="#contacto"
                      className="text-sm font-semibold text-primary hover:text-accent transition-colors inline-flex items-center gap-2"
                    >
                      Más información
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
