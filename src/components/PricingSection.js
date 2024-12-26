import React, { useState } from "react";
import { Check, CreditCard, DollarSign } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple Pricing for Every Salon
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that suits your salon's needs. No hidden fees, no
            surprises.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm ${
                !isAnnual ? "text-blue-600 font-semibold" : "text-gray-500"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-blue-600"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  isAnnual ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isAnnual ? "text-blue-600 font-semibold" : "text-gray-500"
              }`}
            >
              Annually{" "}
              <span className="text-green-500 font-semibold">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-blue-600 text-white shadow-xl scale-105 border-2 border-blue-400"
                  : "bg-white text-gray-900 shadow-lg"
              }`}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={
                    plan.highlighted ? "text-blue-100" : "text-gray-500"
                  }
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span
                    className={`ml-2 ${
                      plan.highlighted ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    /{isAnnual ? "year" : "month"}
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check
                      className={`w-5 h-5 mr-3 ${
                        plan.highlighted ? "text-blue-200" : "text-blue-500"
                      }`}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="text-center">
          <p className="text-gray-600 mb-8">
            Start your 14-day free trial. No credit card required. Cancel
            anytime.
          </p>

          {/* Enterprise Contact */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Need a custom solution?
            </h3>
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              Contact us for Enterprise plans →
            </button>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center items-center space-x-4">
            <span className="text-gray-500">Secure payment with</span>
            <div className="flex space-x-2">
              <CreditCard className="w-8 h-8 text-gray-400" />
              <DollarSign className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
