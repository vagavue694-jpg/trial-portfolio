import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const works = [
  {
    title: 'Local Engineering Services Support',
    category: 'Engineering & Field Support',
    description: 'Managed client dispatch, tracked steel and fabrication procurement logs, formatted engineering proposals, and coordinated permit liaisons for a local structural engineering practice.',
    image: 'public/asset/Local Engineering Services Support photo.jpg',
    link: 'https://youtube.com/shorts/gwy3Lph--9M?feature=share'
  },
  {
    title: 'Customer Success Overhaul',
    category: 'Process Optimization',
    description: 'Streamlined support ticket processing for a SaaS startup, reducing response time by 45%.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    link: 'https://www.canva.com/design/DAHHb4HlB2I/Xu_TxRJkPVrglc3qCp1-bw/edit'
  },
  {
    title: 'Podcast Launch & Management',
    category: 'Content Administration',
    description: 'Coordinated guest outreach, episode scheduling, and show notes generation for an entrepreneurship podcast.',
    image: 'public/asset/Podcast Launch & Management photo.jpg'
  },
  {
    title: 'E-commerce Inbox Zero',
    category: 'Email Management',
    description: 'Cleaned and categorized 5,000+ unread emails, establishing rules and standard operating procedures.',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=1470&auto=format&fit=crop'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif text-stone-900 mb-6"
            >
              My Sample Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-stone-500"
            >
              A glimpse into the impact I've made for my clients across various industries.
            </motion.p>
          </div>
          <motion.a 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="https://canva.link/947jwn2a2ii56iy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-900 font-semibold border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-colors inline-block whitespace-nowrap"
          >
            See More
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {works.map((work, index) => {
            const isLink = !!work.link;
            const CardComponent = isLink ? 'a' : 'div';
            const extraProps = isLink ? {
              href: work.link,
              target: '_blank',
              rel: 'noopener noreferrer'
            } : {};

            return (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <CardComponent
                  {...extraProps}
                  className="group cursor-pointer flex flex-col h-full bg-white p-6 rounded-3xl border border-stone-200/60 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video bg-stone-200">
                    <img 
                      src={work.image} 
                      alt={work.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-300"></div>
                    <div className="absolute top-4 right-4 bg-white text-stone-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-grow">
                    <span className="text-sm font-semibold text-stone-400 uppercase tracking-wider mb-2">
                      {work.category}
                    </span>
                    <h3 className="text-2xl font-serif text-stone-900 mb-3 group-hover:text-stone-600 transition-colors flex items-center gap-2">
                      {work.title}
                      {isLink && <ArrowUpRight size={18} className="text-stone-400 group-hover:text-stone-600 transition-colors" />}
                    </h3>
                    <p className="text-stone-500 mb-4 flex-grow text-sm leading-relaxed">
                      {work.description}
                    </p>
                    {isLink && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 group-hover:text-stone-600 mt-auto pt-4 border-t border-stone-100">
                        Watch Video Demonstration 🎥
                      </span>
                    )}
                  </div>
                </CardComponent>
              </motion.div>
            );
          })}
        </div>

        {/* Buy Me a Coffee Professional Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-stone-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800 shadow-xl"
        >
          <div className="max-w-xl text-center md:text-left">
            <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">Support My Work</span>
            <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">Buy Me a Coffee ☕</h3>
            <p className="text-stone-400 text-sm md:text-base leading-relaxed">
              If you appreciate my professional Virtual Assistant insights, resources, or want to support my content creation for busy business owners, feel free to support me!
            </p>
          </div>
          <a 
            href="https://buymeacoffee.com/vagavue_zappadoozy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFDD00] text-stone-950 font-bold px-8 py-4 rounded-full hover:bg-[#ffea4c] transition-all hover:scale-105 shadow-md shrink-0 text-sm md:text-base"
          >
            <img 
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" 
              alt="Buy me a coffee" 
              className="w-5 h-5"
              referrerPolicy="no-referrer"
            />
            <span>Support on Buy Me a Coffee</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
