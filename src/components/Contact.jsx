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
      formData.append('access_key', 'e7d6ff1c-580f-4dd6-accb-23755cd66df1') // Replace with actual key
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
    <section id="contact" ref={ref} className="py-32 relative bg-white dark:bg-black overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-[120px]"
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 h-0.5 bg-yellow-400" />
          <span className="font-mono text-xs text-yellow-600 dark:text-yellow-400 tracking-widest uppercase">06. Contact</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-5xl lg:text-7xl font-black dark:text-white leading-tight mb-6">
              Let's <span className="text-gradient">Build</span><br />Together
            </h2>
            <p className="font-body text-black/60 dark:text-white/60 leading-relaxed max-w-md mb-10">
              Got a project in mind? I'm currently open to freelance opportunities, collaborations, and interesting web development projects.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'kanagavel@email.com', href: 'mailto:kanagavel@email.com' },
                { icon: MapPin, label: 'Location', value: 'Tamil Nadu, India', href: null },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-yellow-400/15 border border-yellow-400/30 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-body text-xs text-black/40 dark:text-white/40">{label}</div>
                    {href ? (
                      <a href={href} className="font-body text-sm font-medium dark:text-white hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors">
                        {value}
                      </a>
                    ) : (
                      <div className="font-body text-sm font-medium dark:text-white">{value}</div>
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
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-green-500/20 bg-green-500/5"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} className="text-green-500" />
                  </motion.div>
                  <h3 className="font-display text-2xl font-black dark:text-white mb-2">Message Sent!</h3>
                  <p className="font-body text-black/60 dark:text-white/60">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/2 shadow-xl shadow-black/5 dark:shadow-none"
                >
                  {/* Name */}
                  <div>
                    <label className="font-body text-sm font-medium text-black/70 dark:text-white/70 mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Kanagavel S"
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all ${
                        errors.name ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-body text-sm font-medium text-black/70 dark:text-white/70 mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 transition-all ${
                        errors.email ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-body text-sm font-medium text-black/70 dark:text-white/70 mb-2 block">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project..."
                      className={`w-full px-4 py-3 rounded-xl border font-body text-sm bg-white dark:bg-white/5 dark:text-white placeholder:text-black/30 dark:placeholder:text-white/30 outline-none focus:ring-2 focus:ring-yellow-400/50 resize-none transition-all ${
                        errors.message ? 'border-red-400' : 'border-black/15 dark:border-white/10 focus:border-yellow-400'
                      }`}
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.02, y: -1 } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 py-4 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-black font-semibold rounded-xl transition-all shadow-lg shadow-yellow-400/25"
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        >
                          <Loader size={18} />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center text-red-400 text-sm"
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
