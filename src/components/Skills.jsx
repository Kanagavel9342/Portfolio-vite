import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const techSkills = [
  { name: 'React.js', level: 90, color: '#61DAFB' },
  { name: 'Node.js', level: 85, color: '#68A063' },
  { name: 'Express.js', level: 82, color: '#FACC15' },
  { name: 'MongoDB', level: 80, color: '#47A248' },
  { name: 'MySQL', level: 78, color: '#4479A1' },
  { name: 'JavaScript', level: 92, color: '#F7DF1E' },
  { name: 'HTML5', level: 95, color: '#E34F26' },
  { name: 'CSS3', level: 88, color: '#1572B6' },
  { name: 'Tailwind CSS', level: 90, color: '#06B6D4' },
]

const stackBadges = [
  { label: 'MERN Stack', emoji: '⚡' },
  { label: 'React.js', emoji: '⚛️' },
  { label: 'Node.js', emoji: '🟢' },
  { label: 'Express.js', emoji: '🚀' },
  { label: 'MongoDB', emoji: '🍃' },
  { label: 'MySQL', emoji: '🐬' },
  { label: 'JavaScript', emoji: '🟡' },
  { label: 'HTML5', emoji: '🔶' },
  { label: 'CSS3', emoji: '🔵' },
  { label: 'Tailwind CSS', emoji: '💨' },
  { label: 'Reels Editing', emoji: '🎬' },
  { label: 'Git', emoji: '🔀' },
]

export default function Skills() {
  const { ref, inView } = useInView(0.1)

  return (
    <section id="skills" ref={ref} className="py-32 relative bg-black dark:bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-yellow-400/5 blur-[150px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-xs text-yellow-400 tracking-widest uppercase">03. Skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl lg:text-7xl font-black text-white leading-tight mb-16"
        >
          Tech <span className="text-gradient">Arsenal</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Progress bars */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-xl font-bold text-white/70 mb-8"
            >
              Proficiency Levels
            </motion.h3>
            {techSkills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body font-medium text-white/80 text-sm">{skill.name}</span>
                  <span className="font-mono text-xs text-white/40">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Skill badges grid */}
          <div>
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="font-display text-xl font-bold text-white/70 mb-8"
            >
              Technologies & Tools
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {stackBadges.map((badge, i) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  className="group flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/10 hover:border-yellow-400/60 bg-white/5 hover:bg-yellow-400/10 cursor-default transition-all"
                >
                  <span className="text-base">{badge.emoji}</span>
                  <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">
                    {badge.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Creative skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="mt-10 p-6 rounded-2xl border border-yellow-400/20 bg-yellow-400/5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎬</span>
                <div>
                  <div className="font-display text-base font-bold text-white">Creative Skills</div>
                  <div className="font-body text-xs text-white/50">Beyond the code</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-4 py-2 rounded-lg bg-yellow-400/15 border border-yellow-400/30">
                  <span className="font-body text-sm text-yellow-300">📱 Reels Editing</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-yellow-400/15 border border-yellow-400/30">
                  <span className="font-body text-sm text-yellow-300">🎥 Video Production</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
