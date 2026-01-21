import { Building2, MapPin, Mail, Phone, FileText, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import logoDCA from "@/assets/LOGO-DCA-BLANCO-POSITIVO.png";

const quickLinks = [
  { label: "Grupo DCA", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Noticias", href: "/noticias" },
  { label: "Talento", href: "/talento" },
];

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-6 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src={logoDCA}
                alt="DCA Ingenieros Logo"
                className="h-44 md:h-56 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-primary-foreground/70 mb-2 max-w-md leading-relaxed -mt-10 md:-mt-12">
              Empresa líder en gestión integral de proyectos de ingeniería,
              comprometidos con la calidad, seguridad y cumplimiento de plazos.
            </p>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-light mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Jr. Rio Huaura 5522, Urb. Villa del Norte - Los Olivos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-light flex-shrink-0" />
                <a
                  href="mailto:proyectos@dcaingenieros.com"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  proyectos@dcaingenieros.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-light flex-shrink-0" />
                <a
                  href="tel:+51925277375"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors"
                >
                  925277375 / 994627900
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="hidden md:block">
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-3 md:mb-6">Legal</h4>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  to="/politica"
                  className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  to="/terminos"
                  className="text-primary-foreground/70 hover:text-accent-light transition-colors inline-flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <a
                  href="/libro-de-reclamaciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent-light font-medium transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Libro de Reclamaciones
                  <ExternalLink className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="section-container py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 DCA INGENIEROS S.A.C. Todos los derechos reservados.</p>
            <p>
              Diseñado por{" "}
              <a
                href="https://ideagency.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-light transition-colors"
              >
                IDE Agency
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
