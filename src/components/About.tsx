import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden text-stone-100 group">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={`${import.meta.env.BASE_URL}fallback-image.jpg`}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-1000 ease-out group-hover:scale-105"
      >
        {/* Make sure to upload your video as "background-video.mp4" into the "public" folder */}
        <source src={`${import.meta.env.BASE_URL}background-video.mp4`} type="video/mp4" />
        <img 
          src={`${import.meta.env.BASE_URL}fallback-image.jpg`} 
          alt="About section background fallback" 
          className="w-full h-full object-cover"
        />
      </video>
      <div className="absolute inset-0 bg-stone-950/85 z-0"></div> {/* Dark Overlay */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative background for the image */}
            <div className="absolute -inset-4 bg-stone-800 rounded-[2.5rem] -z-10 transform -rotate-3"></div>
            <div className="aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-stone-900 border border-stone-800">
              <img 
                src={`${import.meta.env.BASE_URL}asset/about%20photo.jpeg`} 
                alt="Catherine - Virtual Assistant" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:pl-10 mt-10 md:mt-0"
          >
            <span className="text-stone-400 font-semibold tracking-widest text-sm uppercase block mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Hi, I'm Catherine.
            </h2>
            <div className="space-y-6 text-lg text-stone-300 leading-relaxed mb-10">
              <p>
                I'm a dedicated virtual assistant from the Philippines, specializing in administrative support, lead generation, social media management, and e-commerce product listings.
              </p>
              <p>
                Having worked with various small business owners, I understand the friction of growing a business while wearing multiple hats. E-mails pile up, leads go cold, and social medial falls flat when you're overwhelmed.
              </p>
              <p>
                My goal is to give you back your most valuable asset: <strong className="text-white">Time</strong>. By streamlining your day-to-day operations and turning your cold leads into closed deals, I help you focus on what really matters—scaling your vision.
              </p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-200 transition-colors"
              >
                Let's Work Together <ArrowRight size={18} />
              </a>
              <a 
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-colors border border-stone-700"
              >
                View Sample Works
              </a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
