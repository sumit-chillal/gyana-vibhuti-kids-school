import { Phone, Mail, Instagram, ArrowUp, Navigation, Download } from "lucide-react";
import { SCHOOL_INFO } from "@/constants";
import { downloadBrochureAsPdf } from "@/utils/downloadBrochure";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const { lang } = useLanguage();

  const navKeys = ["home", "about", "academics", "gallery", "contact"];
  const navHrefs = ["#home", "#about", "#academics", "#gallery", "#contact"];

  return (
    <footer data-testid="footer" className="bg-royal-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={SCHOOL_INFO.logo} alt={SCHOOL_INFO.name} className="h-14 w-auto rounded" />
              <div>
                <p className="font-bold text-base text-white">GYANA VIBHUTI</p>
                <p className="text-xs text-white/50">Kids School, Kalaburagi</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{t("footer.tagline", lang)}</p>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white/90 uppercase tracking-wider mb-5">{t("footer.quickLinks", lang)}</h4>
            <ul className="space-y-3">
              {navKeys.map((key, i) => (
                <li key={key}>
                  <a href={navHrefs[i]} className="text-sm text-white/50 hover:text-gold-400 transition-colors duration-300">{t(`nav.${key}`, lang)}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white/90 uppercase tracking-wider mb-5">{t("footer.visitUs", lang)}</h4>
            <p className="text-sm text-white/50 leading-relaxed mb-4">{SCHOOL_INFO.address}</p>
            <a href={SCHOOL_INFO.directionsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400 text-royal-900 font-bold text-sm rounded-full hover:bg-gold-500 transition-all">
              <Navigation size={14} /> {t("footer.getDirections", lang)}
            </a>
            <button onClick={downloadBrochureAsPdf} data-testid="footer-download-brochure" className="mt-3 inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white/70 font-semibold text-sm rounded-full hover:bg-white/10 transition-all">
              <Download size={14} /> {t("footer.downloadBrochure", lang)}
            </button>
          </div>

          <div>
            <h4 className="font-bold text-sm text-white/90 uppercase tracking-wider mb-5">{t("footer.contactLabel", lang)}</h4>
            <div className="space-y-4">
              <a href={`tel:${SCHOOL_INFO.phone1}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors"><Phone size={14} className="shrink-0" /> {SCHOOL_INFO.phone1}</a>
              <a href={`tel:${SCHOOL_INFO.phone2}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors"><Phone size={14} className="shrink-0" /> {SCHOOL_INFO.phone2}</a>
              <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors"><Mail size={14} className="shrink-0" /> {SCHOOL_INFO.email}</a>
              <a href={SCHOOL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/50 hover:text-gold-400 transition-colors"><Instagram size={14} className="shrink-0" /> {SCHOOL_INFO.instagram}</a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} {t("footer.copyright", lang)}</p>
          <button onClick={scrollToTop} data-testid="scroll-to-top" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all">
            <ArrowUp size={16} className="text-white/60" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
