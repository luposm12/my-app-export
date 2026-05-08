import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              The Shoreline Suite
            </h3>
            <p className="text-gray-400 leading-relaxed">{t.aboutText}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('villa')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {translations[language].nav.villa}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('location')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {translations[language].nav.location}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('gallery')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {translations[language].nav.gallery}
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {translations[language].nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">{t.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">{t.phone}</p>
                  <a
                    href="tel:+34630733619"
                    className="text-white hover:text-cyan-400 transition-colors"
                  >
                    +34 630 733 619
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">{t.location}</p>
                  <p className="text-white">{t.locationText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} BeachfrontVibe. {t.rights}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              {t.privacy}
            </button>
            <button className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
              {t.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
