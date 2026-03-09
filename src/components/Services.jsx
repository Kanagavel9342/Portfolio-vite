import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Globe, Clapperboard, Code2, Paintbrush, Smartphone, Zap } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Full-stack web applications built with the MERN stack. Responsive, fast, and scalable solutions tailored to your business needs.',
    features: ['React.js Frontend', 'Node.js Backend', 'Database Design', 'API Development'],
    tag: 'Core Service',
    highlight: true,
  },
  {
    icon: Clapperboard,
    title: 'Reels Editing',
    description: 'Creative video editing for Instagram Reels, YouTube Shorts, and social media content that captures attention and drives engagement.',
    features: ['Trending Transitions', 'Color Grading', 'Music Sync', 'Caption Design'],
    tag: 'Creative',
    highlight: false,
  },
  {
    icon: Code2,
    title: 'Custom Web Apps',
    description: 'Bespoke web applications with complex functionality — from dashboards to automation systems and management platforms.',
    features: ['Custom Logic', 'Admin Panels', 'Data Dashboards', 'Automation'],
    tag: 'Development',
    highlight: false,
  },
]

export default function Services() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="services" ref={ref} className="py-32 relative bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <motion.div
        animate={{ x: [-100, 100, -100], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] h-[400px] rounded-full bg-yellow-400/10 blur-[100px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-xs text-yellow-400 tracking-widest uppercase">05. Services</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl lg:text-7xl font-black text-white leading-tight"
          >
            What I <span className="text-gradient">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-body text-white/50 max-w-xs"
          >
            End-to-end digital solutions from concept to deployment
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 overflow-hidden ${
                  service.highlight
                    ? 'bg-yellow-400 border-2 border-yellow-400'
                    : 'bg-white/3 border border-white/10 hover:border-yellow-400/40'
                }`}
              >
                {/* Tag */}
                <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-mono ${
                  service.highlight ? 'bg-black/20 text-black/70' : 'bg-white/10 text-white/50'
                }`}>
                  {service.tag}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  service.highlight ? 'bg-black/15' : 'bg-yellow-400/15'
                }`}>
                  <Icon size={24} className={service.highlight ? 'text-black' : 'text-yellow-400'} />
                </div>

                <h3 className={`font-display text-2xl font-black mb-4 ${service.highlight ? 'text-black' : 'text-white'}`}>
                  {service.title}
                </h3>
                <p className={`font-body text-sm leading-relaxed mb-8 flex-1 ${
                  service.highlight ? 'text-black/70' : 'text-white/60'
                }`}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map(feat => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        service.highlight ? 'bg-black/40' : 'bg-yellow-400'
                      }`} />
                      <span className={`font-body text-xs ${
                        service.highlight ? 'text-black/70' : 'text-white/60'
                      }`}>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`mt-8 py-3 rounded-xl font-semibold text-sm transition-all ${
                    service.highlight
                      ? 'bg-black text-white hover:bg-black/80'
                      : 'bg-yellow-400/15 border border-yellow-400/30 text-yellow-400 hover:bg-yellow-400/25'
                  }`}
                >
                  Get Started →
                </motion.button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
