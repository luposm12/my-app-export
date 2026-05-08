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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

const LocationSection = () => {
  const { language } = useLanguage();
  const t = translations[language].location;

  const highlights = [
    { 
      icon: MapPin, 
      label: t.blueFlag,
      info: language === 'en' 
        ? 'Pristine beaches with excellent water quality, safety, and environmental standards'
        : 'Playas vírgenes con excelente calidad del agua, seguridad y estándares ambientales',
      link: 'https://www.blueflag.global/'
    },
    { 
      icon: Sun, 
      label: t.climate,
      info: language === 'en'
        ? '300+ days of sunshine per year, average 18°C, perfect year-round destination'
        : 'Más de 300 días de sol al año, promedio 18°C, destino perfecto todo el año',
      link: null
    },
    { 
      icon: Trees, 
      label: t.reserves,
      info: language === 'en'
        ? 'Protected natural areas with unique flora and fauna, hiking trails, and scenic views'
        : 'Áreas naturales protegidas con flora y fauna única, senderos y vistas panorámicas',
      link: null
    },
    { 
      icon: Trophy, 
      label: t.golf,
      info: language === 'en'
        ? 'World-class golf courses: Villamartin Golf and Las Colinas Golf within 20 minutes'
        : 'Campos de golf de clase mundial: Villamartin Golf y Las Colinas Golf a 20 minutos',
      links: [
        { name: 'Villamartin Golf', url: 'https://www.lafincaresort.com/en/golf/villamartin-golf' },
        { name: 'Las Colinas Golf', url: 'https://lascolinasgolf.com/' }
      ]
    },
    { 
      icon: Building, 
      label: t.infrastructure,
      info: language === 'en'
        ? 'Modern amenities: supermarkets, pharmacies, medical centers, restaurants, and shops nearby'
        : 'Servicios modernos: supermercados, farmacias, centros médicos, restaurantes y tiendas cerca',
      link: null,
      hasImage: true
    },
    { 
      icon: Plane, 
      label: t.airports,
      info: language === 'en'
        ? 'Alicante Airport: 45 min | Murcia Airport: 35 min | Direct flights from major European cities'
        : 'Aeropuerto Alicante: 45 min | Aeropuerto Murcia: 35 min | Vuelos directos desde principales ciudades europeas',
      link: null
    }
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
        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const hasLink = item.link || item.links;
              
              return (
                <Tooltip key={index} delayDuration={200}>
                  <TooltipTrigger asChild>
                    {hasLink ? (
                      item.links ? (
                        <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                          <div className="mb-3 p-3 bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
                            <Icon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <p className="text-sm text-gray-700 font-medium">
                            {item.label}
                          </p>
                        </div>
                      ) : (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                        >
                          <div className="mb-3 p-3 bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
                            <Icon className="w-6 h-6 text-cyan-600" />
                          </div>
                          <p className="text-sm text-gray-700 font-medium">
                            {item.label}
                          </p>
                        </a>
                      )
                    ) : (
                      <div className="flex flex-col items-center text-center p-4 bg-gradient-to-b from-cyan-50 to-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                        <div className="mb-3 p-3 bg-white rounded-full shadow-md group-hover:shadow-xl transition-all duration-300">
                          <Icon className="w-6 h-6 text-cyan-600" />
                        </div>
                        <p className="text-sm text-gray-700 font-medium">
                          {item.label}
                        </p>
                      </div>
                    )}
                  </TooltipTrigger>
                  <TooltipContent 
                    side="bottom" 
                    className="max-w-xs bg-slate-900 text-white p-4 rounded-lg shadow-2xl"
                  >
                    <p className="text-sm leading-relaxed mb-2">{item.info}</p>
                    {item.hasImage && (
                      <img 
                        src="https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/PLACEHOLDER_IMAGE.jpeg"
                        alt="Infrastructure"
                        className="w-full h-32 object-cover rounded-md mt-2"
                      />
                    )}
                    {item.links && (
                      <div className="flex flex-col gap-2 mt-3">
                        {item.links.map((link, idx) => (
                          <a
                            key={idx}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-cyan-400 hover:text-cyan-300 underline"
                          >
                            {link.name} →
                          </a>
                        ))}
                      </div>
                    )}
                    {item.link && (
                      <p className="text-xs text-cyan-400 mt-2">
                        {language === 'en' ? 'Click to learn more →' : 'Clic para saber más →'}
                      </p>
                    )}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </TooltipProvider>

        {/* Map and Walking Distances */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/3euyvchb_WhatsApp%20Image%202026-05-04%20at%2017.54.28.jpeg"
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
