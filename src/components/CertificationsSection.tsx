import { Shield, Leaf, HardHat, CheckCircle } from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "ISO 9001",
    subtitle: "Calidad",
    description: "Sistema de Gestión de Calidad",
  },
  {
    icon: Leaf,
    title: "ISO 14001",
    subtitle: "Medio Ambiente",
    description: "Sistema de Gestión Ambiental",
  },
  {
    icon: HardHat,
    title: "ISO 45001",
    subtitle: "Seguridad",
    description: "Sistema de Gestión de SST",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <CheckCircle className="h-6 w-6 text-accent-light" />
            <span className="text-sm font-semibold text-primary-foreground/80 uppercase tracking-wider">
              Certificaciones
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Calidad y Seguridad Certificada
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Empresa homologada con estándares internacionales.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/20"
            >
              <div className="inline-flex p-4 bg-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <cert.icon className="h-12 w-12 text-accent-light" />
              </div>
              <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                {cert.title}
              </h3>
              <div className="inline-block px-3 py-1 bg-accent/30 rounded-full text-sm font-medium text-accent-light mb-4">
                {cert.subtitle}
              </div>
              <p className="text-primary-foreground/70">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-foreground/10 rounded-full border border-primary-foreground/20">
            <Shield className="h-5 w-5 text-accent-light" />
            <span className="text-primary-foreground font-medium">
              Certificación Trinorma Vigente
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
