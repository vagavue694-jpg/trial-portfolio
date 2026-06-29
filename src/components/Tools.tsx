import { motion } from 'motion/react';
// We use simple placeholder boxes or names since we don't have brand icons loaded
const tools = [
  "Google Workspace", "Trello", "Canva", "Capcut", 
  "Google Sheets", "Google Docs", "Meta Business", "Shopify", 
  "Notion", "PhotoPea", "Apollo.ai", "Calendly", "ChatGPT", "Claude.ai",
  "QuickBooks", "Microsoft Excel"
];

export default function Tools() {
  return (
    <section id="tools" className="py-24 bg-stone-900 border-t border-stone-800 overflow-hidden text-center relative z-10">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="mb-12"
        >
          <span className="text-stone-400 font-semibold tracking-widest text-sm uppercase">The Stack</span>
          <h2 className="text-3xl md:text-4xl font-serif text-white mt-4">My Tools</h2>
        </motion.div>

        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
            className="flex gap-6 pr-6 w-max"
          >
            {[...tools, ...tools].map((tool, index) => (
              <div
                key={`${tool}-${index}`}
                className="px-6 py-3 rounded-full bg-stone-800/50 border border-stone-700 text-stone-300 font-medium whitespace-nowrap hover:bg-stone-700 hover:text-white transition-colors"
              >
                {tool}
              </div>
            ))}
          </motion.div>
          {/* Gradient Masts */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-stone-900 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-stone-900 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
