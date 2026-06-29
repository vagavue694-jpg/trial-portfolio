import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-stone-900 text-white text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-stone-500/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight"
        >
          Ready to scale your business without the burnout?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-stone-300 mb-10 max-w-2xl mx-auto"
        >
          Stop drowning in administrative tasks, lead generation, and social media management. Let's partner up to win back your time and accelerate your growth.
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.2 }}
        >
          <a
            href="https://calendly.com/catherine-cabangunayva/client-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-semibold text-stone-900 bg-white rounded-full hover:bg-stone-200 transition-all hover:pr-6 hover:pl-10"
          >
            Claim Your Free Discovery Call <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
