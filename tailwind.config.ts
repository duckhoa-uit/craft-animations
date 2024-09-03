import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily:{
      sans: "var(--font-geist-sans)",
      mono: "var(--font-geist-mono)",
    },
    extend:{
      colors: {
        light:{
          100: 'var(--color-light-100)',
          200: 'var(--color-light-200)',
          400: 'var(--color-light-400)',
          500: 'var(--color-light-500)',
          800: 'var(--color-light-800)',
          900: 'var(--color-light-900)',
          1000: 'var(--color-light-1000)',
          accent: 'var(--color-light-accent)',
          border: 'var(--color-light-border)',
          'border-transparent': 'var(--color-light-border-transparent)',
          toolbar: 'var(--color-light-toolbar)',
          'toolbar-light': 'var(--color-light-toolbar-light)',
          'superlight-bg': 'var(--color-superlight-bg)',
        },
        dark:{
          100: 'var(--color-dark-100)',
          200: 'var(--color-dark-200)',
          400: 'var(--color-dark-400)',
          500: 'var(--color-dark-500)',
          800: 'var(--color-dark-800)',
          900: 'var(--color-dark-900)',
          1000: 'var(--color-dark-1000)',
          accent: 'var(--color-dark-accent)',
          border: 'var(--color-dark-border)',
          'border-transparent': 'var(--color-dark-border-transparent)',
          toolbar: 'var(--color-dark-toolbar)',
          'toolbar-dark': 'var(--color-dark-toolbar-dark)',
          'superlight-bg': 'var(--color-dark-superlight-bg)',
        },
        bg:{
          superlight: 'var(--color-bg-superlight)',
          'superlight-hover': 'var(--color-bg-superlight-hover)',
        },
        focus:{
          DEFAULT: 'var(--ds-focus-ring)',
          button: 'var(--ds-focus-ring-button)'
        }
      },
      boxShadow:{
        border: 'var(--ds-shadow-border)',
        small: 'var(--ds-shadow-small)',
        'border-small': 'var(--ds-shadow-border-small)',
        medium: 'var(--ds-shadow-medium)',
        'border-medium': 'var(--ds-shadow-border-medium)',
        large: 'var(--ds-shadow-large)',
        'border-large': 'var(--ds-shadow-border-large)',
        tooltip: 'var(--ds-shadow-tooltip)',
        menu: 'var(--ds-shadow-menu)',
        modal: 'var(--ds-shadow-modal)',
        fullscreen: 'var(--ds-shadow-fullscreen)',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
