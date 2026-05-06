import React, { useState, useEffect } from 'react';
import { Phone, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';

const ContactSection = () => {
  const { language, currency } = useLanguage();
  const t = translations[language].booking;

  const [price, setPrice] = useState(150);

  const currencyRates = {
    EUR: { symbol: '€', rate: 1 },
    USD: { symbol: '$', rate: 1.09 },
    GBP: { symbol: '£', rate: 0.86 }
  };

  const convertedPrice = Math.round(
    price * currencyRates[currency].rate
  );

  const benefits = [
    t.benefit1,
    t.benefit2,
    t.benefit3,
    t.benefit4
  ];

  const handleCallClick = () => {
    window.location.href = 'tel:+34630733619';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/34630733619', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-white/90">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="text-gray-600 text-lg">
                  {translations[language].sticky.starting}
                </span>
                <span className="text-4xl font-bold text-cyan-600">
                  {currencyRates[currency].symbol}
                  {convertedPrice}
                </span>
                <span className="text-gray-600 text-lg">
                  {translations[language].sticky.night}
                </span>
              </div>
              <p className="text-sm text-gray-500">
                * {language === 'en' ? 'Prices vary by season' : 'Los precios varían según la temporada'}
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>WhatsApp</span>
              </Button>

              <div className="text-center py-4">
                <p className="text-2xl font-bold text-gray-900">
                  +34 630 733 619
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {language === 'en' ? 'Contact via WhatsApp - Available 9am - 9pm CET' : 'Contactar por WhatsApp - Disponible 9h - 21h CET'}
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Card */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t.direct}
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-cyan-600" />
                    </div>
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl">
              <p className="text-sm text-gray-700 italic">
                {language === 'en'
                  ? '"Booking directly with BeachfrontVibe was seamless. The owner provided amazing local tips and we saved money compared to booking platforms!" - Recent Guest'
                  : '"Reservar directamente con BeachfrontVibe fue fácil. ¡El propietario nos dio consejos locales increíbles y ahorramos dinero en comparación con las plataformas de reserva!" - Huésped Reciente'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
