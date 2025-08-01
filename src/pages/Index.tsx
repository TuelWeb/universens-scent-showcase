import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Brand from "@/components/Brand";
import Catalog from "@/components/Catalog";
import Order from "@/components/Order";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Brand />
        <Catalog />
        <Testimonials />
        <Order />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
