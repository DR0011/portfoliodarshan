import { contactInfo } from '../data/contact.js';

/** Site footer with copyright and social links */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-100 py-10 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-center text-sm text-slate-600 dark:text-slate-400">
          © {year} Darshan Patel. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Social">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            LinkedIn
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            GitHub
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400"
          >
            Email
          </a>
        </nav>
      </div>
    </footer>
  );
}

