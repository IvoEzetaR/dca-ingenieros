import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, Search, Send, ChevronDown } from "lucide-react";
import logoDCA from "@/assets/Logo DCA.png";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Grupo DCA", href: "/", isRoute: true },
  {
    label: "Líneas de Negocio",
    href: "/#servicios",
    isRoute: false,
    children: [
      {
        label: "Obras y servicios generales",
        href: "/servicios/obras-servicios-generales",
        isRoute: true,
        description: "Mantenimiento y servicios generales para empresas.",
      },
      {
        label: "Construcción",
        href: "/servicios/ingenieria-construccion",
        isRoute: true,
        description: "Diseño, Gerencia de Proyectos y obras civiles integrales.",
      },
      {
        label: "Ferretería integral",
        href: "/servicios/ferreteria-integral",
        isRoute: true,
        description: "Suministro de materiales y herramientas de calidad.",
      },
      {
        label: "Alquiler de maquinarias y herramientas",
        href: "/servicios/alquiler-maquinarias",
        isRoute: true,
        description: "Equipos modernos para optimizar sus proyectos.",
      },
      {
        label: "Importación",
        href: "/servicios/importacion",
        isRoute: true,
        description: "Soluciones logísticas y productos importados.",
      },
      {
        label: "Gerencia de Proyectos",
        href: "/servicios/gestion-proyectos",
        isRoute: true,
        description: "Control de alcance, costo y cronograma.",
      },
    ],
  },
  {
    label: "Proyectos",
    href: "/proyectos",
    isRoute: true,
    children: [
      {
        label: "Levantamiento itse",
        href: "/proyectos/levantamiento-itse",
        isRoute: true,
        description: "Adecuación de infraestructura para cumplimiento de normativas ITSE.",
      },
      {
        label: "Remodelaciones",
        href: "/proyectos/remodelaciones",
        isRoute: true,
        description: "Transformación y modernización de espacios comerciales y residenciales.",
      },
      {
        label: "Construcción",
        href: "/proyectos/construccion",
        isRoute: true,
        description: "Ejecución de obras civiles con los más altos estándares de calidad.",
      },
      {
        label: "Servicios generales",
        href: "/proyectos/servicios-generales",
        isRoute: true,
        description: "Mantenimiento integral y soluciones operativas para su empresa.",
      },
    ],
  },
  { label: "Noticias", href: "/noticias", isRoute: true },
  { label: "Talento", href: "/talento", isRoute: true },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string, isRoute: boolean) => {
    if (isRoute) {
      return location.pathname === href;
    }
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col font-sans">
      {/* Top Bar - Dark Blue */}
      <div className="bg-[#1B316E] text-white py-2 transition-all duration-300">
        <div className="section-container flex justify-between items-center text-xs md:text-sm">
          <div className="flex items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 fill-current" />
              <a href="tel:+51925277375" className="hover:text-blue-200 transition-colors">
                925277375 / 994627900
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <span className="opacity-50">|</span>
              <Send className="h-3.5 w-3.5 -rotate-45 fill-current" />
              <a href="mailto:proyectos@dcaingenieros.com" className="hover:text-blue-200 transition-colors">
                proyectos@dcaingenieros.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-[#00BCD4] w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-[#00acc1] transition-colors rounded-sm">
              <Search className="h-4 w-4 text-white" />
            </div>
            <div className="bg-[#1B316E] w-7 h-7 flex items-center justify-center cursor-pointer hover:bg-[#2a4595] transition-colors rounded-sm border border-white/20">
              <Send className="h-3.5 w-3.5 text-white -rotate-45 ml-0.5 mt-0.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div
        className={`transition-all duration-300 border-b border-gray-100 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
          }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-28">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={logoDCA}
                alt="DCA Ingenieros Logo"
                className="h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative group h-full flex items-center">
                  {item.children ? (
                    <>
                      <Link
                        to={item.href}
                        className={cn(
                          "flex items-center gap-1 text-[#1B316E] font-bold text-base hover:text-[#00BCD4] transition-colors py-8",
                          isActive(item.href, item.isRoute) && "text-[#00BCD4]"
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      </Link>

                      {/* Dropdown Content - Aligned under the item */}
                      <div className={cn(
                        "absolute top-full pt-0 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50",
                        item.label === "Líneas de Negocio" ? "left-0" : "right-0 lg:left-auto"
                      )}>
                        <div className={cn(
                          "bg-white border border-gray-100 shadow-2xl rounded-xl p-3 mt-2 overflow-hidden",
                          item.children.length > 5 ? "w-[640px]" : "w-[320px]"
                        )}>
                          <div className={cn(
                            "grid gap-2",
                            item.children.length > 5 ? "grid-cols-2" : "grid-cols-1"
                          )}>
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                to={child.href}
                                className="block group/item p-3 rounded-lg hover:bg-blue-50 transition-all h-full"
                              >
                                <div className="text-sm font-bold text-[#1B316E] group-hover/item:text-[#00BCD4] transition-colors leading-tight">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <p className="text-xs text-gray-500 mt-1.5 line-clamp-2 leading-relaxed">
                                    {child.description}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "text-[#1B316E] font-bold text-base hover:text-[#00BCD4] transition-colors py-8",
                        isActive(item.href, item.isRoute) && "text-[#00BCD4]"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#1B316E]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100 animate-in slide-in-from-top-5 max-h-[calc(100vh-8rem)] overflow-y-auto bg-white">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label} className="flex flex-col gap-2">
                      <span className="text-base font-bold text-[#1B316E] px-4 py-2">
                        {item.label}
                      </span>
                      <div className="pl-4 flex flex-col gap-2 border-l-2 border-[#1B316E]/20 ml-4 py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="text-sm font-medium text-gray-600 hover:text-[#00BCD4] transition-colors py-1 pl-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : item.isRoute ? (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={cn(
                        "text-base font-bold transition-colors px-4 py-2 rounded-md hover:bg-gray-50",
                        isActive(item.href, item.isRoute)
                          ? "text-[#00BCD4]"
                          : "text-[#1B316E]"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-base font-bold text-[#1B316E] hover:text-[#00BCD4] transition-colors px-4 py-2 rounded-md hover:bg-gray-50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )
                )}
                {/* Mobile specific Contact Info in menu */}
                <div className="mt-4 pt-4 border-t border-gray-100 px-4 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[#1B316E]">
                      <Phone className="h-4 w-4" />
                      <a href="tel:+51925277375" className="text-sm font-medium">925277375 / 994627900</a>
                    </div>
                    <div className="flex items-center gap-3 text-[#1B316E]">
                      <Mail className="h-4 w-4" />
                      <a href="mailto:proyectos@dcaingenieros.com" className="text-sm font-medium">proyectos@dcaingenieros.com</a>
                    </div>
                  </div>
                  <Button variant="default" size="lg" className="w-full bg-[#1B316E] hover:bg-[#1B316E]/90 text-white">
                    Cotizar Proyecto
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
