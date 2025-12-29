import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Award,
  Clock,
  Leaf,
  Target,
  Eye,
  CheckCircle,
  Building2,
  TrendingUp,
  BadgeCheck,
  ArrowRight
} from "lucide-react";
import nosotrosHero from "@/assets/nosotros-hero.jpg";
import nosotrosTeam from "@/assets/nosotros-team.jpg";
import nosotrosMision from "@/assets/nosotros-mision.jpg";
import { RevealOnScroll } from "@/components/RevealOnScroll";

const valores = [
  {
    icon: Shield,
    title: "Seguridad Integral",
    description: "Priorizamos la integridad de nuestro equipo y clientes. Trabajamos bajo normativas estrictas de seguridad y salud en el trabajo (SST)."
  },
  {
    icon: Award,
    title: "Calidad Certificada",
    description: "Nuestros procesos están alineados con estándares internacionales, garantizando durabilidad y excelencia en los acabados."
  },
  {
    icon: Clock,
    title: "Cumplimiento y Puntualidad",
    description: "Entendemos el valor del tiempo en su negocio. Nuestro compromiso es la entrega oportuna sin sacrificar calidad."
  },
  {
    icon: Leaf,
    title: "Innovación Sostenible",
    description: "Implementamos tecnologías y métodos constructivos que optimizan recursos y reducen el impacto ambiental."
  }
];

