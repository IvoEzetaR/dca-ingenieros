import { Shield, CheckCircle, ExternalLink } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";
import logoCertificaciones from "../assets/logo certificaciones.png";
import iso9001Pdf from "../assets/UAF Americo-ISO 9001-DCA INGENIEROS S.A.C. (1) (1) (1).pdf";
import iso14001Pdf from "../assets/UAF Americo-ISO 14001-DCA INGENIEROS S.A.C. (1) (1).pdf";
import iso45001Pdf from "../assets/UAF Americo-ISO 45001-DCA INGENIEROS S.A.C. (1) (1).pdf";

const certifications = [
  {
    pdf: iso9001Pdf,
    title: "ISO 9001",
    subtitle: "Calidad",
    description: "Sistema de Gestión de Calidad",
  },
  {
    pdf: iso14001Pdf,
    title: "ISO 14001",
    subtitle: "Medio Ambiente",
    description: "Sistema de Gestión Ambiental",
  },
  {
    pdf: iso45001Pdf,
    title: "ISO 45001",
    subtitle: "Seguridad",
    description: "Sistema de Gestión de SST",
  },
];

export const CertificationsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="section-container">
        <RevealOnScroll className="text-center mb-12">
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
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <RevealOnScroll
              key={index}
              delay={index * 0.1}
            >
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full cursor-pointer group"
                title="Ver Certificado"
              >
                <div
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-primary-foreground/15 hover:border-accent transition-all duration-300 border border-primary-foreground/20 h-full flex flex-col items-center"
                >
                  <div className="w-24 h-24 bg-accent/20 rounded-2xl mb-6 group-hover:scale-105 transition-transform overflow-hidden flex items-center justify-center">
                    <img
                      src={logoCertificaciones}
                      alt="Certificación Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                    {cert.title}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-accent/30 rounded-full text-sm font-medium text-accent-light mb-4">
                    {cert.subtitle}
                  </div>
                  <p className="text-primary-foreground/70 mb-6">{cert.description}</p>

                  <div className="mt-auto flex items-center justify-center gap-2 text-accent-light font-semibold bg-accent/10 px-4 py-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                    <span>Ver certificado</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </a>
            </RevealOnScroll>
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
