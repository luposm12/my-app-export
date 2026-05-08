import React from 'react';
import { Bed, Waves, Home, Trees, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const StatsBar = () => {
  const { language } = useLanguage();
  const t = translations[language].stats;

  const stats = [
    { icon: Bed, value: '5', label: t.bedrooms },
    { icon: Waves, value: '200m', label: t.beach },
    { icon: Home, value: '130m²', label: t.interior },
    { icon: Trees, value: '✓', label: t.garden },
    { icon: Car, value: '2', label: t.parking }
  ];

  return (
    <div className="bg-gradient-to-r from-slate-50 to-cyan-50 border-y border-cyan-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="mb-3 p-4 bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
