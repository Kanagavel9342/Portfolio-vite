import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Send, CheckCircle, Mail, MapPin, Clock, Loader } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView(0.1)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Valid email required'
    if (!form.message.trim() || form.message.length < 10) errs.message = 'Message must be at least 10 characters'
    return errs
  }

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('loading')
    try {
      const formData = new FormData()
      formData.append('access_key', 'e7d6ff1c-580f-4dd6-accb-23755cd66df1')
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('message', form.message)
      formData.append('subject', `Portfolio Contact from ${form.name}`)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-24 md:py-32 relative bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] opacity-20" />
      
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-yellow-400/10 blur-[80px] sm:blur-[100px] md:blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6"
        >
          <span className="w-6 sm:w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-[10px] sm:text-xs text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">
            06. Contact
          </span>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full order-2 lg:order-1"
          >
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black dark:text-white leading-tight mb-4 sm:mb-6">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Build</span>
              <br className="hidden sm:block" />Together
            </h2>
            
            <p className="font-body text-sm sm:text-base text-black/60 dark:text-white/60 leading-relaxed max-w-md mb-8 sm:mb-10">
              Got a project in mind? I'm currently open to freelance opportunities, collaborations, and interesting web development projects.
            </p>

            {/* Contact Info Cards - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {[
                { icon: Mail, label: 'Email', value: 'kanagavel@email.com', href: 'mailto:kanagavel@email.com' },
                { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: null },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-0 sm:bg-transparent rounded-xl sm:rounded-none bg-black/5 dark:bg-white/5 sm:bg-transparent"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="sm:size-18 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-body text-[10px] sm:text-xs text-black/40 dark:text-white/40">{label}</div>
                    {href ? (
                      <a 
                        href={href} 
                        className="font-body text-xs sm:text-sm font-medium dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors line-clamp-1"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-body text-xs sm:text-sm font-medium dark:text-white line-clamp-1">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center rounded-2xl sm:rounded-3xl border border-green-500/20 bg-green-500/5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-4 sm:mb-6"
                  >
                    <CheckCircle size={32} className="sm:size-40 text-green-500" />
                  </motion.div>
                  <h3 className="font-display text-xl sm:text-2xl font-black dark:text-white mb-2">Message Sent!</h3>
                  <p className="font-body text-sm sm:text-base text-black/60 dark:text-white/60">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/2 shadow-lg sm:shadow-xl shadow-black/5 dark:shadow-none"
                >
                  {/* Name */}
                  <div>
                    <label className="font-body text-xs sm:text-sm font-medium text-black/70 dark:text-white/70 mb-1.5 sm:mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Kanagavel S"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all ${
                        errors.name ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-body text-xs sm:text-sm font-medium text-black/70 dark:text-white/70 mb-1.5 sm:mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all ${
                        errors.email ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-xs sm:text-sm font-medium text-black/70 dark:text-white/70 mb-1.5 sm:mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 resize-none transition-all ${
                        errors.message ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-[10px] sm:text-xs mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-semibold rounded-lg sm:rounded-xl transition-all shadow-md sm:shadow-lg shadow-yellow-400/25 text-sm sm:text-base"
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Loader size={16} className="sm:size-18" />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="sm:size-18" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {/* Error Message */}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-red-400 text-xs sm:text-sm"
                    >
                      Something went wrong. Please try again.
                    </motion.p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}