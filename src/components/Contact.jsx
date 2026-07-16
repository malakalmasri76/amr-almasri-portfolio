import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import './Contact.css'

const CONTACT_LINKS = [
  { label: 'Email', value: 'studio@amralmasri.com', href: 'mailto:studio@amralmasri.com' },
  { label: 'Phone', value: '+962 79 000 0000', href: 'tel:+962790000000' },
  { label: 'Instagram', value: '@amr.interiors', href: '#' },
]

export default function Contact() {
  const infoRef = useReveal()
  const [form, setForm] = useState({ name: '', email: '', msg: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { id, value } = e.target
    setForm((f) => ({ ...f, [id]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', msg: '' })
  }

  return (
    <section className="section plaster" id="contact">
      <div className="wrap contact-grid">
        <div className="contact-info reveal" ref={infoRef}>
          <p className="eyebrow">Contact</p>
          <h2>Let's start drawing your next space</h2>
          <p>
            Tell me about your project, its size, and your expected timeline — I'll get back
            to you within two business days to schedule an initial consultation.
          </p>
          <div className="contact-list">
            {CONTACT_LINKS.map((c) => (
              <a key={c.label} href={c.href}>
                {c.label}
                <small>{c.value}</small>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit}>
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
          <button className="btn primary" type="submit">Send Request</button>
          {sent && (
            <p className="form-msg">Your message has been received — I'll be in touch soon.</p>
          )}
        </form>
      </div>
    </section>
  )
}
