import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
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
        <ServicesSection />
        <CertificationsSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
