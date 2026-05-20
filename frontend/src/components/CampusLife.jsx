import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IMAGES } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const CampusLife = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  const images = [IMAGES.sports, IMAGES.artClass, IMAGES.dance];
  const items = t("campus.items", lang);

  return (
    <section data-testid="campus-life-section" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("campus.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("campus.heading", lang)} <span className="text-royal-900">{t("campus.headingHighlight", lang)}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{t("campus.subtitle", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              data-testid={`campus-card-${i}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <img src={images[i]} alt={item.title[lang]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg">{item.title[lang]}</h3>
                <p className="text-white/70 text-sm mt-1">{item.desc[lang]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusLife;
