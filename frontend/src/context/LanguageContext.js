import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem("gv_lang") || "en";
  });

  useEffect(() => {
    localStorage.setItem("gv_lang", lang);
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "kn" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
