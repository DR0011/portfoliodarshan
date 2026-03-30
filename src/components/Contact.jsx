import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '../data/contact.js';

/** Contact links + simple form (client-side only — wire to a backend or form service later) */
export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus('idle'), 4000);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-20 dark:bg-slate-900"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="contact-heading" className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">I&apos;d love to hear about your next project</p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="space-y-6"
          >
            <p className="text-slate-600 dark:text-slate-300">
              Reach out via email, phone, or social — or use the form and I&apos;ll get back to you.
            </p>
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-lg font-medium text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {contactInfo.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Phone
                </dt>
                <dd className="mt-1">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\\s/g, '')}`}
                    className="text-lg font-medium text-slate-800 dark:text-slate-200"
                  >
                    {contactInfo.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  LinkedIn
                </dt>
                <dd className="mt-1">
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {contactInfo.linkedin.replace('https://', '')}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  GitHub
                </dt>
                <dd className="mt-1">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-brand-600 hover:underline dark:text-brand-400"
                  >
                    {contactInfo.github.replace('https://', '')}
                  </a>
                </dd>
              </div>
            </dl>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-950"
            noValidate
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="mt-1 w-full resize-y rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-brand-600 py-3 font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
            >
              Send Message
            </button>
            {status === 'sent' && (
              <p className="mt-3 text-center text-sm font-medium text-green-600 dark:text-green-400" role="status">
                Thanks! Your message has been noted. (Connect this form to your email or API when ready.)
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

