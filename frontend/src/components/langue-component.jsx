import React from "react";
import { useLanguage } from "../containers/languageContext";

function LangueComponent() {
  const { selectedLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };

  return (
    <div>
      <label htmlFor="languageSelect">Langue :</label>
      <select
        id="languageSelect"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="fr">Français</option>
        <option value="en">Anglais</option>
      </select>
    </div>
  );
}

export default LangueComponent;
