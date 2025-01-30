import React, { useEffect } from "react";
import Navbar from "./components/navBar";
import HeroSection from "./components/heroSection";

import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import WhyChooseSection from "./components/TopReasonSection";

const App = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        const navHeight = 64;

        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleNavClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-navy">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>
      <main className=" md:pt-20">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <HeroSection />
        </section>

        <section
          id="how-it-works"
          className="bg-navy-50 px-4 sm:px-6 sm:mt-20 lg:px-8"
        >
          <KeyFeaturesSection />
        </section>

        <section id="features" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <WhyChooseSection />
        </section>

        <section id="pricing" className="py-16 md:py-24  px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </section>

        <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
