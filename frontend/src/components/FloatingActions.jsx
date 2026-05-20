import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { SCHOOL_INFO } from "@/constants";

const FloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          href={`tel:${SCHOOL_INFO.phone1}`}
          data-testid="floating-call"
          className="fixed bottom-6 right-5 z-40 w-14 h-14 bg-royal-900 rounded-full shadow-lg hover:shadow-xl hover:bg-royal-950 transition-all duration-300 flex items-center justify-center"
        >
          <Phone size={22} className="text-white" />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingActions;
