import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, GraduationCap, Lightbulb, Puzzle, Heart, MessageCircle, Palette } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const ICON_MAP = [Shield, GraduationCap, Lightbulb, Puzzle, Heart, MessageCircle, Palette];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  return (
    <section data-testid="why-choose-section" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("whyChoose.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("whyChoose.heading", lang)} <span className="text-royal-900">{t("whyChoose.headingHighlight", lang)}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{t("whyChoose.subtitle", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t("whyChoose.items", lang).map((item, i) => {
            const IconComponent = ICON_MAP[i];
            return (
              <motion.div
                key={i}
                data-testid={`feature-card-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center mb-4 group-hover:bg-royal-900 transition-colors duration-300">
                  <IconComponent size={22} className="text-royal-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{item.title[lang]}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description[lang]}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
