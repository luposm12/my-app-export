import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);
  const { language, changeLanguage, currency, changeCurrency } = useLanguage();
  const t = translations[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const currencies = [
    { code: 'EUR', symbol: '€', rate: 1 },
    { code: 'USD', symbol: '$', rate: 1.09 },
    { code: 'GBP', symbol: '£', rate: 0.86 }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div
              className="cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
                The Shoreline Suite
              </h1>
              <p className="text-xs text-gray-600 tracking-wider">
                PILAR DE LA HORADADA
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('villa')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {t.villa}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {t.location}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {t.gallery}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                {t.contact}
              </button>

              {/* Language & Currency Selector */}
              <div className="flex items-center space-x-3 ml-4 border-l pl-4">
                <div className="relative">
                  <button
                    onClick={() => setShowLangMenu(!showLangMenu)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase">
                      {language}
                    </span>
                  </button>
                  {showLangMenu && (
                    <div className="absolute top-full mt-2 right-0 bg-white shadow-xl rounded-lg py-2 w-32 border">
                      <button
                        onClick={() => {
                          changeLanguage('en');
                          setShowLangMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-cyan-50 transition-colors"
                      >
                        English
                      </button>
                      <button
                        onClick={() => {
                          changeLanguage('es');
                          setShowLangMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-cyan-50 transition-colors"
                      >
                        Español
                      </button>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setShowCurrencyMenu(!showCurrencyMenu)}
                    className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 transition-colors"
                  >
                    <span className="text-sm font-medium">{currency}</span>
                  </button>
                  {showCurrencyMenu && (
                    <div className="absolute top-full mt-2 right-0 bg-white shadow-xl rounded-lg py-2 w-28 border">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => {
                            changeCurrency(curr.code);
                            setShowCurrencyMenu(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm hover:bg-cyan-50 transition-colors"
                        >
                          {curr.code} ({curr.symbol})
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {t.bookNow}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-cyan-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-0 bottom-0 w-64 bg-white shadow-2xl overflow-y-auto">
            <nav className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection('villa')}
                className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                {t.villa}
              </button>
              <button
                onClick={() => scrollToSection('location')}
                className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                {t.location}
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                {t.gallery}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-700 hover:text-cyan-600 transition-colors font-medium py-2"
              >
                {t.contact}
              </button>

              <div className="border-t pt-4 mt-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Language
                </p>
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-sm hover:text-cyan-600"
                >
                  English
                </button>
                <button
                  onClick={() => {
                    changeLanguage('es');
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-sm hover:text-cyan-600"
                >
                  Español
                </button>
              </div>

              <div className="border-t pt-4 mt-4">
                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Currency
                </p>
                {currencies.map((curr) => (
                  <button
                    key={curr.code}
                    onClick={() => {
                      changeCurrency(curr.code);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-sm hover:text-cyan-600"
                  >
                    {curr.code} ({curr.symbol})
                  </button>
                ))}
              </div>

              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white w-full py-3 rounded-full shadow-lg mt-4"
              >
                {t.bookNow}
              </Button>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
