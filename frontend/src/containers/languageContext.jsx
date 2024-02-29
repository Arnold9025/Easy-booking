import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("fr"); // La langue par défaut

  // Fonction pour changer la langue
  const changeLanguage = (newLanguage) => {
    setSelectedLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ selectedLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

//un hook personnalisé pour accéder au contexte de la langue
export const useLanguage = () => {
  return useContext(LanguageContext);
};
