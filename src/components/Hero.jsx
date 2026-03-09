import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react'

const floatingVariants = {
  animate: {
    y: [-10, 10, -10],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
  }
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-black">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] opacity-60 dark:opacity-100" />

      {/* Radial gradient orbs - adjusted for mobile */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 -left-32 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-yellow-400/20 blur-[80px] sm:blur-[120px]"
      />
      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-1/4 -right-32 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-yellow-400/15 blur-[70px] sm:blur-[100px]"
      />

      {/* Floating geometric shapes - hidden on mobile */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-[20%] right-[10%] w-16 h-16 rounded-xl border-2 border-yellow-400/40 rotate-12 hidden lg:block"
      />
      <motion.div
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1s' }}
        className="absolute bottom-[30%] left-[8%] w-10 h-10 rounded-full bg-yellow-400/20 hidden lg:block"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute top-[60%] right-[5%] w-20 h-20 border border-dashed border-yellow-400/30 rounded-full hidden lg:block"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-28 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/40 bg-yellow-400/10 mb-6 sm:mb-8"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-yellow-400 animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs text-yellow-600 dark:text-yellow-400 tracking-wider uppercase">
                Available for Freelance
              </span>
            </motion.div>

            {/* Main heading - responsive font sizes */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-4 sm:mb-6"
            >
              <span className="block dark:text-white">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Kanagavel</span>
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
            >
              <span className="font-display text-base sm:text-lg md:text-xl font-semibold dark:text-white/90">
                MERN Stack Developer
              </span>
              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-yellow-400" />
              <span className="font-display text-base sm:text-lg md:text-xl font-semibold dark:text-white/90">
                Freelancer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-body text-sm sm:text-base text-black/60 dark:text-white/60 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8 sm:mb-10"
            >
              BCA student crafting modern web experiences with the MERN stack. 
              I build scalable web apps, digital agency solutions, and creative video content.
            </motion.p>

            {/* CTA Buttons - stacked on mobile, row on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#projects')}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-colors shadow-lg sm:shadow-xl shadow-yellow-400/30"
              >
                <ExternalLink size={16} className="sm:size-18" />
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-black/20 dark:border-white/20 hover:border-yellow-400 text-black dark:text-white font-semibold rounded-xl transition-all"
              >
                <Download size={16} className="sm:size-18" />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/Kanagavel9342/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:kanagavel9342@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl border border-black/10 dark:border-white/10 hover:border-yellow-400 hover:bg-yellow-400/10 text-black/60 dark:text-white/60 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all"
                  aria-label={label}
                >
                  <Icon size={16} className="sm:size-18" />
                </motion.a>
              ))}
              <div className="w-px h-6 sm:h-8 bg-black/10 dark:bg-white/10 mx-0.5 sm:mx-1" />
              <span className="font-mono text-[10px] sm:text-xs text-black/40 dark:text-white/40">Connect</span>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative flex justify-center items-center mt-8 lg:mt-0"
          >
            {/* Image container with gradient background */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Animated background circles */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-3xl"
              />
              
              {/* Image frame */}
             {/* Image frame */}
<div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 p-1">
  <div className="w-full h-full rounded-2xl bg-white dark:bg-gray-900 overflow-hidden">
    {/* Replace this entire div with img tag */}
    <img 
      src="src/styles/profile-pic.png" 
      alt="Kanagavel"
      className="w-full h-full object-cover"
    />
  </div>
</div>

              {/* Floating elements around image */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-yellow-400/20 border border-yellow-400/40 flex items-center justify-center"
              >
                <span className="text-yellow-600 font-bold text-lg sm:text-xl">&lt;/&gt;</span>
              </motion.div>

              <motion.div
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
                className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-400/30 flex items-center justify-center"
              >
                <span className="text-yellow-600 font-bold text-base sm:text-lg">{'{}'}</span>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute top-1/2 -right-8 w-6 h-6 sm:w-8 sm:h-8 border-2 border-dashed border-yellow-400/40 rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollTo('#about')}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-black/40 dark:text-white/40 hover:text-yellow-500 transition-colors"
      >
        <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} className="sm:size-16" />
      </motion.button>
    </section>
  )
}