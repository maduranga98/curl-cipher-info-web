import React, { useEffect } from "react";
import Navbar from "./components/navBar";
import HeroSection from "./components/heroSection";
import VideoDemo from "./components/videodemo";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";

const App = () => {
  useEffect(() => {
    // Smooth scroll implementation
    const handleNavClick = (e) => {
      const href = e.target.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        const navHeight = 64; // Height of your navbar

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

    // Add click listeners to all navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleNavClick);
    });

    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleNavClick);
      });
    };
  }, []);

  return (
    <div className="pt-16">
      {" "}
      {/* Add padding-top to account for fixed navbar */}
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>

        <section id="how-it-works">
          <VideoDemo />
        </section>

        <section id="testimonials">
          <TestimonialCarousel />
        </section>

        <section id="pricing">
          <PricingSection />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
