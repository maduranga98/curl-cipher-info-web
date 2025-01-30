import React from "react";
import { Calendar, Settings, Heart } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, visualAlt }) => (
  <div className="flex flex-col items-center p-6 transition-all duration-300 hover:transform hover:scale-105">
    {/* Icon Container */}
    <div className="mb-6 transform transition-transform hover:scale-110">
      <div className="p-4 bg-blue-100 rounded-2xl">
        <Icon size={32} className="text-blue-600" />
      </div>
    </div>

    {/* Title */}
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>

    {/* Description */}
    <p className="text-gray-600 text-center mb-6">{description}</p>

    {/* Visual Aid Container */}
    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <p className="text-gray-400 text-sm">{visualAlt}</p>
      </div>
    </div>
  </div>
);

const FeatureHighlights = () => {
  const features = [
    {
      icon: Calendar,
      title: "Effortless Scheduling",
      description:
        "Say goodbye to booking chaos! Manage client appointments with ease using an intuitive calendar and automated reminders. Tailored for salons of all sizes.",
      visualAlt: "Scheduling Interface Preview",
    },
    {
      icon: Settings,
      title: "Comprehensive Management",
      description:
        "Streamline your salon operations with tools for inventory tracking, staff roles, payroll summaries, and financial reports, all in one app.",
      visualAlt: "Management Dashboard Preview",
    },
    {
      icon: Heart,
      title: "Customer-Centric Design",
      description:
        "Deliver an unparalleled customer experience with easy appointment booking, personalized notifications, and a seamless shopping experience through our app.",
      visualAlt: "Customer App Preview",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              visualAlt={feature.visualAlt}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
