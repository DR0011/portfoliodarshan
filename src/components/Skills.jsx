import { motion } from "framer-motion";

const groups = [
  {
    title: "Frontend",
    items: ["React", "JS", "HTML", "CSS", "Bootstrap", "Tailwind CSS "],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Other",
    items: ["API integration", "Debugging", "SQL", "Using AI Tools"],
  },
];

/** Skills grouped by category */
export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-slate-50 py-20 dark:bg-slate-950"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h2
            id="skills-heading"
            className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl"
          >
            Skills
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Technologies and practices I use daily
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {groups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-brand-700 dark:text-brand-300">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2" role="list">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-slate-700 dark:text-slate-300"
                  >
                    <span
                      className="h-2 w-2 rounded-full bg-brand-500"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
