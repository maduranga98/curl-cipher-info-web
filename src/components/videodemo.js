import React from "react";
import { Play, Star, Download, Apple, Store } from "lucide-react";
import FeatureHighlights from "./featureHighLights";

const VideoDemo = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Curl Cipher in Action!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Curl Cipher transforms salon management with this quick
            demo.
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 to-blue-900">
              <button className="w-20 h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all group">
                <Play size={36} className="text-white ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Key Highlights */}
        <FeatureHighlights />
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Effortless Scheduling",
              description: "Manage client appointments with ease.",
            },
            {
              title: "Powerful Management Tools",
              description: "Keep track of inventory and staff effortlessly.",
            },
            {
              title: "Enhanced Customer Experience",
              description: "Simplify bookings and purchases for clients.",
            },
          ].map((highlight, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {highlight.title}
              </h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div> */}

        {/* Rating */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < 4
                    ? "text-yellow-400 fill-yellow-400"
                    : "text-yellow-400 fill-yellow-400 opacity-50"
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-gray-600">
            Rated 4.8/5 by salon professionals
          </span>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors mb-6">
            Request a Live Demo
          </button>

          <p className="text-gray-600 mb-6">
            Available on Google Play and App Store
          </p>

          {/* App Store Links */}
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Apple size={24} />
              <span>App Store</span>
            </button>
            <button className="flex items-center space-x-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              <Store size={24} />
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
