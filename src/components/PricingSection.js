import React, { useState, useEffect } from "react";
import { Check } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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

  const plans = [
    {
      name: "Basic",
      description: "Perfect for small salons getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 3 staff accounts",
        "Basic appointment scheduling",
        "Simple inventory tracking",
        "Basic financial reports",
        "Customer booking app",
        "Email support",
      ],
      highlighted: false,
      buttonText: "Start Free Trial",
    },
    {
      name: "Standard",
      description: "Ideal for growing salons",
      monthlyPrice: 59,
      annualPrice: 590,
      features: [
        "Up to 10 staff accounts",
        "Advanced scheduling",
        "Full inventory management",
        "Detailed financial reports",
        "Custom branding",
        "Priority support",
        "SMS notifications",
        "Marketing tools",
      ],
      highlighted: true,
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      description: "For established salons",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Unlimited staff accounts",
        "Advanced analytics",
        "Multi-location support",
        "API access",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label option",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-navy via-purple/10 to-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-8xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-playfair font-bold text-white mb-4 2xl:mb-6">
            Simple Pricing for Every Salon
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-poppins text-lightGray mb-8 2xl:mb-12">
            Choose the plan that suits your salon's needs. No hidden fees, no
            surprises.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 2xl:gap-6">
            <span
              className={`text-sm sm:text-base md:text-lg 2xl:text-xl font-medium ${
                !isAnnual ? "text-gold" : "text-lightGray"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 2xl:h-8 2xl:w-16 items-center rounded-full bg-purple"
            >
              <span
                className={`inline-block h-4 w-4 2xl:h-6 2xl:w-6 transform rounded-full bg-white transition-transform duration-300 ${
                  isAnnual ? "translate-x-7 2xl:translate-x-9" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm sm:text-base md:text-lg 2xl:text-xl font-medium ${
                isAnnual ? "text-gold" : "text-lightGray"
              }`}
            >
              Annually{" "}
              <span className="text-green-500 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 2xl:gap-12 mb-16 2xl:mb-24">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl 2xl:rounded-3xl p-6 sm:p-8 lg:p-10 2xl:p-12 shadow-lg animate-on-scroll opacity-0 transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] ${
                plan.highlighted
                  ? "bg-purple text-white border-2 border-gold"
                  : "bg-white text-charcoal"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6 sm:mb-8 2xl:mb-10">
                <h3
                  className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-playfair font-bold ${
                    plan.highlighted ? "text-gold" : "text-purple"
                  } mb-2 2xl:mb-4`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-base sm:text-lg md:text-xl 2xl:text-2xl font-poppins ${
                    plan.highlighted ? "text-white" : "text-lightGray"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <div className="mb-6 sm:mb-8 2xl:mb-10">
                <div className="flex items-baseline">
                  <span className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span
                    className={`ml-2 text-base sm:text-lg md:text-xl 2xl:text-2xl font-poppins ${
                      plan.highlighted ? "text-white" : "text-lightGray"
                    }`}
                  >
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>
              </div>
              <ul className="mb-6 sm:mb-8 2xl:mb-10 space-y-3 sm:space-y-4 2xl:space-y-6">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-base sm:text-lg md:text-xl 2xl:text-2xl font-poppins"
                  >
                    <Check
                      className={`w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8 mr-3 ${
                        plan.highlighted ? "text-gold" : "text-purple"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 sm:py-4 2xl:py-6 px-6 rounded-lg 2xl:rounded-xl font-poppins text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold transition-transform duration-300 hover:scale-105 ${
                  plan.highlighted
                    ? "bg-gold text-purple hover:bg-yellow-400"
                    : "bg-purple text-white hover:bg-violet"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-poppins text-lightGray">
            Start your 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
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

export default PricingSection;
