import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import { IMAGES } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const galleryImages = [
  { src: IMAGES.schoolEvent, alt: "School celebration", category: "Events" },
  { src: IMAGES.classroom1, alt: "Students reading", category: "Learning" },
  { src: IMAGES.sports, alt: "Sports activities", category: "Sports" },
  { src: IMAGES.artClass, alt: "Art class outdoors", category: "Creative" },
  { src: IMAGES.playground, alt: "Playground fun", category: "Campus" },
  { src: IMAGES.dance, alt: "Dance performance", category: "Events" },
  { src: IMAGES.campus, alt: "School campus", category: "Campus" },
  { src: IMAGES.artWorkshop, alt: "Art workshop", category: "Creative" },
];

const categoryKeys = ["All", "Learning", "Sports", "Creative", "Campus", "Events"];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState(null);
  const [filter, setFilter] = useState("All");
  const { lang } = useLanguage();

  const filtered = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter);

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("gallery.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("gallery.heading", lang)} <span className="text-royal-900">{t("gallery.headingHighlight", lang)}</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10" data-testid="gallery-filters">
          {categoryKeys.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-testid={`gallery-filter-${cat.toLowerCase()}`}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat ? "bg-royal-900 text-white" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {t(`gallery.categories.${cat}`, lang)}
            </button>
          ))}
        </div>

        <div className="masonry-grid">
          {filtered.map((img, i) => (
            <motion.div
              key={`${img.src}-${filter}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="masonry-item group cursor-pointer"
              onClick={() => setLightbox(img)}
              data-testid={`gallery-image-${i}`}
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ height: i % 3 === 0 ? "320px" : i % 3 === 1 ? "240px" : "280px" }}
                />
                <div className="absolute inset-0 bg-royal-900/0 group-hover:bg-royal-900/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white font-semibold text-sm transition-opacity duration-300">
                    {t(`gallery.categories.${img.category}`, lang)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setLightbox(null)} data-testid="lightbox">
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/80 hover:text-white z-10" data-testid="lightbox-close"><X size={28} /></button>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[85vh] object-contain rounded-xl" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
