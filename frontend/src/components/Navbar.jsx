import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Globe } from "lucide-react";
import { SCHOOL_INFO } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const navKeys = ["home", "about", "academics", "gallery", "contact"];
  const navHrefs = ["#home", "#about", "#academics", "#gallery", "#contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        data-testid="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button onClick={() => scrollTo("#home")} className="flex items-center gap-3 shrink-0" data-testid="navbar-logo">
              <img src={SCHOOL_INFO.logo} alt={SCHOOL_INFO.name} className="h-10 sm:h-14 w-auto rounded" />
              <div className="hidden sm:block">
                <p className={`font-bold text-sm leading-tight tracking-wide ${scrolled ? "text-royal-900" : "text-white"}`}>
                  GYANA VIBHUTI
                </p>
                <p className={`text-xs ${scrolled ? "text-gray-500" : "text-white/80"}`}>
                  Kids School
                </p>
              </div>
            </button>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navKeys.map((key, i) => (
                <button
                  key={key}
                  onClick={() => scrollTo(navHrefs[i])}
                  data-testid={`nav-${key}`}
                  className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${
                    scrolled
                      ? "text-gray-700 hover:text-royal-900 hover:bg-royal-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {t(`nav.${key}`, lang)}
                </button>
              ))}
            </div>

            {/* CTA + Language Toggle */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLang}
                data-testid="lang-toggle"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                  scrolled
                    ? "border-gray-200 text-gray-600 hover:bg-gray-50"
                    : "border-white/30 text-white/80 hover:bg-white/10"
                }`}
              >
                <Globe size={14} />
                {lang === "en" ? "ಕನ್ನಡ" : "English"}
              </button>
              <a
                href={`tel:${SCHOOL_INFO.phone1}`}
                data-testid="nav-call"
                className="px-5 py-2.5 bg-gold-400 text-royal-900 font-bold text-sm rounded-full hover:bg-gold-500 transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
              >
                <Phone size={14} /> {t("nav.callUs", lang)}
              </a>
            </div>

            {/* Mobile: Language + Menu Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={toggleLang}
                data-testid="mobile-lang-toggle"
                className={`flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-bold border ${
                  scrolled
                    ? "border-gray-200 text-gray-600"
                    : "border-white/30 text-white/80"
                }`}
              >
                <Globe size={12} />
                {lang === "en" ? "ಕ" : "EN"}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                data-testid="mobile-menu-toggle"
                className={`p-2 rounded-lg ${scrolled ? "text-royal-900" : "text-white"}`}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-20"
          >
            <div className="flex flex-col px-6 py-8 gap-2">
              {navKeys.map((key, i) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(navHrefs[i])}
                  className="text-left text-lg font-semibold text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {t(`nav.${key}`, lang)}
                </motion.button>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={`tel:${SCHOOL_INFO.phone1}`}
                  className="w-full py-3 bg-gold-400 text-royal-900 font-bold rounded-full text-center flex items-center justify-center gap-2"
                >
                  <Phone size={16} /> {t("nav.callUs", lang)}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
