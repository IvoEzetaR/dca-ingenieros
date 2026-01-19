import { Building, Hammer, Wrench, Settings, Truck, Globe, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { RevealOnScroll } from "./RevealOnScroll";
import { motion } from "framer-motion";

import imageObras from "@/assets/servicios-obras.png";
import imageConstruccion from "@/assets/servicios-construccion.png";
import imageFerreteria from "@/assets/servicios-ferreteria.png";
import imageMaquinaria from "@/assets/servicios-maquinaria.png";
import imageImportacion from "@/assets/servicios-importacion.png";
import imageGerencia from "@/assets/servicios-gerencia.png";

const services = [
  {
    icon: Settings,
    title: "Obras y Servicios Generales",
    description:
      "Soluciones integrales en obras civiles, mantenimiento y servicios generales para empresas e instituciones. Garantizamos altos estándares de calidad, seguridad y cumplimiento de plazos.",
    href: "/servicios/obras-servicios-generales",
    image: imageObras,
    color: "blue",
  },
  {
    icon: Building,
    title: "Construcción",
    description:
      "Planificación, ejecución y supervisión de proyectos de construcción. Expertos en obras nuevas, remodelaciones y refuerzos estructurales bajo normativas técnicas vigentes.",
    href: "/servicios/ingenieria-construccion",
    image: imageConstruccion,
    color: "emerald",
  },
  {
    icon: Wrench,
    title: "Ferretería",
    description:
      "Suministro especializado de materiales, equipos y herramientas para la construcción. Trabajamos con marcas líderes, brindando asesoría técnica y disponibilidad inmediata.",
    href: "/servicios/ferreteria-integral",
    image: imageFerreteria,
    color: "orange",
  },
  {
    icon: Truck,
    title: "Alquiler de Maquinarias y Herramientas",
    description:
      "Alquiler de maquinaria pesada y herramientas en óptimas condiciones. Optimizamos sus costos operativos con equipos seguros, mantenimiento constante y soporte técnico.",
    href: "/servicios/alquiler-maquinarias",
    image: imageMaquinaria,
    color: "indigo",
  },
  {
    icon: Globe,
    title: "Importaciones",
    description:
      "Gestión estratégica de importación de materiales y equipos especializados. Aseguramos calidad y cumplimiento de estándares internacionales para optimizar su abastecimiento.",
    href: "/servicios/importacion",
    image: imageImportacion,
    color: "cyan",
  },
  {
    icon: Briefcase,
    title: "Gerencia de Proyectos",
    description:
      "Aseguramos el éxito de su proyecto mediante el control de alcance, costo, plazo y calidad, aplicando estándares internacionales del PMI.",
    href: "/servicios/gestion-proyectos",
    image: imageGerencia,
    color: "purple",
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


        </div>
      </div>
    </section>
  );
};

