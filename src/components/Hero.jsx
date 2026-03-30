import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/** Landing section with name, role, intro, and primary CTAs */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-slate-50 pt-28 pb-20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl dark:bg-brand-600/10" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-brand-300/20 blur-3xl dark:bg-brand-500/10" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p variants={item} className="mb-3 text-sm font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={item}
            className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Darshan Patel
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-xl text-brand-700 sm:text-2xl dark:text-brand-300">
            React.js Developer <span className="text-slate-500 dark:text-slate-400">(2 Years Experience)</span>
          </motion.p>
          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Passionate frontend developer with experience in building scalable web applications.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-brand-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border-2 border-brand-600 bg-transparent px-8 py-3.5 text-base font-semibold text-brand-700 transition hover:bg-brand-50 dark:border-brand-400 dark:text-brand-300 dark:hover:bg-slate-800"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

