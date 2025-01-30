import React, { useEffect } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logo from "../assets/c_logo.png";

const Footer = () => {
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

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "/social/facebook" },
    { icon: Instagram, label: "Instagram", url: "/social/instagram" },
    { icon: Linkedin, label: "LinkedIn", url: "/social/linkedin" },
    { icon: Twitter, label: "Twitter", url: "/social/twitter" },
  ];

  // Updated quickLinks to match App.js and Navbar structure
  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "Product", url: "#how-it-works" },
    { name: "Features", url: "#features" },
    { name: "Pricing", url: "#pricing" },
    { name: "Contact Us", url: "#contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Use", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "GDPR", url: "/gdpr" },
  ];

  return (
    <footer className="bg-navy relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple/5 to-cyan/5 pointer-events-none" />
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 2xl:py-20">
        {/* Top Section: Logo, Quick Links, Legal, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 2xl:gap-16">
          {/* Company Info */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            <div className="flex flex-col items-start mb-6">
              <img
                src={logo}
                alt="Curl Cipher Logo"
                className="w-16 h-16 sm:w-20 sm:h-20 2xl:w-24 2xl:h-24 mb-4 object-contain transform hover:scale-105 transition-transform duration-300"
              />
              <h3 className="text-xl lg:text-2xl 2xl:text-3xl font-playfair font-bold bg-gradient-to-r from-gold via-purple to-cyan bg-clip-text text-transparent">
                Curl Cipher
              </h3>
            </div>
            <p className="text-lightGray text-sm lg:text-base 2xl:text-lg font-poppins leading-relaxed mb-4">
              Streamline salon operations, enhance customer experiences, and
              drive business growth.
            </p>
            <div className="flex space-x-5">
              {socialLinks.map(({ icon: Icon, label, url }, index) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="text-lightGray hover:text-gold transition-all duration-300 transform hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon size={20} className="2xl:w-6 2xl:h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Quick links"
            className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
            style={{ animationDelay: "200ms" }}
          >
            <h3 className="text-lg 2xl:text-xl font-poppins font-semibold mb-4 text-cyan">
              Quick Links
            </h3>
            <ul className="space-y-2 2xl:space-y-3">
              {quickLinks.map(({ name, url }, index) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-lightGray hover:text-gold transition-all duration-300 font-poppins text-sm lg:text-base 2xl:text-lg hover:translate-x-1 inline-block"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal Links */}
          <nav
            aria-label="Legal"
            className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
            style={{ animationDelay: "400ms" }}
          >
            <h3 className="text-lg 2xl:text-xl font-poppins font-semibold mb-4 text-cyan">
              Legal
            </h3>
            <ul className="space-y-2 2xl:space-y-3">
              {legalLinks.map(({ name, url }, index) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-lightGray hover:text-gold transition-all duration-300 font-poppins text-sm lg:text-base 2xl:text-lg hover:translate-x-1 inline-block"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div
            className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
            style={{ animationDelay: "600ms" }}
          >
            <h3 className="text-lg 2xl:text-xl font-poppins font-semibold mb-4 text-cyan">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 2xl:space-y-4">
              <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                <Mail
                  size={18}
                  className="text-gold group-hover:rotate-12 transition-transform duration-300 2xl:w-6 2xl:h-6"
                />
                <a
                  href="mailto:support@curlcipher.com"
                  className="text-lightGray group-hover:text-gold transition-colors duration-300 font-poppins text-sm lg:text-base 2xl:text-lg"
                >
                  support@curlcipher.com
                </a>
              </div>
              <div className="flex items-center space-x-3 group hover:-translate-y-1 transition-transform duration-300">
                <Phone
                  size={18}
                  className="text-gold group-hover:rotate-12 transition-transform duration-300 2xl:w-6 2xl:h-6"
                />
                <a
                  href="tel:+94766206555"
                  className="text-lightGray group-hover:text-gold transition-colors duration-300 font-poppins text-sm lg:text-base 2xl:text-lg"
                >
                  +94 (76) 620-6555
                </a>
              </div>
              <div className="flex items-start space-x-4 group hover:-translate-y-1 transition-transform duration-300">
                <MapPin
                  size={18}
                  className="text-gold mt-1 flex-shrink-0 group-hover:rotate-12 transition-transform duration-300 w-6 h-6 lg:w-7 lg:h-7 2xl:w-8 2xl:h-8"
                />
                <p className="text-lightGray font-poppins text-sm lg:text-base 2xl:text-lg leading-relaxed">
                  Office 4157, 58 Peregrine Road Hainault Ilford Essex United
                  Kingdom IG6 3SZ
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-8 lg:mt-12 2xl:mt-16 pt-6 border-t border-purple/20 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-lightGray font-poppins text-sm lg:text-base 2xl:text-lg">
            © {new Date().getFullYear()} LUMORA VENTURES PVT LTD. All Rights
            Reserved.
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
