import { Building, Hammer, Wrench, Settings, Truck, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";
import { motion } from "framer-motion";

import imageObras from "@/assets/servicios-obras.png";
import imageConstruccion from "@/assets/servicios-construccion.png";
import imageFerreteria from "@/assets/servicios-ferreteria.png";
import imageMaquinaria from "@/assets/servicios-maquinaria.png";
import imageImportacion from "@/assets/servicios-importacion.png";

const services = [
  {
    icon: Settings,
    title: "Obras y servicios generales",
    description:
      "Mantenimiento integral y servicios generales para asegurar la continuidad de sus operaciones con los más altos estándares.",
    href: "/servicios/obras-servicios-generales",
    image: imageObras,
    color: "blue",
  },
  {
    icon: Building,
    title: "Construcción",
    description:
      "Diseño, Gerencia de Proyectos y obras civiles integrales para el sector público y privado, transformando ideas en realidad.",
    href: "/servicios/ingenieria-construccion",
    image: imageConstruccion,
    color: "emerald",
  },
  {
    icon: Wrench,
    title: "Ferretería integral",
    description:
      "Suministro completo de materiales y herramientas de alta calidad para cada etapa de su proyecto de construcción.",
    href: "/servicios/ferreteria-integral",
    image: imageFerreteria,
    color: "orange",
  },
  {
    icon: Truck,
    title: "Alquiler de maquinarias",
    description:
      "Flota moderna de maquinarias y herramientas pesadas para optimizar los tiempos y costos de su obra.",
    href: "/servicios/alquiler-maquinarias",
    image: imageMaquinaria,
    color: "indigo",
  },
  {
    icon: Globe,
    title: "Importación",
    description:
      "Importación directa de materiales especializados y equipos de última generación según sus requerimientos específicos.",
    href: "/servicios/importacion",
    image: imageImportacion,
    color: "cyan",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="section-padding bg-slate-50 overflow-hidden">
      <div className="section-container relative">
        {/* Header */}
        <RevealOnScroll className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 bg-primary/10 rounded-full border border-primary/20">
            Nuestros Sectores
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Líneas de <span className="text-primary italic">Negocio</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Soluciones estratégicas e integrales diseñadas para potenciar la eficiencia
            en cada etapa de sus proyectos.
          </p>
        </RevealOnScroll>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 0.1}
              className="h-full"
              innerClassName="h-full"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
                    <div className="p-3 bg-white rounded-xl shadow-lg">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col flex-grow p-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition-all duration-300 group/link"
                    >
                      <span>CONOCER MÁS</span>
                      <ArrowRight className="h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}

          {/* Decorative Card to fill space or just leave as is */}
          <div className="hidden lg:flex flex-col h-full bg-primary rounded-2xl p-8 justify-center items-center text-center text-white shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16 blur-3xl" />

            <h3 className="text-3xl font-bold mb-4 relative z-10">¿Listo para empezar su proyecto?</h3>
            <p className="text-primary-foreground/90 mb-8 relative z-10">Conversemos sobre cómo podemos ayudarle a alcanzar sus objetivos.</p>
            <a
              href="#contacto"
              className="px-8 py-3 bg-white text-primary font-bold rounded-full hover:bg-slate-100 transition-colors relative z-10"
            >
              Contáctanos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

