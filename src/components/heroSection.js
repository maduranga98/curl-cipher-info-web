import React, { useEffect } from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const HeroSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="min-h-screen bg-navy flex items-center px-6 md:px-12 lg:px-16 xl:px-20 py-8 md:py-10 lg:py-12 xl:py-16">
      <div className="flex flex-col w-full items-center text-center max-w-[1600px] mx-auto">
        {/* Text Content */}
        <div
          className="w-full mb-8 lg:mb-10 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationDelay: "200ms" }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-8xl font-playfair font-bold text-white mb-4 lg:mb-6 inline-block transform transition-transform duration-500 hover:scale-[1.02]">
            Revolutionizing Salon Management{" "}
            <span className="text-gold block mt-2 animate-pulse">
              with Curl Cipher
            </span>
          </h1>
          <p
            className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-poppins mb-6 text-lightGray max-w-3xl mx-auto animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
            style={{ animationDelay: "400ms" }}
          >
            Effortless booking, seamless management, and powerful analytics—all
            in one platform.
          </p>
        </div>

        {/* Buttons Stack */}
        <div
          className="flex flex-col gap-3 md:gap-4 w-full max-w-sm animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationDelay: "600ms" }}
        >
          <button className="bg-purple hover:bg-violet text-white px-6 py-3 lg:px-6 lg:py-3 2xl:px-9 2xl:py-4 rounded-full font-poppins font-semibold text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl w-full">
            Get Started
          </button>

          <button className="bg-gold hover:bg-cyan w-full flex items-center justify-center gap-3 px-6 py-3 lg:px-6 lg:py-3 2xl:px-9 2xl:py-4 rounded-full font-ubuntu font-bold text-charcoal text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
            <FaGooglePlay className="text-xl lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
            <span>Android App</span>
          </button>

          <button className="bg-cyan hover:bg-gold w-full flex items-center justify-center gap-3 px-6 py-3 lg:px-6 lg:py-3 2xl:px-9 2xl:py-4 rounded-full font-ubuntu font-bold text-charcoal text-base md:text-lg lg:text-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group">
            <FaApple className="text-xl lg:text-2xl transition-transform duration-300 group-hover:rotate-12" />
            <span>iOS App</span>
          </button>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute inset-0 bg-gradient-to-r from-purple/20 via-teal/20 to-cyan/20 animate-gradient-x"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }

        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
