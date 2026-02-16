import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Proyectos from "./pages/Proyectos";
import IngenieriaConstruccion from "./pages/servicios/IngenieriaConstruccion";
import ObrasServiciosGenerales from "./pages/servicios/ObrasServiciosGenerales";
import FerreteriaIntegral from "./pages/servicios/FerreteriaIntegral";
import AlquilerMaquinarias from "./pages/servicios/AlquilerMaquinarias";
import Importacion from "./pages/servicios/Importacion";
import GestionProyectos from "./pages/servicios/GestionProyectos";
import Noticias from "./pages/Noticias";
import Talento from "./pages/Talento";
import ProyectoCategoria from "./pages/ProyectoCategoria";
import LibroReclamaciones from "./pages/LibroReclamaciones";
import Terminos from "./pages/Terminos";
import Politica from "./pages/Politica";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/servicios/ingenieria-construccion" element={<IngenieriaConstruccion />} />
          <Route path="/servicios/obras-servicios-generales" element={<ObrasServiciosGenerales />} />
          <Route path="/servicios/ferreteria-integral" element={<FerreteriaIntegral />} />
          <Route path="/servicios/alquiler-maquinarias" element={<AlquilerMaquinarias />} />
          <Route path="/servicios/importacion" element={<Importacion />} />
          <Route path="/servicios/gestion-proyectos" element={<GestionProyectos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/talento" element={<Talento />} />
          <Route path="/proyectos/:category" element={<ProyectoCategoria />} />
          <Route path="/libro-de-reclamaciones" element={<LibroReclamaciones />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/politica" element={<Politica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
