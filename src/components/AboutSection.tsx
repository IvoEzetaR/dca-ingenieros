import { CheckCircle2, Award, Users, Clock } from "lucide-react";
import aboutImage from "@/assets/About (2).jpeg";
import { RevealOnScroll } from "./RevealOnScroll";

const features = [
  {
    icon: Award,
    text: "Certificación Trinorma (ISO 9001, 14001, 45001)",
  },
  {
    icon: Users,
    text: "Profesionales altamente calificados",
  },
  {
    icon: Clock,
    text: "Cumplimiento estricto de plazos",
  },
];

export const AboutSection = () => {
  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="relative">
            <RevealOnScroll>
              <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                Sobre Nosotros
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Excelencia en Gestión{" "}
                <span className="text-primary">Integral de Proyectos</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                DCA INGENIEROS es una empresa dedicada a la gestión integral de
                proyectos de ingeniería, abarcando diseño, construcción y
                mantenimiento. Nos respaldan profesionales con amplia experiencia,
                comprometidos con la calidad, seguridad y cumplimiento de plazos.
              </p>
            </RevealOnScroll>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <RevealOnScroll key={index} delay={0.3 + index * 0.1}>
                  <div
                    className="flex items-center gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                  >
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="h-6 w-6 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">
                      {feature.text}
                    </span>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>

          {/* Image */}
          <RevealOnScroll delay={0.2} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutImage}
                alt="Equipo de ingenieros en reunión de planificación"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-accent rounded-lg">
                  <CheckCircle2 className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">4+</div>
                  <div className="text-sm text-muted-foreground">
                    Años de Experiencia
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
