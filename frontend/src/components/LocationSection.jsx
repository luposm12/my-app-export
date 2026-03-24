import React from 'react';
import {
  MapPin,
  Sun,
  Trees,
  Trophy,
  Building,
  Plane,
  Navigation
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const LocationSection = () => {
  const { language } = useLanguage();
  const t = translations[language].location;

  const highlights = [
    { icon: MapPin, label: t.blueFlag },
    { icon: Sun, label: t.climate },
    { icon: Trees, label: t.reserves },
    { icon: Trophy, label: t.golf },
    { icon: Building, label: t.infrastructure },
    { icon: Plane, label: t.airports }
  ];

  const walkingDistances = [
    { place: t.beach, time: t.min3 },
    { place: t.restaurants, time: t.min5 },
    { place: t.supermarket, time: t.min7 },
    { place: t.marina, time: t.min15 }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-2xl text-cyan-600 font-semibold mb-6">
            {t.subtitle}
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Location Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="mb-3 p-3 bg-white rounded-full shadow-md">
                  <Icon className="w-6 h-6 text-cyan-600" />
                </div>
                <p className="text-sm text-gray-700 font-medium">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Map and Walking Distances */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://www.beachfrontvibe.com/wp-content/uploads/2025/08/Maps.webp"
              alt="Location map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div>
            <div className="flex items-center mb-6">
              <Navigation className="w-8 h-8 text-cyan-600 mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">
                {t.walkingTitle}
              </h3>
            </div>
            <div className="space-y-4">
              {walkingDistances.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <span className="text-gray-700 font-medium">
                    {item.place}
                  </span>
                  <span className="text-cyan-600 font-bold text-lg">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
