import { RevealOnScroll } from "./RevealOnScroll";
import logo1 from "@/assets/Logos/Logo1.png";
import logo3 from "@/assets/Logos/Logo3.png";
import logo4 from "@/assets/Logos/Logo4.png";
import logo5 from "@/assets/Logos/Logo5.png";
import logo6 from "@/assets/Logos/Logo6.png";
import logo7 from "@/assets/Logos/Logo7.png";
import logo8 from "@/assets/Logos/Logo8.png";
import logo9 from "@/assets/Logos/Logo9.png";
import logo10 from "@/assets/Logos/Logo10.png";
import logo11 from "@/assets/Logos/Logo11.png";

const clients = [
  { name: "ALESE KIA", logo: logo1 },
  { name: "Grupo ATV", logo: logo3 },
  { name: "Medifarma", logo: logo4 },
  { name: "MegaPlaza", logo: logo5 },
  { name: "Cad & Lan", logo: logo6 },
  { name: "Academia ADUNI", logo: logo7 },
  { name: "MERCK", logo: logo8 },
  { name: "Banco de la Nación", logo: logo9 },
  { name: "Cineplanet", logo: logo10 },
  { name: "COVISOL", logo: logo11 },
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
          <div className="flex animate-scroll w-max gap-0">
            {/* Original set of logos */}
            {clients.map((client, index) => (
              <div
                key={`orig-${index}`}
                className="flex-shrink-0 mx-4 md:mx-10 flex items-center justify-center"
              >
                <div className="w-52 md:w-80 h-36 md:h-44 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center p-8 border border-border/50 hover:bg-white hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 scale-110 group-hover:scale-125"
                  />
                </div>
              </div>
            ))}
            {/* Duplicated set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`dup-${index}`}
                className="flex-shrink-0 mx-4 md:mx-10 flex items-center justify-center"
              >
                <div className="w-52 md:w-80 h-36 md:h-44 bg-white/50 backdrop-blur-sm rounded-xl flex items-center justify-center p-8 border border-border/50 hover:bg-white hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md group">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 scale-110 group-hover:scale-125"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays for smoother transitions */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>
    </section>
  );
};
