import { motion } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const HERO_BG = "https://customer-assets.emergentagent.com/job_premium-kids-school/artifacts/8e5cpuwa_WhatsApp%20Image%202026-05-20%20at%2014.37.29.jpeg";

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="home" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_BG} alt="Gyana Vibhuti Kids School celebration" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-royal-950/80 via-royal-900/60 to-royal-900/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-gold-400/20 border border-gold-400/30 text-gold-300 text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              {t("hero.tagline", lang)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            data-testid="hero-headline"
          >
            {t("hero.headlinePart1", lang)}{" "}
            <span className="text-gold-400">{t("hero.headlineHighlight", lang)}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl"
            data-testid="hero-subheadline"
          >
            {t("hero.subheadline", lang)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={`tel:${SCHOOL_INFO.phone1}`}
              data-testid="hero-call-cta"
              className="group px-8 py-4 bg-gold-400 text-royal-900 font-bold text-base rounded-full hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} /> {t("hero.callCta", lang)}: {SCHOOL_INFO.phone1}
            </a>
            <a
              href={SCHOOL_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-directions-cta"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-base rounded-full border-2 border-white/30 hover:bg-white/20 transition-all duration-300 text-center"
            >
              {t("hero.directionsCta", lang)}
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/50 text-xs tracking-widest uppercase">{t("hero.scroll", lang)}</span>
        <ChevronDown size={20} className="text-white/50 animate-scroll-indicator" />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 bg-gold-400 z-10 overflow-hidden" data-testid="announcement-strip">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-12 text-sm font-semibold text-royal-900">
              {t("hero.marquee", lang)} {SCHOOL_INFO.phone1} {t("hero.marqueeSuffix", lang)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
