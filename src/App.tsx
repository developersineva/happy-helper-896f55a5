import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Remodel from "./pages/Remodel";
import FreeAssessment from "./pages/FreeAssessment";
import RenovateNow from "./pages/RenovateNow";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
import LandingAirbnb from "./pages/landing/LandingAirbnb";
import LandingPropertyValue from "./pages/landing/LandingPropertyValue";
import LandingInvestorFlip from "./pages/landing/LandingInvestorFlip";

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
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landing" element={<Remodel />} />
          <Route path="/free-assessment" element={<FreeAssessment />} />
          <Route path="/renovate-now" element={<RenovateNow />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/airbnb" element={<LandingAirbnb />} />
          <Route path="/property-value" element={<LandingPropertyValue />} />
          <Route path="/investor-flip" element={<LandingInvestorFlip />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
