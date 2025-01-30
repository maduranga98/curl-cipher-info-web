import React, { useState, useEffect, useMemo } from "react";
import { Menu, X, ChevronDown, Download } from "lucide-react";
import logo from "../assets/c_logo.png";
import { FaAndroid, FaApple } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = useMemo(
    () => [
      { name: "Home", href: "#home" },
      { name: "Product", href: "#how-it-works" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact Us", href: "#contact" },
    ],
    []
  );

  const downloadOptions = [
    {
      name: "Android App",
      icon: <FaAndroid size={28} className="text-navy" />,
      href: "#android-download",
    },
    {
      name: "iOS App",
      icon: <FaApple size={28} className="text-navy" />,

      href: "#ios-download",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));
      const navHeight = 64;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= navHeight + 50 && rect.bottom >= navHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".download-container")) {
        setIsDownloadOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-navy shadow-md fixed top-0 left-0 right-0 z-50 font-poppins text-base xl:text-lg">
      <div className="max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-4">
        <div className="flex justify-between items-center h-16 md:h-20 xl:h-24">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 flex items-center">
            <img
              src={logo}
              alt="Curl Cipher Logo"
              className="h-10 mr-2 md:h-12 xl:h-14"
            />
            <span className="text-xl md:text-2xl xl:text-3xl font-bold text-lightGray">
              Curl Cipher
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base lg:text-lg xl:text-xl font-medium transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400/80"
                }`}
              >
                {link.name}
              </a>
            ))}

            {/* Download Dropdown */}
            <div className="relative download-container">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDownloadOpen(!isDownloadOpen);
                }}
                className="flex items-center space-x-2 bg-teal text-white px-4 py-2 rounded-lg text-base xl:text-lg font-semibold hover:bg-teal/90 transition-colors duration-300 shadow-sm hover:shadow-md"
              >
                <Download className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>Download Now</span>
                <ChevronDown
                  className={`w-5 h-5 lg:w-6 lg:h-6 transition-transform duration-300 ${
                    isDownloadOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {isDownloadOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  {downloadOptions.map((option) => (
                    <a
                      key={option.name}
                      href={option.href}
                      className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      {option.icon}
                      <span className="text-base lg:text-lg xl:text-xl font-medium">
                        {option.name}
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-teal/80 focus:outline-none transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2.5 text-base font-medium rounded-lg transition-colors duration-300 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-yellow-400 bg-yellow-400/10"
                      : "text-white hover:text-yellow-400/80 hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Download Options */}
              <div className="px-3 pt-2 space-y-2">
                {downloadOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.href}
                    className="flex items-center space-x-3 w-full bg-teal/10 text-white px-4 py-3 rounded-lg text-base font-medium hover:bg-teal/20 transition-colors duration-300"
                  >
                    {option.icon}
                    <span>{option.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
