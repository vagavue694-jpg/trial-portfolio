import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 lg:gap-24">
        
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="max-w-xl"
        >
          <div className="w-16 h-1 bg-stone-900 mb-8 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
            Ready to Start?
            
            Let's Take Tasks Off Your Plate Today
          </h2>
          <p className="text-lg text-stone-500 mb-8 leading-relaxed">
            Whether you need a part-time VA or a long-term partner — I'm available now and ready to dive in.
          </p>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-stone-900">Email Address</h4>
              <a href="mailto:hello@liuqingva.com" className="text-stone-500 hover:text-stone-900 transition-colors">
                catherine.cabangunayva@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-medium text-stone-900">My LinkedIn</h4>
              <a 
                href="https://www.linkedin.com/in/liuqing-va-virtualassistant-adminsupportleadgenerationsocialmediamanagementecommerceproductlister/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-500 hover:text-stone-900 transition-colors break-all block"
              >
                Message me now! 🔗
              </a>
            </div>

            <div>
              <h4 className="font-medium text-stone-900">Microsoft Teams</h4>
              <a 
                href="https://teams.microsoft.com/l/chat/0/0?users=catherine.cabangunayva@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-500 hover:text-stone-900 transition-colors block"
              >
                Catherine Cabangunay (catherine.cabangunayva@gmail.com) 💬
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-stone-50 p-4 md:p-8 rounded-3xl border border-stone-100 flex flex-col items-center justify-center min-h-[600px]"
        >
          <iframe
            id="JotFormIFrame-261186538095465"
            title="Inquiry Form"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/261186538095465"
            className="w-full h-[900px] md:h-[950px] border-none rounded-xl"
            scrolling="yes"
          >
          </iframe>
        </motion.div>

      </div>
    </section>
  );
}
