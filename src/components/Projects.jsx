import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Github, ExternalLink, Database, Globe, BarChart3 } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Car Rental Service',
    description: 'A modern car rental booking website with responsive UI.',
    tech: ['React', 'MySQL'],
    icon: Globe,
    image: 'src/assets/P1.png',
    accentColor: '#F59E0B',
    github: '#',
    live: 'https://www.sreeganapathycaabs.com/',
    tag: 'React App',
  },
  {
    id: 2,
    title: 'Stack Inventory Management',
    description: 'Inventory system with order placement and stock tracking.',
    tech: ['React', 'Node.js', 'MySQL'],
    icon: Database,
    image: '/projects/inventory.png',
    accentColor: '#06B6D4',
    github: '#',
    live: '#',
    tag: 'Full Stack',
  },
  {
    id: 3,
    title: 'Sales Dashboard',
    description: 'Analytics dashboard with charts and KPI tracking.',
    tech: ['React', 'Express', 'MySQL'],
    icon: BarChart3,
    image: '/projects/sales.png',
    accentColor: '#A855F7',
    github: '#',
    live: '#',
    tag: 'Dashboard',
  },
  {
    id: 4,
    title: 'Bus Tracking System',
    description: 'Real-time bus tracking with live map integration.',
    tech: ['React', 'Node.js', 'Socket.io'],
    icon: Globe,
    image: '/projects/bus.png',
    accentColor: '#10B981',
    github: '#',
    live: '#',
    tag: 'Realtime',
  },
]

function ProjectCard({ project, index, inView }) {
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-black/10 dark:border-white/10 
      bg-white dark:bg-white/5 overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      {/* IMAGE SECTION */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Icon center */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center backdrop-blur-md"
            style={{ background: `${project.accentColor}40` }}
          >
            <Icon size={26} className="text-white" />
          </div>
        </motion.div>

        {/* Tag */}
        <div className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-black/70 text-white">
          {project.tag}
        </div>

        {/* Hover buttons */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3 transition">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-white/20 text-white rounded-lg text-xs flex items-center gap-1"
          >
            <Github size={14} /> GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-yellow-400 text-black rounded-lg text-xs flex items-center gap-1"
          >
            <ExternalLink size={14} /> Live
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-base font-bold text-black dark:text-white mb-2">
          {project.title}
        </h3>

        <p className="text-xs text-black/60 dark:text-white/60 flex-1 mb-3">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] rounded bg-black/5 dark:bg-white/10 text-black dark:text-white/70"
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
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-white dark:bg-black"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl sm:text-5xl font-black text-black dark:text-white mb-10"
        >
          My <span className="text-yellow-500">Work</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}