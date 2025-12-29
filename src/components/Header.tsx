import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X, ChevronDown } from "lucide-react";
import logoDCA from "@/assets/Logo DCA.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Inicio", href: "/", isRoute: true },
  { label: "Nosotros", href: "/nosotros", isRoute: true },
  {
    label: "Servicios",
    href: "/#servicios", // NavigationMenu doesn't need href on the trigger itself usually, but good for fallback
    isRoute: false,
    children: [
      {
        label: "Ingeniería y Construcción",
        href: "/servicios/ingenieria-construccion",
        isRoute: true,
        description: "Diseño, Gerencia de Proyectos y obras civiles integrales.",
      },
    ],
  },
  { label: "Proyectos", href: "/proyectos", isRoute: true },
  { label: "Contacto", href: "/#contacto", isRoute: false },
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-md"
        : "bg-background"
        }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logoDCA} alt="DCA Ingenieros Logo" className="h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.label}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent hover:bg-transparent data-[state=open]:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary text-sm font-medium text-muted-foreground transition-colors">
                          {item.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[300px] bg-popover">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    to={child.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground group"
                                  >
                                    <div className="text-sm font-medium leading-none">
                                      {child.label}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-2 group-hover:text-primary-foreground/90">
                                      {child.description}
                                    </p>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      item.isRoute ? (
                        <Link to={item.href} className="legacy-nav-link">
                          <NavigationMenuLink
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[state=open]:text-primary",
                              isActive(item.href, item.isRoute)
                                ? "text-primary"
                                : "text-muted-foreground"
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </Link>
                      ) : (
                        <a href={item.href} className="legacy-nav-link">
                          <NavigationMenuLink
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:text-primary focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:text-primary data-[state=open]:text-primary",
                              "text-muted-foreground"
                            )}
                          >
                            {item.label}
                          </NavigationMenuLink>
                        </a>
                      )
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="nav" size="lg">
              Cotizar Proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-base font-medium text-muted-foreground py-2">
                      {item.label}
                    </span>
                    <div className="pl-4 flex flex-col gap-2 border-l border-border/50 bg-muted/30 py-2 rounded-r-lg">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
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
                    className={`text-base font-medium transition-colors py-2 ${isActive(item.href, item.isRoute)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              )}
              <Button variant="nav" size="lg" className="mt-4">
                Cotizar Proyecto
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
