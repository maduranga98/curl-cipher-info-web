import React, { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import img1 from "../assets/images/image1.png";
import img2 from "../assets/images/image2.png";
import img3 from "../assets/images/image3.png";
import img4 from "../assets/images/image4.png";
import img5 from "../assets/images/image5.png";
import img6 from "../assets/images/image6.png";
import img7 from "../assets/images/image7.png";
import img8 from "../assets/images/image8.png";
import img9 from "../assets/images/image9.png";

const WhyChooseSection = () => {
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

  const audiences = [
    {
      title: "For Salon Owners & Professionals",
      features: [
        {
          title: "All-in-One Business Management",
          description:
            "Say goodbye to multiple apps and spreadsheets! Curl Cipher combines appointment scheduling, staff management, payroll, inventory tracking, and financial reports in a single platform.",
          image: img1,
          imagePosition: "right",
        },
        {
          title: "Boost Salon Efficiency & Revenue",
          description: [
            "Automate daily operations and reduce manual workload",
            "Manage multiple branches and staff with ease",
            "Track commissions, sales, and expenses in real time",
            "Gain insights through detailed analytics and financial reports",
          ],
          image: img2,
          imagePosition: "left",
        },
        {
          title: "Smarter Booking & Customer Engagement",
          description: [
            "Enable real-time appointment scheduling with stylist preferences",
            "Reduce no-shows with automated reminders and confirmations",
            "Create and promote exclusive deals and loyalty programs",
            "Increase product sales with an integrated online store",
          ],
          image: img3,
          imagePosition: "right",
        },
        {
          title: "Inventory & Financial Control",
          description: [
            "Monitor stock levels and automate inventory management",
            "Generate commission, tax, and cash flow reports with a single click",
            "Track payroll, staff incentives, and salon earnings in one place",
          ],
          image: img4,
          imagePosition: "left",
        },
        {
          title: "Customization & Scalability",
          description: [
            "Suitable for small salons, high-end boutiques, and large franchises",
            "Flexible pricing models based on gender, staff levels, and service type",
            "Cloud-based for easy access across devices, with data security ensured",
          ],
          image: img5,
          imagePosition: "right",
        },
      ],
    },
    {
      title: "For Customers",
      features: [
        {
          title: "Effortless Salon Discovery & Booking",
          description: [
            "Find top-rated salons near you with detailed service listings",
            "Filter by luxury, budget-friendly, or specialty salons",
            "Book your favorite stylists and choose available time slots instantly",
          ],
          image: img6,
          imagePosition: "left",
        },
        {
          title: "Transparent Pricing & Secure Payments",
          description: [
            "View upfront pricing for services before booking",
            "Pay securely via multiple payment options or at the salon",
            "Get instant confirmation and digital invoices for your bookings",
          ],
          image: img7,
          imagePosition: "right",
        },
        {
          title: "Personalized Experience & Convenience",
          description: [
            "Save favorite salons & stylists for quick future bookings",
            "Reschedule or cancel appointments with zero hassle",
            "Get personalized offers & exclusive discounts",
          ],
          image: img8,
          imagePosition: "left",
        },
        {
          title: "Beauty at Your Fingertips",
          description: [
            "Order salon-recommended beauty products for home delivery",
            "Receive appointment reminders & exclusive promotions",
            "Earn loyalty points and unlock premium salon benefits",
          ],
          image: img9,
          imagePosition: "right",
        },
      ],
    },
  ];

  return (
    <section className="bg-navy relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24 2xl:py-32">
      {/* Main Heading */}
      <div className="text-center mb-12 md:mb-16 lg:mb-20 2xl:mb-24 container mx-auto px-4 sm:px-6 md:px-8 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
        <h2 className="mb-6 md:mb-8 2xl:mb-10">
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-playfair">
            <span className="bg-gradient-to-r from-gold via-purple to-cyan bg-clip-text text-transparent">
              Top reasons
            </span>{" "}
            <span className="text-white">for choosing</span>
          </span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-playfair text-white mt-4 block">
            Curl Cipher
          </span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl max-w-3xl mx-auto text-lightGray">
          In today's fast-paced world, managing salon appointments and services
          shouldn't be a hassle. Curl Cipher offers a{" "}
          <span className="text-gold font-semibold">
            seamless, smart, and modern
          </span>{" "}
          solution for both{" "}
          <span className="text-gold font-semibold">salon owners</span> and{" "}
          <span className="text-gold font-semibold">customers</span>, making
          beauty and wellness services more accessible than ever.
        </p>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-6xl 2xl:max-w-7xl">
        {audiences.map((audience, audienceIndex) => (
          <div key={audienceIndex} className="mb-16 last:mb-0 2xl:mb-24">
            {/* Audience Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-playfair font-bold text-white text-center mb-8 md:mb-12 2xl:mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
              {audience.title}
            </h3>

            {/* Features */}
            {audience.features.map((feature, index) => (
              <div
                key={index}
                className="mb-12 md:mb-16 2xl:mb-24 last:mb-0 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div
                  className={`flex flex-col ${
                    feature.imagePosition === "right"
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  } items-center gap-6 md:gap-8 lg:gap-12 2xl:gap-16`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-3/5 relative">
                    {/* Vertical Line for Mobile */}
                    <div className="md:hidden absolute left-1/2 -bottom-8 h-16 w-px bg-gradient-to-b from-gold via-purple to-cyan transform -translate-x-1/2" />

                    <div
                      className={`bg-navy/40 backdrop-blur-sm border border-purple/20 rounded-xl md:rounded-2xl 2xl:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-16
                                   transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]
                                   ${
                                     feature.imagePosition === "right"
                                       ? "md:mr-6"
                                       : "md:ml-6"
                                   }
                                   hover:border-gold/30 hover:shadow-lg hover:shadow-purple/10`}
                    >
                      <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-playfair font-bold text-white mb-3 md:mb-4 2xl:mb-6 flex items-center gap-2">
                        <CheckCircle2 className="text-gold w-5 h-5 md:w-6 md:h-6 2xl:w-8 2xl:h-8" />
                        {feature.title}
                      </h4>
                      {Array.isArray(feature.description) ? (
                        <ul className="space-y-2 md:space-y-3 2xl:space-y-4">
                          {feature.description.map((item, i) => (
                            <li
                              key={i}
                              className="text-lightGray text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-poppins leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-gold mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-lightGray text-sm sm:text-base md:text-lg lg:text-xl 2xl:text-2xl font-poppins leading-relaxed">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-2/5 2xl:w-1/2 relative">
                    {/* Vertical Line for Desktop */}
                    <div
                      className={`hidden md:block absolute ${
                        feature.imagePosition === "right"
                          ? "left-0 -translate-x-1/2"
                          : "right-0 translate-x-1/2"
                      } top-1/2 h-16 w-px bg-gradient-to-b from-gold via-purple to-cyan transform -translate-y-1/2`}
                    />

                    <div
                      className={`bg-navy/40 backdrop-blur-sm border border-purple/20 rounded-xl md:rounded-2xl 2xl:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 2xl:p-16
                                   transform transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]
                                   ${
                                     feature.imagePosition === "right"
                                       ? "md:ml-6"
                                       : "md:mr-6"
                                   }
                                   hover:border-gold/30 hover:shadow-lg hover:shadow-purple/10
                                   flex items-center justify-center`}
                    >
                      <div className="w-full aspect-[4/3] relative 2xl:scale-125">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-full object-contain rounded-lg md:rounded-xl 2xl:rounded-2xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
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

export default WhyChooseSection;
