import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <motion.div 
        className="absolute inset-x-0 -top-[20%] w-full h-[140%] z-0 bg-cover bg-center md:bg-right"
        style={{ 
          backgroundImage: `url('${import.meta.env.BASE_URL}asset/hero%20photo.jpeg')`,
          y
        }}
      ></motion.div>
      {/* Light overlay for text legibility, fading out to the right */}
      <div className="absolute inset-0 z-0 bg-stone-50/90 md:bg-gradient-to-r md:from-stone-50 md:via-stone-50/90 md:to-[rgba(250,250,249,0.3)] backdrop-blur-[2px] md:backdrop-blur-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-200/50 border border-stone-200 text-sm font-medium text-stone-600 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            AVAILABLE FOR CLIENTS - Philippine Based-VA
          </div>
          <h1 className="text-5xl md:text-6xl/tight lg:text-7xl/tight font-serif text-stone-900 mb-6">
            Your Business. <br className="hidden md:block" />
            <span className="text-stone-400 italic">Streamlined.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-lg leading-relaxed">
            Streamlining operations for Small Businesses with Social Media and Admin support. I help you convert cold leads into closed deals.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-all hover:gap-3"
            >
              Explore Services <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-stone-900 bg-transparent rounded-full hover:bg-stone-200/50 transition-colors"
            >
              Let's talk
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:ml-auto"
        >
          {/* Hero image spotlight */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] object-cover w-full max-w-md mx-auto shadow-2xl shadow-stone-200/50">
            <img
              src={`${import.meta.env.BASE_URL}asset/hero%20photo.jpeg`}
              alt="Professional workspace"
              className="object-cover w-full h-full"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
