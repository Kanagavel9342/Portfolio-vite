import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink, Database, Globe, Bot, BarChart3 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'College Form Automation',
    description: 'A comprehensive system to automate college form workflows with faculty approval mechanisms, reducing manual paperwork and processing time significantly.',
    tech: ['HTML', 'Node.js', 'MySQL'],
    icon: Globe,
    color: 'from-orange-500/20 to-yellow-400/20',
    accentColor: '#F59E0B',
    github: '#',
    live: '#',
    tag: 'Web App',
  },
  {
    id: 2,
    title: 'Stack Inventory Management',
    description: 'Full-featured inventory management system with real-time stock tracking, supplier management, and automated reporting dashboards.',
    tech: ['React', 'Node.js', 'MySQL'],
    icon: Database,
    color: 'from-blue-500/20 to-cyan-400/20',
    accentColor: '#06B6D4',
    github: '#',
    live: '#',
    tag: 'Full Stack',
  },
  {
    id: 3,
    title: 'Sales Dashboard',
    description: 'Interactive sales analytics dashboard with dynamic charts, KPI tracking, and real-time data visualization to drive business insights.',
    tech: ['React', 'Express', 'MySQL'],
    icon: BarChart3,
    color: 'from-purple-500/20 to-pink-400/20',
    accentColor: '#A855F7',
    github: '#',
    live: '#',
    tag: 'Dashboard',
  },
  {
    id: 4,
    title: 'AI ChatBot Dashboard',
    description: 'Intelligent chatbot interface with NLP capabilities, conversation analytics, and beautiful data visualization for bot performance metrics.',
    tech: ['Flask', 'NLP', 'Data Viz'],
    icon: Bot,
    color: 'from-green-500/20 to-emerald-400/20',
    accentColor: '#10B981',
    github: '#',
    live: '#',
    tag: 'AI / ML',
  },
]

function ProjectCard({ project, index, inView }) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-3xl border border-white/10 hover:border-yellow-400/40 bg-white/2 dark:bg-white/2 overflow-hidden transition-all duration-300"
    >
      {/* Gradient top area */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        {/* Background pattern */}
        <div className="absolute inset-0 grid-bg opacity-30" />
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center"
          style={{ background: `${project.accentColor}20`, border: `1px solid ${project.accentColor}40` }}
        >
          <Icon size={28} style={{ color: project.accentColor }} />
        </motion.div>

        {/* Tag */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono bg-black/40 text-white/80 border border-white/10">
          {project.tag}
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
        >
          <motion.a
            href={project.github}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-all"
          >
            <Github size={15} /> GitHub
          </motion.a>
          <motion.a
            href={project.live}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold rounded-xl transition-all"
          >
            <ExternalLink size={15} /> Live
          </motion.a>
        </motion.div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
          {project.title}
        </h3>
        <p className="font-body text-sm text-white/60 leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const { ref, inView } = useInView(0.05)

  return (
    <section id="projects" ref={ref} className="py-32 relative bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">04. Projects</span>
        </motion.div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-display text-5xl lg:text-7xl font-black dark:text-white leading-tight"
          >
            Featured <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            whileHover={{ x: 4 }}
            className="flex items-center gap-2 text-sm font-medium text-black/50 dark:text-white/50 hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors whitespace-nowrap"
          >
            View all on GitHub <ExternalLink size={14} />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
