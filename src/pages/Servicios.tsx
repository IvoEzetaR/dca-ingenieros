import { Header } from "@/components/Header";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Building,
  Ruler,
  PaintBucket,
  Hammer,
  Wrench,
  Settings,
  Network,
  Wifi,
  ClipboardCheck,
  FileText,
  HardHat,
  HeadphonesIcon,
  Store,
  Factory,
  Building2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import serviciosHero from "@/assets/servicios-hero.jpg";

const services = [
  {
    icon: Building,
    secondaryIcon: Ruler,
    title: "Ingeniería y Construcción",
    description: "Gerencia de proyectos, obras civiles, estructuras metálicas y edificaciones nuevas.",
    color: "primary",
    href: "/servicios/ingenieria-construccion",
  },
  {
    icon: PaintBucket,
    secondaryIcon: Hammer,
    title: "Remodelaciones (Fit-out)",
    description: "Implementación de oficinas y retail. Especialistas en Drywall, pisos y acabados arquitectónicos.",
    color: "accent",
  },
  {
    icon: Wrench,
    secondaryIcon: Settings,
    title: "Mantenimiento Integral",
    description: "Facility Management preventivo y correctivo. Sistemas eléctricos, sanitarios y HVAC.",
    color: "primary",
  },
  {
    icon: Network,
    secondaryIcon: Wifi,
    title: "Proyectos Especiales",
    description: "Cableado estructurado, sistemas contra incendios (ACI), CCTV y automatización.",
    color: "accent",
  },
];

const technicalDetails = [
  {
    id: "obras-civiles",
    title: "Obras Civiles",
    items: [
      "Estructuras de concreto armado",
      "Demoliciones controladas",
      "Cimentaciones y zapatas",
      "Muros de contención",
      "Losas y columnas",
    ],
  },
  {
    id: "acabados",
    title: "Acabados Arquitectónicos",
    items: [
      "Pintura industrial y decorativa",
      "Porcelanatos y cerámicos",
      "Carpintería de madera y melamina",
      "Vidrios templados y mamparas",
      "Cielos rasos y drywall",
    ],
  },
  {
    id: "instalaciones",
    title: "Instalaciones Técnicas",
    items: [
      "Tableros eléctricos y sub-tableros",
      "Pozos a tierra certificados",
      "Bombas de agua y sistemas de presión",
      "Sistemas de detección de incendios",
      "Aire acondicionado y ventilación",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Diagnóstico",
    description: "Evaluación técnica del sitio y requerimientos del cliente.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Planificación",
    description: "Diseño, presupuesto y cronograma detallado del proyecto.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Ejecución ISO",
    description: "Construcción bajo estándares de calidad y seguridad certificados.",
    icon: HardHat,
  },
  {
    number: "04",
    title: "Post-Venta",
    description: "Garantía, mantenimiento y soporte continuo post-entrega.",
    icon: HeadphonesIcon,
  },
];

const sectors = [
  { icon: Store, label: "Retail", description: "Tiendas y centros comerciales" },
  { icon: Factory, label: "Industrial", description: "Plantas y almacenes" },
  { icon: Building2, label: "Corporativo", description: "Oficinas y edificios" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Servicios = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-56 pb-32 md:pt-48 md:pb-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${serviciosHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary-dark/90" />

        <div className="section-container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-6 text-sm font-medium text-primary-foreground">
              <Settings className="w-4 h-4" />
              Nuestros Servicios
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Soluciones Integrales
              <br />
              <span className="text-accent-light">de Ingeniería.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Ejecución de proyectos <strong className="text-primary-foreground">"Llave en Mano"</strong> y mantenimiento especializado
              para el sector Retail, Industrial y Corporativo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Lo Que Hacemos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Líneas de Negocio
            </h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'primary'
                  ? 'from-primary/5 to-transparent'
                  : 'from-accent/5 to-transparent'
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  {/* Icons */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-xl ${service.color === 'primary'
                      ? 'bg-primary/10 group-hover:bg-primary/20'
                      : 'bg-accent/10 group-hover:bg-accent/20'
                      } transition-colors`}>
                      <service.icon className={`w-6 h-6 ${service.color === 'primary' ? 'text-primary' : 'text-accent'
                        }`} />
                    </div>
                    <div className={`p-2 rounded-lg ${service.color === 'primary'
                      ? 'bg-primary/5'
                      : 'bg-accent/5'
                      }`}>
                      <service.secondaryIcon className={`w-4 h-4 ${service.color === 'primary' ? 'text-primary/60' : 'text-accent/60'
                        }`} />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Ver más</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Details Accordion */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                Especialidades
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Desglose Técnico por Especialidad
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Contamos con <strong className="text-foreground">equipos especializados</strong> en cada área de la construcción,
                garantizando la excelencia técnica en todos los aspectos de su proyecto.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary mb-1">+50</p>
                  <p className="text-sm text-muted-foreground">Proyectos</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-accent mb-1">+4</p>
                  <p className="text-sm text-muted-foreground">Años</p>
                </div>
                <div className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Cumplimiento</p>
                </div>
              </div>
            </div>

            {/* Accordion */}
            <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
              <Accordion type="single" collapsible className="w-full">
                {technicalDetails.map((detail, index) => (
                  <AccordionItem key={detail.id} value={detail.id} className="border-border">
                    <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary py-5">
                      {detail.title}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5">
                      <ul className="space-y-3">
                        {detail.items.map((item) => (
                          <li key={item} className="flex items-center gap-3 text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-background overflow-hidden">
        <div className="section-container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Metodología
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestro Proceso de Trabajo
            </h2>
          </div>

          {/* Horizontal Steps */}
          <div className="relative">
            {/* Connecting Line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative text-center group"
                >
                  {/* Step Number Circle */}
                  <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-colors mb-6">
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                    <step.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>

                  {/* Arrow between steps - Desktop only */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 -right-6 transform translate-x-1/2">
                      <ArrowRight className="w-5 h-5 text-border" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="section-container relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-3 block">
                Alcance
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Sectores que Atendemos
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3 p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 min-w-[140px] hover:bg-primary-foreground/15 transition-colors"
                >
                  <div className="p-4 bg-primary-foreground/20 rounded-xl">
                    <sector.icon className="w-8 h-8 text-accent-light" />
                  </div>
                  <p className="text-lg font-bold text-primary-foreground">{sector.label}</p>
                  <p className="text-xs text-primary-foreground/70 text-center">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-10 md:p-16 border border-border shadow-lg text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Solicite una visita técnica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Nuestro equipo de ingenieros evaluará su proyecto en sitio y le brindará una
              <strong className="text-foreground"> propuesta personalizada sin compromiso</strong>.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary-light text-primary-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Contactar Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
