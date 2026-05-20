import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const LEVEL_COLORS = [
  "from-rose-50 to-orange-50 border-rose-100",
  "from-sky-50 to-blue-50 border-sky-100",
  "from-emerald-50 to-green-50 border-emerald-100",
  "from-violet-50 to-purple-50 border-violet-100"
];
const ICON_COLORS = [
  "bg-rose-100 text-rose-600",
  "bg-sky-100 text-sky-600",
  "bg-emerald-100 text-emerald-600",
  "bg-violet-100 text-violet-600"
];

const AcademicsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const items = t("academics.items", lang);

  return (
    <section id="academics" data-testid="academics-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("academics.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("academics.heading", lang)} <span className="text-royal-900">{t("academics.headingHighlight", lang)}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{t("academics.subtitle", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              data-testid={`academic-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl p-6 border bg-gradient-to-br ${LEVEL_COLORS[i]} hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${ICON_COLORS[i]}`}>
                  <BookOpen size={18} />
                </div>
                <span className="text-xs font-bold text-gray-400 bg-white/80 px-3 py-1 rounded-full">{item.age[lang]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.level[lang]}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.overview[lang]}</p>
              <div className="space-y-2 mb-5">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("academics.focusAreas", lang)}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.focus[lang]}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("academics.activities", lang)}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.activities[lang]}</p>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-bold text-royal-900 group-hover:gap-3 transition-all duration-300">
                {t("academics.learnMore", lang)} <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;
