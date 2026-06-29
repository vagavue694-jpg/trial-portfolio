import { motion } from 'motion/react';
import { PhoneCall, FileText, Rocket, RefreshCw } from 'lucide-react';

const steps = [
  {
    title: 'Discovery',
    description: "We'll hop on a quick call to discuss your current bottlenecks, goals, and determine if we're the right fit.",
    icon: PhoneCall,
  },
  {
    title: 'Proposal',
    description: "I'll craft a customized plan outlining exactly how I can support your business, including workflows and pricing.",
    icon: FileText,
  },
  {
    title: 'Onboarding',
    description: "A seamless handover process where we set up shared workspaces, access permissions, and initial SOPs.",
    icon: Rocket,
  },
  {
    title: 'Execution',
    description: "I take over the operational heavy-lifting, providing regular updates while you focus on scaling your vision.",
    icon: RefreshCw,
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-stone-400 font-semibold tracking-widest text-sm uppercase block mb-4"
          >
            How it works
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif text-stone-900 mb-6"
          >
            A Seamless Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-stone-500"
          >
            From our first chat to daily collaboration, I make it incredibly easy for you to offload tasks and reclaim your time.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-stone-200"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative relative flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-white border border-stone-100 shadow-sm flex items-center justify-center text-stone-800 mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <span className="absolute top-2 right-2 w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white">
                  {index + 1}
                </span>
                <step.icon size={32} className="text-stone-400 group-hover:text-stone-900 transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-medium text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-500 leading-relaxed text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
