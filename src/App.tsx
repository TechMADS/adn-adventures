import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Home } from "./pages/Home";
import { Packages } from "./pages/Packages";
import { PackageDetails } from "./pages/PackageDetails";
import { Gallery } from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import { Terms } from "./pages/Terms";
import NotFound from "./pages/NotFound";
import "./i18n/config";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactUs from "./pages/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:id" element={<PackageDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
