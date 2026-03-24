import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const reviews = [
    {
      text: t.review1.text,
      author: t.review1.author,
      location: t.review1.location,
      rating: t.review1.rating,
      score: 9.5
    },
    {
      text: t.review2.text,
      author: t.review2.author,
      location: t.review2.location,
      rating: t.review2.rating,
      score: 9.8
    },
    {
      text: t.review3.text,
      author: t.review3.author,
      location: t.review3.location,
      rating: t.review3.rating,
      score: 9.6
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-slate-50 to-cyan-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-cyan-600" />
              </div>

              {/* Rating Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="bg-cyan-600 text-white px-3 py-1 rounded-lg font-bold text-lg">
                    {review.score}
                  </div>
                  <span className="text-cyan-600 font-semibold">
                    {review.rating}
                  </span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-bold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-50 to-blue-50 px-8 py-4 rounded-full shadow-md">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-6 h-6 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <div className="border-l border-gray-300 pl-3">
              <p className="text-2xl font-bold text-gray-900">9.6</p>
              <p className="text-sm text-gray-600">Guest Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
