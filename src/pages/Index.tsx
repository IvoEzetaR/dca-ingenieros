import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { MissionVisionSection } from "@/components/MissionVisionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { MethodologySection } from "@/components/MethodologySection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MissionVisionSection />
        <ServicesSection />
        <MethodologySection />
        <CertificationsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
