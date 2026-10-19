import { useState } from 'react'
import { Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import { site } from '../config/site'

// Accessible contact form with client-side validation and a honeypot field.
// HONESTY: this form does NOT send email by itself — there is no backend.
// On valid submit it either offers a real mailto: link (when an email is
// configured) or an honest "not configured yet" message. It never fakes a
// successful delivery.
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function Field({ id, label, type = 'text', value, onChange, error, textarea, required, autoComplete, placeholder }) {
  const base =
    'w-full rounded-[2px] border bg-ink-950 px-4 py-3 text-paper placeholder:text-muted/60 transition-colors focus:border-emerald focus:outline-none focus:ring-0'
  const borderCls = error ? 'border-red-400/70' : 'border-hairline'
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-[11px] uppercase tracking-eyebrow text-mist">
        {label}
        {required ? <span className="ml-1 text-emerald">*</span> : null}
      </label>
      <Tag
        id={id}
        name={id}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${base} ${borderCls} ${textarea ? 'min-h-[140px] resize-y' : ''}`}
      />
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 flex items-center gap-2 text-xs text-red-300">
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  )
}

export default function ContactForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Honeypot — hidden from real users; bots tend to fill it.
    company: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success | notconfigured

  const set = (key) => (e) =>
    setValues((v) => ({ ...v, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (values.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!emailRe.test(values.email.trim())) next.email = 'Please enter a valid email address.'
    if (values.subject.trim().length < 2) next.subject = 'Please add a subject.'
    if (values.message.trim().length < 10)
      next.message = 'Please add a little more detail (at least 10 characters).'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // Honeypot triggered — silently ignore (likely a bot).
    if (values.company) return

    if (!validate()) {
      setStatus('idle')
      return
    }

    // No backend is connected. Be honest about delivery.
    setStatus(site.contact.email ? 'success' : 'notconfigured')
  }

  // Build a mailto fallback when a real email is configured, so the form
  // is still genuinely useful without a backend.
  const mailtoHref = site.contact.email
    ? `mailto:${site.contact.email}?subject=${encodeURIComponent(
        values.subject,
      )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`
    : '#'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot (visually hidden, not display:none, to stay believable to bots) */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={set('company')}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label="Name"
          value={values.name}
          onChange={set('name')}
          error={errors.name}
          required
          autoComplete="name"
          placeholder="Your name"
        />
        <Field
          id="email"
          label="Email"
          type="email"
          value={values.email}
          onChange={set('email')}
          error={errors.email}
          required
          autoComplete="email"
          placeholder="you@example.com"
        />
      </div>

      <Field
        id="subject"
        label="Subject"
        value={values.subject}
        onChange={set('subject')}
        error={errors.subject}
        required
        placeholder="What would you like to discuss?"
      />

      <Field
        id="message"
        label="Message"
        value={values.message}
        onChange={set('message')}
        error={errors.message}
        textarea
        required
        placeholder="A few honest lines about your idea or question."
      />

      <button
        type="submit"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-6 py-3 text-sm font-medium text-ink-950 transition-colors duration-300 hover:bg-emerald-bright focus-visible:outline-2 focus-visible:outline-emerald focus-visible:outline-offset-2"
      >
        <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        Send message
      </button>

      {/* Honest status feedback */}
      {status === 'success' ? (
        <div role="status" className="flex items-start gap-3 rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-4 text-sm text-mist">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald" strokeWidth={2} aria-hidden="true" />
          <div>
            <p className="text-paper">Thanks — your details look good.</p>
            <p className="mt-1">
              This form doesn’t send messages directly. To actually deliver it,
              open your email client:
            </p>
            <a
              href={mailtoHref}
              className="mt-2 inline-flex items-center gap-1 text-emerald underline underline-offset-4"
            >
              Send via email to {site.contact.email}
            </a>
          </div>
        </div>
      ) : null}

      {status === 'notconfigured' ? (
        <div role="status" className="flex items-start gap-3 rounded-[2px] border-l-2 border-emerald bg-deep-emerald/30 p-4 text-sm text-mist">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald" strokeWidth={2} aria-hidden="true" />
          <div>
            <p className="text-paper">Your details are valid — but no message was sent.</p>
            <p className="mt-1">
              This form is a front-end demo with no email service connected yet.
              To enable real delivery, connect a service like Formspree,
              Resend, or EmailJS, or add Nesla’s email in
              <code className="mx-1 rounded bg-ink-900 px-1.5 py-0.5 text-emerald">src/config/site.js</code>.
              Never put API keys in the front-end source.
            </p>
          </div>
        </div>
      ) : null}
    </form>
  )
}
