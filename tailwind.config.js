/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* subtle orange accent */
        input: "var(--color-input)", /* elevated content areas */
        ring: "var(--color-ring)", /* signature orange energy */
        background: "var(--color-background)", /* deep black canvas */
        foreground: "var(--color-foreground)", /* high contrast reading */
        surface: "var(--color-surface)", /* elevated content areas */
        primary: {
          DEFAULT: "var(--color-primary)", /* signature orange energy */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* softer orange accent */
          foreground: "var(--color-secondary-foreground)", /* white */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* clear red concern */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* muted backgrounds */
          foreground: "var(--color-muted-foreground)", /* clear hierarchy */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* subtle highlight */
          foreground: "var(--color-accent-foreground)", /* deep black */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* elevated content areas */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* elevated content areas */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* terminal green */
          foreground: "var(--color-success-foreground)", /* deep black */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* amber attention */
          foreground: "var(--color-warning-foreground)", /* deep black */
        },
        error: {
          DEFAULT: "var(--color-error)", /* clear red concern */
          foreground: "var(--color-error-foreground)", /* white */
        },
        cta: {
          DEFAULT: "var(--color-cta)", /* intense red-orange */
          foreground: "var(--color-cta-foreground)", /* white */
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        code: ["var(--font-code)", "Fira Code", "monospace"],
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 12px */
        'md': 'var(--spacing-md)', /* 20px */
        'lg': 'var(--spacing-lg)', /* 32px */
        'xl': 'var(--spacing-xl)', /* 52px */
      },
      boxShadow: {
        'glow': 'var(--shadow-glow)',
        'glow-intense': 'var(--shadow-glow-intense)',
        'elevation': 'var(--shadow-elevation)',
      },
      animation: {
        'blur-reveal': 'blurReveal 2.5s ease-out forwards',
        'pulse-orange': 'pulseOrange 2s infinite',
        'blink': 'blink 1s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        blurReveal: {
          'from': {
            filter: 'blur(20px)',
            opacity: '0',
          },
          'to': {
            filter: 'blur(0px)',
            opacity: '1',
          },
        },
        pulseOrange: {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1.2)',
            opacity: '0.7',
          },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.transform-style-preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.text-glow': {
          'text-shadow': '0 0 30px var(--color-primary)',
        },
        '.text-glow-intense': {
          'text-shadow': '0 0 40px var(--color-primary), 0 0 60px var(--color-primary)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}