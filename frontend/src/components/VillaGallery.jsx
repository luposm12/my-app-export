import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const VillaGallery = () => {
  const { language } = useLanguage();
  const t = translations[language].villa;

  const rooms = [
    {
      title: t.rooms.master.title,
      description: t.rooms.master.description,
      image:
        'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/7eh3auer_WhatsApp%20Image%202026-05-04%20at%2017.54.41.jpeg'
    },
    {
      title: t.rooms.suite2.title,
      description: t.rooms.suite2.description,
      image:
        'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/qoomevct_WhatsApp%20Image%202026-05-04%20at%2017.54.36.jpeg'
    },
    {
      title: t.rooms.suite3.title,
      description: t.rooms.suite3.description,
      image:
        'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/ddj77k9k_WhatsApp%20Image%202026-05-04%20at%2017.54.34.jpeg'
    },
    {
      title: t.rooms.bathroom.title,
      description: t.rooms.bathroom.description,
      image:
        'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/qf5shs5n_WhatsApp%20Image%202026-05-04%20at%2017.54.43%20%281%29.jpeg'
    },
    {
      title: t.rooms.terrace.title,
      description: t.rooms.terrace.description,
      image:
        'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/zpczayc2_WhatsApp%20Image%202026-05-04%20at%2017.54.39.jpeg'
    },
    {
      title: t.rooms.garden.title,
      description: t.rooms.garden.description,
      image: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/uxk0uoh3_WhatsApp%20Image%202026-05-04%20at%2017.54.31%20%281%29.jpeg'
    }
  ];

  return (
    <section id="villa" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {room.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {room.description}
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillaGallery;
