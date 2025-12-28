import { RevealOnScroll } from "./RevealOnScroll";

const clients = [
  { name: "PROSEGUR" },
  { name: "SENATI" },
  { name: "GRUPO ATV" },
  { name: "CAD&LAN" },
  { name: "BANCO DE LA NACIÓN" },
  { name: "SAN FERNANDO" },
];

export const ClientsSection = () => {
  return (
    <section id="clientes" className="section-padding bg-background">
      <div className="section-container">
        <RevealOnScroll className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
            Nuestros Clientes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Clientes que <span className="text-primary">confían</span> en
            nosotros
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabajamos con empresas líderes en diversos sectores de la
            industria nacional.
          </p>
        </RevealOnScroll>

        {/* Client Logo Carousel */}
        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-48 h-24 bg-secondary rounded-lg flex items-center justify-center px-6 hover:bg-secondary/80 transition-colors group cursor-pointer">
                  <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless scroll */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <div className="w-48 h-24 bg-secondary rounded-lg flex items-center justify-center px-6 hover:bg-secondary/80 transition-colors group cursor-pointer">
                  <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors text-center">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
