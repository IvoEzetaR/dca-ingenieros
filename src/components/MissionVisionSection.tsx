import { Target, Eye } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

export const MissionVisionSection = () => {
    return (
        <section className="section-padding bg-secondary">
            <div className="section-container">
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Mission */}
                    <RevealOnScroll>
                        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border hover:shadow-lg transition-all h-full group">
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Misión</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Brindar soluciones integrales de ingeniería, construcción, mantenimiento y
                                        servicios generales incorporando soluciones innovadoras; teniendo como
                                        filosofía la calidad, optimización y seguridad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Vision */}
                    <RevealOnScroll delay={0.2}>
                        <div className="bg-card rounded-2xl p-8 md:p-10 shadow-md border border-border hover:shadow-lg transition-all h-full group">
                            <div className="flex items-start gap-5">
                                <div className="p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                                    <Eye className="w-8 h-8 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground mb-4">Visión</h3>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Ser reconocida a nivel nacional como una empresa consolidada por ser una
                                        organización confiable y honesta, con proyectos de excelente calidad, mejorando
                                        continuamente los procesos y fortaleciendo la competencia humana.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
};
