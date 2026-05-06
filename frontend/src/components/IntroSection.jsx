import React from 'react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const IntroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].intro;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-amber-100 rounded-full">
              <span className="text-amber-800 font-bold text-sm tracking-wider">
                {t.rare}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.description}
            </p>
            <div className="space-y-4">
              {[t.feature1, t.feature2, t.feature3, t.feature4].map(
                (feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-cyan-600" />
                      </div>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/4lq29sa7_WhatsApp%20Image%202026-05-04%20at%2017.54.44.jpeg"
                alt="Villa exterior"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl -z-10 blur-2xl opacity-30" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl -z-10 blur-2xl opacity-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
