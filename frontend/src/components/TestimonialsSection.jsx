import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/constants";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section data-testid="testimonials-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            What Parents <span className="text-royal-900">Say</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-gray-50 rounded-3xl p-8 sm:p-12" data-testid="testimonial-carousel">
            <Quote size={40} className="text-royal-100 absolute top-6 left-6" />

            <div className="relative z-10 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(TESTIMONIALS[current].rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium italic" data-testid="testimonial-text">
                "{TESTIMONIALS[current].text}"
              </p>

              {/* Author */}
              <div className="mt-8">
                <div className="w-14 h-14 bg-royal-900 rounded-full mx-auto flex items-center justify-center mb-3">
                  <span className="text-white text-xl font-bold">{TESTIMONIALS[current].name[0]}</span>
                </div>
                <p className="font-bold text-gray-900" data-testid="testimonial-name">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-gray-500">{TESTIMONIALS[current].role}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prev}
                data-testid="testimonial-prev"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-royal-900 hover:text-white hover:border-royal-900 transition-all duration-300 text-gray-500"
              >
                <ChevronLeft size={18} />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    data-testid={`testimonial-dot-${i}`}
                    className={`rounded-full transition-all duration-300 ${
                      i === current ? "w-8 h-2 bg-royal-900" : "w-2 h-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                data-testid="testimonial-next"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-royal-900 hover:text-white hover:border-royal-900 transition-all duration-300 text-gray-500"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
