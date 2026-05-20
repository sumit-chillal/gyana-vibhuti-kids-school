import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download } from "lucide-react";
import { IMAGES } from "@/constants";
import { downloadBrochureAsPdf } from "@/utils/downloadBrochure";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { lang } = useLanguage();

  return (
    <section id="about" data-testid="about-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }} className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              <img src={IMAGES.classroom2} alt="Students reading in library" className="w-full h-[480px] object-cover" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2 }}>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
              {t("about.label", lang)}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight" data-testid="about-heading">
              {t("about.headingPart1", lang)}{" "}
              <span className="text-royal-900">{t("about.headingHighlight", lang)}</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-base">{t("about.para1", lang)}</p>
            <p className="mt-4 text-gray-600 leading-relaxed text-base">{t("about.para2", lang)}</p>
            <button
              onClick={downloadBrochureAsPdf}
              data-testid="download-brochure"
              className="mt-8 px-6 py-3 bg-royal-900 text-white font-bold text-sm rounded-full hover:bg-royal-950 transition-all duration-300 flex items-center gap-2 w-fit"
            >
              <Download size={16} /> {t("about.downloadBrochure", lang)}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
