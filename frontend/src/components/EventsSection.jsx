import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Calendar, ArrowRight, Bell } from "lucide-react";
import { EVENTS } from "@/constants";

const CATEGORY_COLORS = {
  Celebration: "bg-rose-50 text-rose-600 border-rose-100",
  Activity: "bg-emerald-50 text-emerald-600 border-emerald-100",
  Academic: "bg-sky-50 text-sky-600 border-sky-100",
};

const EventsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section id="events" data-testid="events-section" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Events & News
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Stay <span className="text-royal-900">Updated</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            Discover upcoming events, celebrations, and the latest from our school community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {EVENTS.map((event, i) => (
            <motion.div
              key={event.title}
              data-testid={`event-card-${i}`}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${CATEGORY_COLORS[event.category]}`}>
                {event.category}
              </span>
              <h3 className="mt-4 font-bold text-gray-900 text-base leading-snug">{event.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{event.description}</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={13} />
                {event.date}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-royal-900 rounded-3xl p-8 sm:p-12 text-center"
          data-testid="newsletter-section"
        >
          <Bell size={32} className="text-gold-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-2">Stay in the Loop</h3>
          <p className="text-white/60 text-sm mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for school updates, event announcements, and parenting tips.
          </p>
          {subscribed ? (
            <p className="text-gold-400 font-semibold" data-testid="newsletter-success">Thank you for subscribing!</p>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" data-testid="newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="newsletter-email"
                className="flex-1 px-5 py-3 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gold-400"
              />
              <button
                type="submit"
                data-testid="newsletter-submit"
                className="px-6 py-3 bg-gold-400 text-royal-900 font-bold text-sm rounded-full hover:bg-gold-500 transition-all flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
