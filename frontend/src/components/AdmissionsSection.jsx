import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Download, ArrowRight, CheckCircle2 } from "lucide-react";
import { ADMISSION_STEPS, FAQS, SCHOOL_INFO } from "@/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const AdmissionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({ parentName: "", childName: "", phone: "", email: "", program: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ parentName: "", childName: "", phone: "", email: "", program: "", message: "" });
  };

  return (
    <section id="admissions" data-testid="admissions-section" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-gold-600 mb-3 block">
            Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
            Begin Your Child's <span className="text-royal-900">Journey</span>
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed">
            A simple, stress-free admission process designed with parents in mind.
          </p>
        </motion.div>

        {/* Admission Steps Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            {ADMISSION_STEPS.map((item, i) => (
              <div key={item.step} className="relative text-center" data-testid={`admission-step-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-royal-900 text-white flex items-center justify-center font-bold text-lg mb-3 relative z-10">
                    {item.step}
                  </div>
                  {i < ADMISSION_STEPS.length - 1 && (
                    <div className="hidden sm:block absolute top-6 left-[calc(50%+24px)] right-[calc(-50%+24px)] h-0.5 bg-gray-200 z-0" />
                  )}
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6" data-testid="inquiry-form-heading">Admission Inquiry</h3>

              {submitted ? (
                <div className="text-center py-12" data-testid="form-success">
                  <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                  <p className="text-lg font-bold text-gray-900">Thank you!</p>
                  <p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" data-testid="admission-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Parent's Name"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      data-testid="input-parent-name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Child's Name"
                      required
                      value={formData.childName}
                      onChange={(e) => setFormData({ ...formData, childName: e.target.value })}
                      data-testid="input-child-name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-testid="input-phone"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      data-testid="input-email"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all"
                    />
                  </div>
                  <select
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    data-testid="select-program"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all text-gray-500"
                  >
                    <option value="">Select Program</option>
                    <option value="pre-nursery">Pre Nursery</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="primary">Primary</option>
                  </select>
                  <textarea
                    placeholder="Any questions or special requirements?"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    data-testid="input-message"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-royal-300 focus:ring-2 focus:ring-royal-100 transition-all resize-none"
                  />
                  <button
                    type="submit"
                    data-testid="submit-inquiry"
                    className="w-full py-3.5 bg-royal-900 text-white font-bold rounded-full hover:bg-royal-950 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </form>
              )}

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="whatsapp-inquiry"
                  className="flex-1 py-3 border border-green-200 text-green-700 font-semibold rounded-full text-center text-sm hover:bg-green-50 transition-all"
                >
                  WhatsApp Inquiry
                </a>
                <button
                  data-testid="download-brochure"
                  className="flex-1 py-3 border border-gray-200 text-gray-700 font-semibold rounded-full text-center text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2"
                >
                  <Download size={14} /> Download Brochure
                </button>
              </div>
            </div>
          </motion.div>

          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6" data-testid="faq-heading">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="space-y-3">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="bg-white rounded-2xl border border-gray-100 px-6 overflow-hidden" data-testid={`faq-item-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-gray-800 hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-500 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Fee Overview */}
            <div className="mt-8 bg-royal-900 rounded-2xl p-6 text-white" data-testid="fee-overview">
              <h4 className="font-bold text-lg mb-3">Fee Overview</h4>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                We offer competitive and transparent fee structures. Contact us for detailed fee information for each program.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-white/60 text-xs">Registration Fee</p>
                  <p className="font-bold mt-1">Contact Us</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-white/60 text-xs">Annual Fee</p>
                  <p className="font-bold mt-1">Contact Us</p>
                </div>
              </div>
              <a
                href={`tel:${SCHOOL_INFO.phone1}`}
                className="mt-4 block w-full py-3 bg-gold-400 text-royal-900 font-bold rounded-full text-center text-sm hover:bg-gold-500 transition-all"
              >
                Call for Fee Details
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;
