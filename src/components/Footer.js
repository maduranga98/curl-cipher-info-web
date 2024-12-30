import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "/social/facebook" },
    { icon: Instagram, label: "Instagram", url: "/social/instagram" },
    { icon: Linkedin, label: "LinkedIn", url: "/social/linkedin" },
    { icon: Twitter, label: "Twitter", url: "/social/twitter" },
  ];

  const quickLinks = [
    { name: "About Us", url: "/about" },
    { name: "Features", url: "/features" },
    { name: "How It Works", url: "/how-it-works" },
    { name: "Pricing", url: "/pricing" },
    { name: "Contact", url: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: "/privacy" },
    { name: "Terms of Use", url: "/terms" },
    { name: "Cookie Policy", url: "/cookies" },
    { name: "GDPR", url: "/gdpr" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Curl Cipher</h3>
            <p className="text-gray-400 mb-4">
              Revolutionizing salon management with smart solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map(({ name, url }) => (
                <li key={name}>
                  <a
                    href={url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} />
                <a
                  href="mailto:support@curlcipher.com"
                  className="hover:text-white transition-colors"
                >
                  support@curlcipher.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} />
                <a
                  href="tel:+15551234567"
                  className="hover:text-white transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Curl Cipher. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
