import { motion } from "framer-motion";

export const CircularText = ({ className }) => (
  <svg viewBox="0 0 300 300" className={className}>
    <defs>
      <path
        id="circlePath"
        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
      />
    </defs>
    <text fill="currentColor">
      <textPath xlinkHref="#circlePath" className="text-lg">
        AI Engineer • Machine Learning • Software Engineer •
      </textPath>
    </text>
  </svg>
);

export const GithubIcon = ({ className = "", ...rest }) => (
  <motion.svg
    whileHover={{ y: -2 }}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2 0-.4-.5-1.6.2-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </motion.svg>
);

export const LinkedInIcon = ({ className = "", ...rest }) => (
  <motion.svg
    whileHover={{ y: -2 }}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33 0-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
  </motion.svg>
);

export const MailIcon = ({ className = "", ...rest }) => (
  <motion.svg
    whileHover={{ y: -2 }}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 5.46v13.08a2.18 2.18 0 0 1-2.18 2.19H2.18A2.18 2.18 0 0 1 0 18.54V5.46a2.18 2.18 0 0 1 2.18-2.19h19.64A2.18 2.18 0 0 1 24 5.46zM21.82 7.9 12 13.9 2.18 7.9v1.9L12 15.8l9.82-6v-1.9z" />
  </motion.svg>
);

export const WhatsAppIcon = ({ className = "", ...rest }) => (
  <motion.svg
    whileHover={{ y: -2 }}
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17.47 14.38c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07a8.1 8.1 0 0 1-2.4-1.48 9 9 0 0 1-1.66-2.06c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.41-.07-.13-.27-.2-.56-.35M12.05 21.8h-.02a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.7.97.99-3.61-.24-.37a9.79 9.79 0 0 1-1.5-5.22c0-5.4 4.4-9.8 9.82-9.8a9.74 9.74 0 0 1 6.94 2.88 9.72 9.72 0 0 1 2.87 6.93c0 5.41-4.4 9.8-9.81 9.8M20.52 3.45A11.75 11.75 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.1.55 4.14 1.6 5.94L.07 24l6.33-1.66a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.4" />
  </motion.svg>
);

export const SunIcon = ({ className = "" }) => (
  <svg
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

export const MoonIcon = ({ className = "" }) => (
  <svg
    className={`w-full h-auto ${className}`}
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

export const LinkArrow = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.06l-9.22 9.22a.75.75 0 1 1-1.06-1.06L19.94 3h-3.69a.75.75 0 0 1-.75-.75z" />
    <path d="M3 5.25A2.25 2.25 0 0 1 5.25 3h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 0-.75.75v13.5c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75v-6a.75.75 0 0 1 1.5 0v6A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25z" />
  </svg>
);
