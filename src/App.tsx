import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITInfrastructure from "./pages/services/ITInfrastructure";
import Cybersecurity from "./pages/services/Cybersecurity";
import GRC from "./pages/services/GRC";
import CloudSolutions from "./pages/services/CloudSolutions";
import DigitalCollaboration from "./pages/services/DigitalCollaboration";
import ManagedITSolutions from "./pages/services/ManagedITSolutions";
import CustomerJourney from "./pages/services/CustomerJourney";
import ERP from "./pages/services/ERP";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/grc" element={<GRC />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/digital-collaboration" element={<DigitalCollaboration />} />
          <Route path="/services/managed-it-solutions" element={<ManagedITSolutions />} />
          <Route path="/services/customer-journey" element={<CustomerJourney />} />
          <Route path="/services/erp" element={<ERP />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
