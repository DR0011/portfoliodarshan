import { motion } from 'framer-motion';

const responsibilities = [
  'Developed reusable React components shared across HRMS and E-commerce products',
  'Integrated REST APIs and handled loading, error, and edge-case states',
  'Built features for HRMS (employee lifecycle, attendance) and E-commerce (catalog, cart, checkout)',
  'Collaborated with designers and backend engineers in an agile team environment',
];

/** Work history at Cerebulb */
export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-white py-20 dark:bg-slate-900"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="experience-heading" className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Experience
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Where I&apos;ve been shipping code</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-brand-50/80 to-white p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 lg:p-10"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Cerebulb</h3>
              <p className="mt-1 text-lg font-medium text-brand-700 dark:text-brand-300">React Developer</p>
            </div>
            <p className="shrink-0 rounded-full bg-brand-600/10 px-4 py-1 text-sm font-semibold text-brand-800 dark:bg-brand-500/20 dark:text-brand-200">
              2 years
            </p>
          </div>
          <ul className="mt-8 space-y-3 text-slate-600 dark:text-slate-300" role="list">
            {responsibilities.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

