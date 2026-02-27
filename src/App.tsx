import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import DropYourIdea from "./pages/DropYourIdea";
import FreeDemoEA from "./pages/FreeDemoEA";
import OurStrategies from "./pages/OurStrategies";
import IBAccountBenefits from "./pages/IBAccountBenefits";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/drop-your-idea" element={<DropYourIdea />} />
          <Route path="/free-demo-ea" element={<FreeDemoEA />} />
          <Route path="/strategies" element={<OurStrategies />} />
          <Route path="/ib-account" element={<IBAccountBenefits />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
