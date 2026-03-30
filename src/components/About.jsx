import { motion } from 'framer-motion';

const skills = [
  'React.js',
  'JavaScript (ES6+)',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Bootstrap',
  'Git',
  'API Integration',
];

/** About section: bio, skill pills, and domain experience */
export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-20 dark:bg-slate-900"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 id="about-heading" className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <p className="mt-2 text-brand-600 dark:text-brand-400">A quick snapshot of who I am</p>
        </motion.div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-slate-600 dark:text-slate-300"
          >
            <p className="leading-relaxed">
              I&apos;m a frontend developer focused on crafting clear, performant user interfaces with React. I enjoy
              turning complex requirements into maintainable components and smooth user flows.
            </p>
            <p className="leading-relaxed">
              At <strong className="text-slate-800 dark:text-slate-100">Cerebulb</strong>, I&apos;ve contributed to
              products across <strong className="text-slate-800 dark:text-slate-100">HRMS</strong>,{' '}
              <strong className="text-slate-800 dark:text-slate-100">E-commerce</strong>, and{' '}
              <strong className="text-slate-800 dark:text-slate-100">OSI PI</strong> industrial systems — from employee
              portals to storefronts and real-time data dashboards.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Skills</h3>
            <ul className="mt-4 flex flex-wrap gap-2" role="list">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-800 dark:border-brand-800 dark:bg-brand-950/50 dark:text-brand-200"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

