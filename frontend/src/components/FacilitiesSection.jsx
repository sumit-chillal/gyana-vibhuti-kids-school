import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Video, TreePine, Shell, Film, BookOpen, Stethoscope, Building2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const FACILITY_ICONS = [Activity, Video, TreePine, Shell, Film, BookOpen, Stethoscope, Building2, ShieldCheck];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();
  const items = t("facilities.items", lang);

  return (
    <section data-testid="facilities-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("facilities.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("facilities.heading", lang)} <span className="text-royal-900">{t("facilities.headingHighlight", lang)}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{t("facilities.subtitle", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = FACILITY_ICONS[i] || Activity;
            return (
              <motion.div
                key={i}
                data-testid={`facility-card-${i}`}
                initial={{ opacity: 0, y: 25 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-royal-900 transition-all duration-300 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-100 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors">
                  <Icon size={22} className="text-royal-900 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-white transition-colors">{item.title[lang]}</h3>
                  <p className="text-sm text-gray-500 mt-1 group-hover:text-white/70 transition-colors">{item.description[lang]}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
