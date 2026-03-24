import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [currency, setCurrency] = useState('EUR');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_language') || 'en';
    const savedCurrency = localStorage.getItem('preferred_currency') || 'EUR';
    setLanguage(savedLang);
    setCurrency(savedCurrency);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('preferred_language', lang);
  };

  const changeCurrency = (curr) => {
    setCurrency(curr);
    localStorage.setItem('preferred_currency', curr);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, currency, changeCurrency }}>
      {children}
    </LanguageContext.Provider>
  );
};
