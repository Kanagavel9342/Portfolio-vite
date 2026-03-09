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
    <section id="about" ref={ref} className="py-20 sm:py-24 md:py-32 relative overflow-hidden bg-white dark:bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 sm:mb-12 md:mb-16"
        >
          <span className="w-6 sm:w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-[10px] sm:text-xs text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">
            02. About Me
          </span>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Profile Image + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative w-full"
          >
            {/* Profile card */}
            <div className="relative w-full max-w-md mx-auto">
              {/* Background decoration - hidden on mobile */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full rounded-3xl border-2 border-yellow-400/30" />
              
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-400/20 to-yellow-400/5 border border-black/10 dark:border-white/10 p-6 sm:p-8 aspect-square flex items-center justify-center">
                {/* Avatar placeholder */}
                <div className="relative">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-xl sm:shadow-2xl shadow-yellow-400/40"
                  >
                    <span className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-black">K</span>
                  </motion.div>
                  
                  {/* Zap icon - responsive positioning */}
                  <div className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-yellow-400 flex items-center justify-center shadow-md sm:shadow-lg">
                    <Zap size={14} className="sm:size-16 md:size-18 text-black" fill="black" />
                  </div>
                </div>

                {/* Floating badge - hidden on small mobile */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute top-4 sm:top-6 right-4 sm:right-6 px-2 sm:px-3 py-1 sm:py-1.5 bg-black dark:bg-white rounded-full"
                >
                  <span className="font-mono text-[8px] sm:text-xs text-white dark:text-black font-medium whitespace-nowrap">
                    BCA Student
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Stats row - responsive grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/10 bg-black/2 dark:bg-white/2 text-center"
                >
                  <div className="font-display text-xl sm:text-2xl md:text-3xl font-black text-yellow-400">{stat.value}</div>
                  <div className="font-body text-[10px] sm:text-xs text-black/50 dark:text-white/50 mt-0.5 sm:mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6 sm:gap-8 w-full"
          >
            <div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4 sm:mb-6 dark:text-white">
                Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Experiences</span>
              </h2>
              <div className="space-y-3 sm:space-y-4 font-body text-sm sm:text-base text-black/70 dark:text-white/60 leading-relaxed">
                <p>
                  I'm <strong className="text-black dark:text-white font-semibold">Kanagavel S</strong>, a passionate BCA student and MERN Stack developer based in Tamil Nadu, India. I specialize in building modern, responsive web applications that solve real-world problems.
                </p>
                <p>
                  As a freelancer, I offer full-stack web development, digital agency services, and creative video editing for social media reels. I love turning complex ideas into clean, user-friendly interfaces.
                </p>
                <p className="hidden sm:block">
                  When I'm not coding, I'm exploring new technologies, editing engaging video content, or working on open-source contributions.
                </p>
                {/* Condensed text for mobile */}
                <p className="sm:hidden">
                  When not coding, I explore new tech and edit video content.
                </p>
              </div>
            </div>

            {/* Highlight cards - responsive grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-black/10 dark:border-white/10 hover:border-yellow-400/60 bg-white dark:bg-white/2 shadow-sm hover:shadow-md hover:shadow-yellow-400/10 transition-all cursor-default"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-yellow-400/15 flex items-center justify-center mb-2 sm:mb-3">
                    <Icon size={14} className="sm:size-16 md:size-18 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div className="font-display text-xs sm:text-sm font-bold dark:text-white mb-0.5 sm:mb-1">{label}</div>
                  <div className="font-body text-[8px] sm:text-xs text-black/50 dark:text-white/50 leading-tight sm:leading-normal">
                    {desc}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03, x: 4 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="self-start flex items-center gap-2 sm:gap-3 text-sm sm:text-base font-semibold text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors mt-2 sm:mt-0"
            >
              Let's work together
              <span className="w-6 sm:w-8 h-0.5 bg-current" />
              <span>→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}