import React, { useEffect } from "react";
import {
  Layers,
  Building,
  Smartphone,
  Image,
  ShoppingCart,
  Users,
  Laptop,
} from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";

const KeyFeaturesSection = () => {
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

  const features = [
    {
      icon: <Layers size={24} className="text-gold" />,
      title: "Two Powerful Applications",
      description:
        "Manage your salon effortlessly with dedicated apps for businesses and customers.",
    },
    {
      icon: <Building size={24} className="text-gold" />,
      title: "Multi-Business & Branch Control",
      description:
        "Monitor and operate multiple salons or branches from a single dashboard.",
    },
    {
      icon: <Smartphone size={24} className="text-gold" />,
      title: "Complete Business Management",
      description:
        "Handle appointments, staff, inventory, and customer relations—all in one place.",
    },
    {
      icon: <Image size={24} className="text-gold" />,
      title: "Boost Sales with Marketing Tools",
      description:
        "Create promotional banners and images to enhance salon visibility and attract customers.",
    },
    {
      icon: <ShoppingCart size={24} className="text-gold" />,
      title: "Sell & Purchase Products",
      description:
        "Manage salon inventory, sell beauty products, and track purchases effortlessly.",
    },
    {
      icon: <Users size={24} className="text-gold" />,
      title: "Role-Based Access & Security",
      description:
        "Ensure controlled access with customizable roles for owners, managers, and staff.",
    },
  ];

  const platforms = [
    {
      icon: <Laptop size={24} className="text-cyan" />,
      name: "Web App",
      bgHover: "hover:bg-cyan/10",
    },
    {
      icon: <FaApple size={24} className="text-white" />,
      name: "iOS App",
      bgHover: "hover:bg-purple/10",
    },
    {
      icon: <FaAndroid size={24} className="text-gold" />,
      name: "Android App",
      bgHover: "hover:bg-gold/10",
    },
  ];

  return (
    <section className="bg-navy">
      <div className="bg-navy pt-20 2xl:pt-36">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-playfair font-bold text-white mb-3 md:mb-4">
            What is Curl Cipher?
          </h2>
          <p className="text-base md:text-lg text-lightGray max-w-2xl mx-auto font-poppins">
            Curl Cipher is the ultimate solution for seamless salon management,
            empowering businesses and customers alike.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-navy border border-purple/20 p-6 md:p-8 rounded-lg animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8 hover:border-gold/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-purple/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-gold/10">
                  {feature.icon}
                </div>
                <h3 className="text-base md:text-lg font-playfair font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-lightGray leading-relaxed font-poppins">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Get Started Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl font-playfair font-bold text-white text-center mb-8 md:mb-10 lg:mb-12 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          Get Started with <span className="text-gold">Curl Cipher</span>
        </h2>

        {/* Platform Selection Box */}
        <div className="relative bg-gradient-to-r from-purple/20 via-navy to-cyan/20 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 2xl:p-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 2xl:gap-12 max-w-3xl 2xl:max-w-5xl mx-auto">
            {platforms.map((platform, index) => (
              <div
                key={index}
                className="group cursor-pointer animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{
                  animationDelay: `${(index + features.length) * 100}ms`,
                }}
              >
                <div
                  className={`bg-navy/40 backdrop-blur-sm border border-purple/20 rounded-lg md:rounded-xl 2xl:rounded-2xl p-4 md:p-6 lg:p-8 2xl:p-10
                    flex flex-col items-center gap-3 md:gap-4 lg:gap-6 2xl:gap-8
                    transition-all duration-300 
                    hover:border-gold/30 hover:shadow-lg hover:shadow-purple/10
                    transform hover:-translate-y-1 hover:scale-105`}
                >
                  <div
                    className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 rounded-lg md:rounded-xl 2xl:rounded-2xl bg-purple/10 flex items-center justify-center 
                      transition-colors duration-300 ${platform.bgHover}`}
                  >
                    {React.cloneElement(platform.icon, {
                      size:
                        typeof window !== "undefined" &&
                        window.innerWidth >= 1536
                          ? 32
                          : 24,
                    })}
                  </div>
                  <p className="text-white font-poppins text-sm md:text-base lg:text-lg 2xl:text-xl">
                    {platform.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default KeyFeaturesSection;
