import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useLanguage();

  const galleryImages = [
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/4lq29sa7_WhatsApp%20Image%202026-05-04%20at%2017.54.44.jpeg',
      title: language === 'en' ? 'Villa Exterior - Street View' : 'Exterior de la Villa - Vista desde la Calle',
      category: 'exterior'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/uk1ghx3o_WhatsApp%20Image%202026-05-04%20at%2017.54.29.jpeg',
      title: language === 'en' ? 'Villa Side View' : 'Vista Lateral de la Villa',
      category: 'exterior'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/a1h0vhvx_WhatsApp%20Image%202026-05-04%20at%2017.54.43.jpeg',
      title: language === 'en' ? 'Aerial Garden View' : 'Vista Aérea del Jardín',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/nwam3qrk_WhatsApp%20Image%202026-05-04%20at%2017.54.26.jpeg',
      title: language === 'en' ? 'Outdoor Dining Area with BBQ' : 'Zona de Comedor Exterior con Barbacoa',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/3euyvchb_WhatsApp%20Image%202026-05-04%20at%2017.54.28.jpeg',
      title: language === 'en' ? 'Garden Terrace View' : 'Vista de la Terraza del Jardín',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/zpczayc2_WhatsApp%20Image%202026-05-04%20at%2017.54.39.jpeg',
      title: language === 'en' ? 'Terrace with Loungers' : 'Terraza con Tumbonas',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/zqsenjlv_WhatsApp%20Image%202026-05-04%20at%2017.54.30.jpeg',
      title: language === 'en' ? 'Outdoor Dining Table' : 'Mesa de Comedor Exterior',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/uxk0uoh3_WhatsApp%20Image%202026-05-04%20at%2017.54.31%20%281%29.jpeg',
      title: language === 'en' ? 'Garden Bench with Grape Vines' : 'Banco de Jardín con Vides',
      category: 'garden'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/rvswka9d_WhatsApp%20Image%202026-05-06%20at%2015.23.55%20%281%29.jpeg',
      title: language === 'en' ? 'Upper Floor Terrace with Pergola' : 'Terraza del Piso Superior con Pérgola',
      category: 'outdoor'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/yogk5jn2_WhatsApp%20Image%202026-05-08%20at%2019.11.25%20%281%29.jpeg',
      title: language === 'en' ? 'Utility Patio with Laundry' : 'Patio de Servicio con Lavandería',
      category: 'outdoor'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/9zdctj68_WhatsApp%20Image%202026-05-08%20at%2019.11.25.jpeg',
      title: language === 'en' ? 'Patio Storage Area' : 'Área de Almacenamiento del Patio',
      category: 'outdoor'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/solunymy_WhatsApp%20Image%202026-05-04%20at%2017.54.42.jpeg',
      title: language === 'en' ? 'Balcony View' : 'Vista desde el Balcón',
      category: 'outdoor'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/3j6vo5e4_WhatsApp%20Image%202026-05-04%20at%2017.54.31.jpeg',
      title: language === 'en' ? 'Outdoor Shower' : 'Ducha Exterior',
      category: 'outdoor'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/qoomevct_WhatsApp%20Image%202026-05-04%20at%2017.54.36.jpeg',
      title: language === 'en' ? 'Living Room' : 'Sala de Estar',
      category: 'interior'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/ddj77k9k_WhatsApp%20Image%202026-05-04%20at%2017.54.34.jpeg',
      title: language === 'en' ? 'Dining Area & Kitchen' : 'Comedor y Cocina',
      category: 'interior'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/7eh3auer_WhatsApp%20Image%202026-05-04%20at%2017.54.41.jpeg',
      title: language === 'en' ? 'Master Bedroom' : 'Dormitorio Principal',
      category: 'bedroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/rqvyaxad_WhatsApp%20Image%202026-05-06%20at%2015.23.58.jpeg',
      title: language === 'en' ? 'Bright Bedroom with Garden Views' : 'Dormitorio Luminoso con Vistas al Jardín',
      category: 'bedroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/gdi694d7_WhatsApp%20Image%202026-05-06%20at%2015.23.57%20%281%29.jpeg',
      title: language === 'en' ? 'Bedroom with Staircase Access' : 'Dormitorio con Acceso a Escalera',
      category: 'bedroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/cuc2fsw5_WhatsApp%20Image%202026-05-06%20at%2015.23.55.jpeg',
      title: language === 'en' ? 'Bedroom with Arched French Doors' : 'Dormitorio con Puertas Arqueadas',
      category: 'bedroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/qf5shs5n_WhatsApp%20Image%202026-05-04%20at%2017.54.43%20%281%29.jpeg',
      title: language === 'en' ? 'Spa Bathroom with Jacuzzi' : 'Baño Spa con Jacuzzi',
      category: 'bathroom'
    },
    {
      url: 'https://customer-assets.emergentagent.com/job_mediterranean-escape-2/artifacts/xo1zazbh_WhatsApp%20Image%202026-05-06%20at%2015.23.57.jpeg',
      title: language === 'en' ? 'Bathroom with Bathtub' : 'Baño con Bañera',
      category: 'bathroom'
    }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Photo Gallery' : 'Galería de Fotos'}
          </h2>
          <p className="text-xl text-gray-600">
            {language === 'en' 
              ? 'Explore every corner of your Mediterranean paradise' 
              : 'Explora cada rincón de tu paraíso mediterráneo'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white text-sm font-semibold">{image.title}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <Maximize2 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <div className="max-w-7xl max-h-[90vh] mx-auto px-4">
              <img
                src={galleryImages[currentIndex].url}
                alt={galleryImages[currentIndex].title}
                className="max-w-full max-h-[85vh] object-contain mx-auto"
              />
              <div className="text-center mt-4">
                <p className="text-white text-lg font-semibold">
                  {galleryImages[currentIndex].title}
                </p>
                <p className="text-white/60 text-sm mt-1">
                  {currentIndex + 1} / {galleryImages.length}
                </p>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-4 left-0 right-0 overflow-x-auto">
              <div className="flex space-x-2 px-4 justify-center">
                {galleryImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                      index === currentIndex
                        ? 'ring-4 ring-cyan-500 scale-110'
                        : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.url}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;
