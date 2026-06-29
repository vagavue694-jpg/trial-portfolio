import { motion, AnimatePresence } from 'motion/react';
import { Share2, Briefcase, MessageCircle, PenTool, CheckCircle2, ChevronDown, Target } from 'lucide-react';
import { useState } from 'react';

const services = [
  {
    title: 'Administrative Support',
    description: 'Comprehensive management of day-to-day tasks, from inbox organization to calendar scheduling.',
    benefit: 'Reclaims your valuable time, limits daily distractions, and allows you to focus purely on high-level strategy and business growth.',
    icon: Briefcase,
    details: [
      'Email filtering and inbox zero management 📥',
      'Calendar scheduling and appointment setting 🗓️',
      'Data entry and document formatting 📑',
      'Travel arrangements and expenses ✈️'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'End-to-end management of your social profiles, including community engagement and performance tracking.',
    benefit: 'Builds a consistent, engaging online presence that strengthens your brand identity and drives meaningful audience growth without draining your time.',
    icon: Share2,
    details: [
      'Content scheduling (e.g., Buffer, Meta Business) 🕒',
      'Profile setup and optimization 📱',
      'Engaging with followers and responding to comments 💬',
      'Tracking growth and engagement analytics 📈'
    ]
  },
  {
    title: 'Customer Service',
    description: 'Professional and prompt handling of customer inquiries, support tickets, and client communications.',
    benefit: 'Enhances customer satisfaction and brand loyalty by ensuring every client feels heard, valued, and instantly supported.',
    icon: MessageCircle,
    details: [
      'Answering customer emails and live chats ✉️',
      'Managing support tickets (Zendesk, Intercom, etc.) 🎫',
      'Processing refunds and order adjustments 🔄',
      'Onboarding new customers and clients 🤝'
    ]
  },
  {
    title: 'Content Creation',
    description: 'Designing and writing high-quality text, visual, and multimedia content tailored for your specific audience.',
    benefit: 'Elevates your marketing efforts with professional, on-brand assets that capture attention and clearly communicate your unique value.',
    icon: PenTool,
    details: [
      'Writing blog posts and newsletters ✍️',
      'Designing graphics using Canva or professional tools 🎨',
      'Basic video editing for reels or shorts 🎬',
      'Designing presentations and pitch decks 📊'
    ]
  },
  {
    title: 'Lead Generation',
    description: 'Building your pipeline with qualified prospects so you can focus on building relationships and closing deals.',
    benefit: 'Accelerates your sales cycle by connecting you directly with high-quality, targeted prospects who are ready to engage.',
    icon: Target,
    details: [
      'Identifying target audiences 🎯',
      'Prospecting via LinkedIn & web scraping 🕵️‍♂️',
      'Verifying email addresses 📧',
      'Managing CRM data (HubSpot, Apollo.io) 📊'
    ]
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            How I Can Help You
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-stone-500"
          >
            I provide comprehensive operational support tailored to the unique needs of creators, coaches, and busy professionals.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 md:p-10 rounded-3xl bg-stone-50 border border-stone-100 hover:border-stone-200 hover:shadow-xl hover:shadow-stone-200/50 transition-all flex flex-col h-full"
              >
                <div className="flex items-start gap-5 mb-6">
                  <motion.div 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-stone-800 shadow-sm group-hover:scale-105 group-hover:bg-stone-900 group-hover:text-white transition-all">
                      <service.icon size={28} />
                    </div>
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-serif text-stone-900 mb-2">{service.title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm md:text-base">{service.description}</p>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-stone-200/60">
                  <button 
                    onClick={() => toggleExpand(index)}
                    className="flex items-center gap-2 text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                  >
                    Learn More
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6">
                          <div className="mb-6 p-4 bg-stone-100 rounded-xl border border-stone-200">
                            <h4 className="text-xs font-bold text-stone-900 tracking-wider uppercase mb-1">Key Benefit 💡</h4>
                            <p className="text-sm text-stone-700 leading-relaxed">{service.benefit}</p>
                          </div>
                          
                          <h4 className="text-sm font-semibold text-stone-900 mb-4 tracking-wide uppercase">Primary Tasks</h4>
                          <ul className="space-y-3">
                            {service.details.map((detail, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-sm text-stone-600">
                                <CheckCircle2 size={18} className="text-stone-400 mt-0.5 flex-shrink-0 group-hover:text-stone-900 transition-colors" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
