import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { fadeUp, staggerContainer } from '../lib/motion'
import './Contact.css'

const CONTACT_LINKS = [
  { label: 'Email', value: 'studio@amralmasri.com', href: 'mailto:studio@amralmasri.com' },
  { label: 'Phone', value: '+962 79 000 0000', href: 'tel:+962790000000' },
  { label: 'Instagram', value: '@amr.interiors', href: '#' },
]

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [status, setStatus] = useState('idle')

  function handleChange(e) {
    const { id, value } = e.target
    setForm((f) => ({ ...f, [id]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.msg },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('sent')
      setForm({ name: '', email: '', msg: '' })
    } catch (err) {
      console.error('Contact form error:', err)
      setStatus('error')
    }
  }

  return (
    <section className="section plaster" id="contact">
      <div className="wrap contact-grid">
        <motion.div
          className="contact-info"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>Contact</motion.p>
          <motion.h2 variants={fadeUp}>Let's start drawing your next space</motion.h2>
          <motion.p variants={fadeUp}>
            Tell me about your project, its size, and your expected timeline — I'll get back
            to you within two business days to schedule an initial consultation.
          </motion.p>
          <motion.div className="contact-list" variants={fadeUp}>
            {CONTACT_LINKS.map((c) => (
              <a key={c.label} href={c.href}>
                {c.label}
                <small>{c.value}</small>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={form.name} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div className="field">
            <label htmlFor="msg">Tell me about your project</label>
            <textarea id="msg" value={form.msg} onChange={handleChange} required />
          </div>

          <motion.button
            className="btn primary"
            type="submit"
            disabled={status === 'sending'}
            whileTap={{ scale: 0.97 }}
          >
            {status === 'sending' ? 'Sending…' : 'Send Request'}
          </motion.button>

          <AnimatePresence mode="wait">
            {status === 'sent' && (
              <motion.p
                key="sent"
                className="form-msg"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                Your message has been received — I'll be in touch soon.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                key="error"
                className="form-msg form-msg-error"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                Something went wrong. Please try again or email directly.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  )
}