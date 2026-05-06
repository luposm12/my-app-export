import React from 'react';
import {
  Sailboat,
  Ship,
  Trophy,
  Bike,
  ShoppingBag,
  UtensilsCrossed
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const ExperiencesSection = () => {
  const { language } = useLanguage();
  const t = translations[language].experiences;

  const experiences = [
    {
      icon: Sailboat,
      title: t.parasailing.title,
      description: t.parasailing.description,
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=85'
    },
    {
      icon: Ship,
      title: t.catamaran.title,
      description: t.catamaran.description,
      image:
        'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85'
    },
    {
      icon: Trophy,
      title: t.golf.title,
      description: t.golf.description,
      image:
        'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&q=85'
    },
    {
      icon: Bike,
      title: t.cycling.title,
      description: t.cycling.description,
      image:
        'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=800&q=85'
    },
    {
      icon: ShoppingBag,
      title: t.markets.title,
      description: t.markets.description,
      image:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=85'
    },
    {
      icon: UtensilsCrossed,
      title: t.dining.title,
      description: t.dining.description,
      image:
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=85'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
