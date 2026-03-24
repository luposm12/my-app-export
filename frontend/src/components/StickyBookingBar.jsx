import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';

const StickyBookingBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language, currency } = useLanguage();
  const t = translations[language].sticky;

  const currencyRates = {
    EUR: { symbol: '€', rate: 1 },
    USD: { symbol: '$', rate: 1.09 },
    GBP: { symbol: '£', rate: 0.86 }
  };

  const basePrice = 150;
  const convertedPrice = Math.round(basePrice * currencyRates[currency].rate);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-sm text-gray-600">{t.starting}</p>
              <p className="text-2xl font-bold text-cyan-600">
                {currencyRates[currency].symbol}
                {convertedPrice}
                <span className="text-sm text-gray-600 ml-1">
                  {t.night}
                </span>
              </p>
            </div>
          </div>
          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <Phone className="w-4 h-4" />
            <span>{t.contact}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBookingBar;
