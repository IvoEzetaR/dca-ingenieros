import { Building2, MapPin, Mail, Phone, FileText, ExternalLink } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoDCA from "@/assets/LOGO-DCA-BLANCO-POSITIVO.png";

const quickLinks = [
  { label: "Grupo DCA", href: "/" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Noticias", href: "/noticias" },
  { label: "Talento", href: "/talento" },
];

export const Footer = () => {
  const location = useLocation();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/") {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href === "/#servicios") {
        e.preventDefault();
        const element = document.getElementById("servicios");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <footer id="contacto" className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="section-container py-6 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {/* Logo Column */}
          <div className="flex flex-col justify-start">
            <img
              src={logoDCA}
              alt="DCA Ingenieros Logo"
              className="h-48 md:h-56 lg:h-64 w-auto object-contain mb-4 md:mb-0"
            />
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold mb-6">Nosotros</h4>
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Empresa líder en gestión integral de proyectos de ingeniería,
              comprometidos con la calidad, seguridad y cumplimiento de plazos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-light flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80 text-sm">
                  Jr. Rio Huaura 5522, Urb. Villa del Norte - Los Olivos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-light flex-shrink-0" />
                <a
                  href="mailto:proyectos@dcaingenieros.com"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors text-sm"
                >
                  proyectos@dcaingenieros.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-light flex-shrink-0" />
                <a
                  href="tel:+51925277375"
                  className="text-primary-foreground/80 hover:text-accent-light transition-colors text-sm"
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
                    onClick={(e) => handleLinkClick(e, link.href)}
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
                <Link
                  to="/libro-de-reclamaciones"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent-light font-medium transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  Libro de Reclamaciones
                </Link>
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
