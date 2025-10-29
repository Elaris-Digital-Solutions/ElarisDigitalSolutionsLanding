import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Services from "@/components/Services";
import TechnologiesCarousel from "@/components/ui/technologies-carousel";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
        <main className="site-sections">
          <ValueProposition />
          <Services />
          <TechnologiesCarousel />
          <Portfolio />
          <Process />
          <Testimonials />
          <About />
          <Contact />
        </main>
      <Footer />
    </div>
  );
};

export default Index;
