import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Instagram, Navigation } from "lucide-react";
import { SCHOOL_INFO } from "@/constants";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/translations";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  return (
    <section id="contact" data-testid="contact-section" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">{t("contact.label", lang)}</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            {t("contact.heading", lang)} <span className="text-royal-900">{t("contact.headingHighlight", lang)}</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">{t("contact.subtitle", lang)}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-5">{t("contact.contactInfo", lang)}</h3>
              <div className="space-y-5">
                <a href={`tel:${SCHOOL_INFO.phone1}`} className="flex items-start gap-4 group" data-testid="contact-phone1">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center shrink-0 group-hover:bg-royal-900 transition-colors">
                    <Phone size={16} className="text-royal-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.phone", lang)}</p>
                    <p className="text-sm font-semibold text-royal-900 mt-0.5">{SCHOOL_INFO.phone1}</p>
                  </div>
                </a>
                <a href={`tel:${SCHOOL_INFO.phone2}`} className="flex items-start gap-4 group" data-testid="contact-phone2">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center shrink-0 group-hover:bg-royal-900 transition-colors">
                    <Phone size={16} className="text-royal-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.phone", lang)}</p>
                    <p className="text-sm font-semibold text-royal-900 mt-0.5">{SCHOOL_INFO.phone2}</p>
                  </div>
                </a>
                <a href={`mailto:${SCHOOL_INFO.email}`} className="flex items-start gap-4 group" data-testid="contact-email">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center shrink-0 group-hover:bg-royal-900 transition-colors">
                    <Mail size={16} className="text-royal-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.email", lang)}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{SCHOOL_INFO.email}</p>
                  </div>
                </a>
                <a href={SCHOOL_INFO.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group" data-testid="contact-instagram">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center shrink-0 group-hover:bg-royal-900 transition-colors">
                    <Instagram size={16} className="text-royal-900 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.instagramLabel", lang)}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5">{SCHOOL_INFO.instagram}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-10 h-10 rounded-xl bg-royal-50 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-royal-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.address", lang)}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-0.5 leading-relaxed">{SCHOOL_INFO.address}</p>
                  </div>
                </div>
              </div>
              <a href={SCHOOL_INFO.directionsUrl} target="_blank" rel="noopener noreferrer" data-testid="directions-button" className="mt-6 w-full py-3.5 bg-royal-900 text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-royal-950 transition-all duration-300">
                <Navigation size={16} /> {t("contact.getDirections", lang)}
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <div className="rounded-2xl overflow-hidden border border-gray-100 h-full min-h-[400px]" data-testid="google-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30514.37!2d76.82!3d17.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8c7c5e9c5c5c5%3A0x5c5c5c5c5c5c5c5c!2sKalaburagi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1"
                width="100%" height="100%" style={{ border: 0, minHeight: "400px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="School Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
