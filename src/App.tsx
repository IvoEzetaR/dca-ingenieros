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
import Noticias from "./pages/Noticias";
import Talento from "./pages/Talento";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

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
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/talento" element={<Talento />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
