import React, { useState, useEffect } from "react";
import { Mail, Phone, Send, AlertCircle, Check } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    emailjs.init("kr0MfANBJf4uPBfE-");

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitStatus({ success: false, message: "" });

      try {
        const result = await emailjs.send(
          "service_wxz30ol",
          "template_9cledgf",
          {
            from_name: formData.name,
            reply_to: formData.email,
            phone_number: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }
        );

        if (result.status === 200) {
          setSubmitStatus({
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          });
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 5000); // Hide after 5 seconds
        }
      } catch (error) {
        setSubmitStatus({
          success: false,
          message: "Failed to send message. Please try again later.",
        });
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 5000);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
    if (submitStatus.message) {
      setSubmitStatus({ success: false, message: "" });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 2xl:py-36 bg-gradient-to-b from-navy via-purple/10 to-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 2xl:max-w-8xl">
        {/* Animated Notification */}
        {showNotification && submitStatus.message && (
          <div
            className={`fixed top-4 right-4 z-50 w-96 max-w-[90vw] transition-all duration-500 ease-in-out transform ${
              showNotification
                ? "translate-y-0 opacity-100"
                : "translate-y-[-100%] opacity-0"
            }`}
          >
            <div
              className={`${
                submitStatus.success
                  ? "bg-green-500/10 border-green-500/20"
                  : "bg-red-500/10 border-red-500/20"
              } border rounded-lg backdrop-blur-md shadow-lg p-4`}
            >
              <div className="flex items-center gap-2">
                {submitStatus.success ? (
                  <Check
                    className={`w-5 h-5 ${
                      submitStatus.success ? "text-green-500" : "text-red-500"
                    }`}
                  />
                ) : (
                  <AlertCircle
                    className={`w-5 h-5 ${
                      submitStatus.success ? "text-green-500" : "text-red-500"
                    }`}
                  />
                )}
                <p
                  className={`${
                    submitStatus.success ? "text-green-500" : "text-red-500"
                  } text-sm font-medium`}
                >
                  {submitStatus.message}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-24 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-playfair font-bold mb-4 2xl:mb-6">
            <span className="bg-gradient-to-r from-gold via-purple to-cyan bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-poppins text-lightGray">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="max-w-3xl 2xl:max-w-4xl mx-auto">
          <div className="bg-navy/40 backdrop-blur-sm border border-purple/20 rounded-2xl 2xl:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10 2xl:p-12 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 2xl:gap-12 mb-8 sm:mb-10 lg:mb-12 2xl:mb-16">
              <div className="flex items-center transform transition-all duration-300 hover:-translate-y-1">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 text-gold mr-3 2xl:mr-4" />
                <div>
                  <h3 className="font-semibold text-cyan font-poppins text-base sm:text-lg 2xl:text-xl">
                    Email Us
                  </h3>
                  <p className="text-lightGray text-sm sm:text-base 2xl:text-lg">
                    support@curlcipher.com
                  </p>
                </div>
              </div>
              <div className="flex items-center transform transition-all duration-300 hover:-translate-y-1">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 2xl:w-8 2xl:h-8 text-gold mr-3 2xl:mr-4" />
                <div>
                  <h3 className="font-semibold text-cyan font-poppins text-base sm:text-lg 2xl:text-xl">
                    Call Us
                  </h3>
                  <p className="text-lightGray text-sm sm:text-base 2xl:text-lg">
                    +94 (76) 620-6555
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 2xl:gap-8 mb-6 2xl:mb-8">
                {/* Name Field */}
                <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8">
                  <label className="block text-sm sm:text-base 2xl:text-lg font-medium text-cyan mb-2 2xl:mb-3 font-poppins">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 bg-navy/60 border border-purple/30 rounded-lg 2xl:rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-white placeholder-lightGray/50 text-base 2xl:text-lg"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm 2xl:text-base text-gold flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div
                  className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                  style={{ animationDelay: "100ms" }}
                >
                  <label className="block text-sm sm:text-base 2xl:text-lg font-medium text-cyan mb-2 2xl:mb-3 font-poppins">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 bg-navy/60 border border-purple/30 rounded-lg 2xl:rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-white placeholder-lightGray/50 text-base 2xl:text-lg"
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm 2xl:text-base text-gold flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div
                  className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                  style={{ animationDelay: "200ms" }}
                >
                  <label className="block text-sm sm:text-base 2xl:text-lg font-medium text-cyan mb-2 2xl:mb-3 font-poppins">
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 bg-navy/60 border border-purple/30 rounded-lg 2xl:rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-white placeholder-lightGray/50 text-base 2xl:text-lg"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {/* Subject Field */}
                <div
                  className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                  style={{ animationDelay: "300ms" }}
                >
                  <label className="block text-sm sm:text-base 2xl:text-lg font-medium text-cyan mb-2 2xl:mb-3 font-poppins">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 2xl:px-6 2xl:py-4 bg-navy/60 border border-purple/30 rounded-lg 2xl:rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-white placeholder-lightGray/50 text-base 2xl:text-lg"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div
                className="mb-6 2xl:mb-8 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-8"
                style={{ animationDelay: "400ms" }}
              >
                <label className="block text-sm sm:text-base 2xl:text-lg font-medium text-cyan mb-2 2xl:mb-3 font-poppins">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 2xl:px-6 2xl:py-4 bg-navy/60 border border-purple/30 rounded-lg 2xl:rounded-xl focus:ring-2 focus:ring-gold/50 outline-none transition-all text-white placeholder-lightGray/50 text-base 2xl:text-lg"
                  placeholder="Your message here..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm 2xl:text-base text-gold flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full md:w-auto px-8 py-3 2xl:px-12 2xl:py-4 bg-gradient-to-r from-purple to-violet text-white rounded-lg 2xl:rounded-xl font-poppins font-semibold text-base 2xl:text-lg transition-all duration-300 flex items-center justify-center group transform hover:scale-105 ${
                  isSubmitting
                    ? "opacity-75 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              >
                <Send
                  className={`w-4 h-4 2xl:w-5 2xl:h-5 mr-2 group-hover:translate-x-1 transition-transform ${
                    isSubmitting && "animate-pulse"
                  }`}
                />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
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

export default ContactForm;
