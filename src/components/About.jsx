import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Code2, Clapperboard, Briefcase, GraduationCap, Zap } from 'lucide-react'

const stats = [
  { label: 'Projects Done', value: '10+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Months Freelancing', value: '12+' },
  { label: 'Satisfied Clients', value: '5+' },
]

const highlights = [
  { icon: GraduationCap, label: 'BCA Student', desc: 'Pursuing Bachelor of Computer Applications' },
  { icon: Code2, label: 'MERN Developer', desc: 'Full-stack web development expertise' },
  { icon: Briefcase, label: 'Freelancer', desc: 'Digital agency and web services' },
  { icon: Clapperboard, label: 'Video Editor', desc: 'Creative reels & video content' },
]

export default function About() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="about" ref={ref} className="py-32 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">
            02. About Me
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Profile Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Profile card */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-yellow-400/30 rounded-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-black/10 dark:border-white/10 p-8 aspect-square flex items-center justify-center">
                {/* Avatar placeholder */}
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-400/40"
                  >
                    <span className="font-display text-7xl font-black text-black">K</span>
                  </motion.div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-xl bg-yellow-400 flex items-center justify-center shadow-lg">
                    <Zap size={20} className="text-black" fill="black" />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-6 right-6 px-3 py-1.5 bg-black dark:bg-white rounded-full"
                >
                  <span className="font-mono text-xs text-white dark:text-black font-medium">BCA Student</span>
                </motion.div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-black/2 dark:bg-white/2 text-center"
                >
                  <div className="font-display text-3xl font-black text-yellow-400">{stat.value}</div>
                  <div className="font-body text-xs text-black/50 dark:text-white/50 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="font-display text-5xl lg:text-6xl font-black leading-tight mb-6 dark:text-white">
                Crafting Digital <span className="text-gradient">Experiences</span>
              </h2>
              <div className="space-y-4 font-body text-black/70 dark:text-white/60 leading-relaxed">
                <p>
                  I'm <strong className="text-black dark:text-white font-semibold">Kanagavel S</strong>, a passionate BCA student and MERN Stack developer based in Tamil Nadu, India. I specialize in building modern, responsive web applications that solve real-world problems.
                </p>
                <p>
                  As a freelancer, I offer full-stack web development, digital agency services, and creative video editing for social media reels. I love turning complex ideas into clean, user-friendly interfaces.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, editing engaging video content, or working on open-source contributions.
                </p>
              </div>
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-4 rounded-2xl border border-black/10 dark:border-white/10 hover:border-yellow-400/60 bg-white dark:bg-white/2 shadow-sm hover:shadow-md hover:shadow-yellow-400/10 transition-all cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="font-display text-sm font-bold dark:text-white mb-1">{label}</div>
                  <div className="font-body text-xs text-black/50 dark:text-white/50">{desc}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start flex items-center gap-3 font-semibold text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors"
            >
              Let's work together
              <span className="w-8 h-0.5 bg-current" />
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
