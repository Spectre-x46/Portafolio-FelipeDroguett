/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        bg:      'var(--bg)',
        raised:  'var(--bg-raised)',
        sunken:  'var(--bg-sunken)',
        ink: {
          DEFAULT: 'var(--ink)',
          muted:   'var(--ink-muted)',
          faint:   'var(--ink-faint)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          ink:     'var(--accent-ink)',
          weak:    'var(--accent-weak)',
          line:    'var(--accent-line)',
        },
        ok:      'var(--ok)',
        pending: 'var(--pending)',
      },
      borderColor: {
        DEFAULT: 'var(--line)',
        strong:  'var(--line-strong)',
      },
      // Escala modular. 7 pasos. Nada fuera de aquí.
      fontSize: {
        xs:   ['0.8125rem', { lineHeight: '1.5' }],    // 13px — suelo absoluto
        sm:   ['0.9375rem', { lineHeight: '1.6' }],    // 15px
        base: ['1.0625rem', { lineHeight: '1.7' }],    // 17px — cuerpo
        lg:   ['1.25rem',   { lineHeight: '1.5' }],    // 20px
        xl:   ['1.625rem',  { lineHeight: '1.3' }],    // 26px
        '2xl':['2.25rem',   { lineHeight: '1.15' }],   // 36px
        '3xl':['3.25rem',   { lineHeight: '1.05' }],   // 52px
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.5rem',
        lg: '0.875rem',
      },
      maxWidth: {
        prose: '68ch',
        page:  '76rem',
      },
    },
  },
  plugins: [],
}
