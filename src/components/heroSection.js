import React from "react";
import { motion } from "framer-motion";
import { Star, Calendar, Users, Sparkles, Apple, Store } from "lucide-react";

const HeroSection = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description:
        "AI-powered booking system that optimizes your salon's schedule",
    },
    {
      icon: Users,
      title: "Client Management",
      description: "Complete client profiles with history and preferences",
    },
    {
      icon: Sparkles,
      title: "Dual Apps",
      description: "Separate apps for salon owners and customers",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between py-12 lg:py-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6"
            >
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-blue-800 font-medium">
                Rated #1 Salon Management App
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Revolutionize Your <br />
              <span className="text-blue-600">Salon Management</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Two powerful apps - one for salon owners to streamline operations,
              and one for customers to book appointments effortlessly.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-12"
            >
              <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Apple className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <Store className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* App Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative">
              {/* Owner App */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="absolute -left-4 top-0 w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-3 shadow-xl transform -rotate-6"
              >
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="w-full h-16 bg-blue-600 flex items-center justify-center text-white font-semibold">
                    Salon Owner App
                  </div>
                </div>
              </motion.div>

              {/* Customer App */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="relative ml-20 w-64 h-[500px] bg-gray-900 rounded-[2.5rem] p-3 shadow-xl transform rotate-6"
              >
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="w-full h-16 bg-purple-600 flex items-center justify-center text-white font-semibold">
                    Customer App
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100"
        >
          {[
            { label: "Active Salons", value: "2,000+" },
            { label: "Monthly Bookings", value: "50,000+" },
            { label: "App Downloads", value: "100,000+" },
            { label: "Customer Rating", value: "4.8/5" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