const hitos = [
  {
    year: "2020",
    title: "El Inicio",
    description: "Fundación de DCA INGENIEROS con el objetivo de elevar el estándar en servicios generales y remodelaciones."
  },
  {
    year: "2021",
    title: "Expansión",
    description: "Ampliación de nuestra cartera a proyectos industriales y retail de gran envergadura."
  },
  {
    year: "2023",
    title: "Consolidación",
    description: "Implementación de sistemas de gestión integrados y obtención de homologaciones con clientes corporativos de primer nivel."
  },
  {
    year: "2024",
    title: "Actualidad",
    description: "Gestión de proyectos con certificación Trinorma (ISO 9001, 14001, 45001) y presencia en proyectos nacionales."
  }
];

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section - Airbrag Style */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-primary to-primary-dark flex items-center pt-32 pb-20 md:pt-20 md:pb-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="section-container relative z-10 text-center py-20">
          {/* Badge */}
          <RevealOnScroll>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full mb-8 text-left">
              <BadgeCheck className="w-4 h-4 text-accent-light shrink-0" />
              <span className="text-sm font-medium text-primary-foreground">
                +4 Años de Excelencia en el Mercado Peruano
              </span>
            </div>
          </RevealOnScroll>

          {/* Main Title */}
          <RevealOnScroll delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Ingeniería con Propósito.
              <br />
              <span className="text-accent-light">Construcción con Futuro.</span>
            </h1>
          </RevealOnScroll>

          {/* Subtitle */}
          <RevealOnScroll delay={0.2}>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Transformamos espacios y materializamos proyectos integrales bajo los más altos estándares de
              <strong className="text-primary-foreground"> calidad, seguridad y sostenibilidad.</strong>
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Nuestra Esencia - Split Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div className="relative">
              <RevealOnScroll>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  ¿Quiénes Somos?
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Gestión Integral Sin Fisuras
                </h2>
              </RevealOnScroll>
              <RevealOnScroll delay={0.1}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  En <strong className="text-foreground">DCA INGENIEROS</strong>, no solo construimos estructuras;
                  <strong className="text-foreground"> gestionamos soluciones</strong>. Nos especializamos en la ejecución integral
                  de proyectos de ingeniería, desde el diseño conceptual hasta la construcción y el mantenimiento post-entrega.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Nuestro enfoque combina la <strong className="text-foreground">precisión técnica</strong> con una gestión eficiente
                  de recursos, asegurando que cada proyecto, ya sea retail, industrial o corporativo, cumpla estrictamente
                  con los <strong className="text-foreground">plazos y presupuestos pactados</strong>.
                </p>
              </RevealOnScroll>
            </div>

            {/* Image with Badge */}
            <RevealOnScroll delay={0.3} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={nosotrosTeam}
                  alt="Equipo DCA Ingenieros"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              {/* Certification Badge Overlay */}
              <div className="absolute -bottom-6 right-4 md:right-8 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
                <div className="p-2 bg-primary-foreground/20 rounded-full">
                  <CheckCircle className="w-5 h-5 text-accent-light" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Certificación Trinorma</p>
                  <p className="text-xs text-primary-foreground/80">ISO 9001 | 14001 | 45001</p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Misión y Visión - Cards with Image */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <RevealOnScroll className="relative order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={nosotrosMision}
                  alt="Equipo trabajando en DCA"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </RevealOnScroll>

            {/* Cards */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Mission Card */}
              <RevealOnScroll delay={0.1}>
                <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Nuestra Misión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Brindar soluciones de ingeniería y construcción que <strong className="text-foreground">superen las expectativas del mercado</strong>,
                        garantizando la seguridad operacional, la calidad técnica y el respeto absoluto por el medio ambiente en cada intervención.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Vision Card */}
              <RevealOnScroll delay={0.2}>
                <div className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-xl">
                      <Eye className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Nuestra Visión</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Consolidarnos como el <strong className="text-foreground">socio estratégico líder</strong> en gestión de proyectos en el Perú,
                        reconocidos por nuestra capacidad de respuesta, innovación en procesos y ética profesional inquebrantable.
                      </p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Pilares (Valores) - Grid */}
      <section className="section-padding bg-background">
        <div className="section-container">
          {/* Section Header */}
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Lo Que Nos Define
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestros Pilares
            </h2>
          </RevealOnScroll>

          {/* Values Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <RevealOnScroll
                key={valor.title}
                delay={index * 0.1}
              >
                <div
                  className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300 group h-full"
                >
                  <div className="p-3 bg-primary/10 rounded-xl w-fit mb-5 group-hover:bg-primary/20 transition-colors">
                    <valor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{valor.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{valor.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section - Blue Background */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="section-container relative z-10">
          {/* Section Header */}
          <RevealOnScroll className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-wider mb-4 block">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
              Años de Crecimiento y Evolución
            </h2>
          </RevealOnScroll>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hitos.map((hito, index) => (
              <RevealOnScroll
                key={hito.year}
                delay={index * 0.1}
              >
                <div
                  className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all h-full"
                >
                  {/* Year Badge */}
                  <div className="absolute -top-3 left-6 px-4 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full">
                    {hito.year}
                  </div>

                  {/* Icon */}
                  <div className="p-3 bg-primary-foreground/20 rounded-xl w-fit mb-4 mt-2">
                    {index === 0 && <Building2 className="w-5 h-5 text-accent-light" />}
                    {index === 1 && <TrendingUp className="w-5 h-5 text-accent-light" />}
                    {index === 2 && <Award className="w-5 h-5 text-accent-light" />}
                    {index === 3 && <BadgeCheck className="w-5 h-5 text-accent-light" />}
                  </div>

                  <h3 className="text-lg font-bold text-primary-foreground mb-2">{hito.title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{hito.description}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones Section */}
      <section className="section-padding bg-section-gray">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <RevealOnScroll>
                <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
                  Nuestro Respaldo
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Respaldo que genera confianza
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Operamos bajo un <strong className="text-foreground">Sistema de Gestión Integrado</strong>,
                  cumpliendo con las normativas internacionales más exigentes:
                </p>
              </RevealOnScroll>

              <div className="space-y-4">
                <RevealOnScroll delay={0.1}>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">ISO 9001</p>
                      <p className="text-sm text-muted-foreground">Sistema de Gestión de Calidad</p>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.2}>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">ISO 14001</p>
                      <p className="text-sm text-muted-foreground">Sistema de Gestión Ambiental</p>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">ISO 45001</p>
                      <p className="text-sm text-muted-foreground">Sistema de Gestión de Seguridad y Salud</p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            </div>

            {/* Image */}
            <RevealOnScroll className="relative" delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={nosotrosHero}
                  alt="Proyecto de construcción DCA"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <RevealOnScroll>
            <div className="bg-gradient-to-br from-primary via-primary to-primary-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAzMHYySDI0di0yaDEyek0zNiAyNnYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  ¿Listo para iniciar su próximo proyecto?
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                  Deje la ingeniería en manos de expertos. Hagamos realidad su visión con los
                  <strong className="text-primary-foreground"> estándares que su empresa merece</strong>.
                </p>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent-light text-accent-foreground font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  Cotizar con un Ingeniero
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
