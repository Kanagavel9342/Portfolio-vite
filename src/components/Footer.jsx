import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react'

const socials = [
  { icon: Github, href: 'https://github.com/', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:kanagavel@email.com', label: 'Email' },
]

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center">
                <span className="font-display font-black text-black text-xl">K</span>
              </div>
              <span className="font-display font-black text-white text-xl">
                Kanagavel<span className="text-yellow-400">.</span>
              </span>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              MERN Stack Developer & Freelancer crafting modern web experiences. BCA student passionate about clean code and creative design.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/10 hover:border-yellow-400/60 text-white/50 hover:text-yellow-400 transition-all"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 4).map(link => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="font-body text-sm text-white/50 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white mb-4 uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2">
              {['Website Development', 'Reels Editing', 'Custom Web Apps', 'Freelance'].map(s => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="font-body text-sm text-white/50 hover:text-yellow-400 transition-colors text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="font-body text-xs text-white/30 flex items-center gap-1">
            © {new Date().getFullYear()} Kanagavel S. Made with <Heart size={10} className="text-yellow-400 fill-yellow-400" /> in Tamil Nadu
          </p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-white/20">v1.0.0</span>
            <motion.button
              onClick={() => scrollTo('#hero')}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-yellow-400/20 border border-white/10 hover:border-yellow-400/40 text-white/50 hover:text-yellow-400 text-xs font-medium transition-all"
            >
              <ArrowUp size={12} />
              Back to Top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
