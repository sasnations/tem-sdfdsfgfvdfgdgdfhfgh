/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#333333',
            h2: {
              color: '#1a1a1a',
              fontWeight: '700',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: '#1a1a1a',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            a: {
              color: '#4A90E2',
              '&:hover': {
                color: '#357ABD',
              },
            },
            ul: {
              marginTop: '1em',
              marginBottom: '1em',
              paddingLeft: '1.5em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
          },
        },
        invert: {
          css: {
            color: '#d1d5db',
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            a: {
              color: '#60a5fa',
              '&:hover': {
                color: '#93c5fd',
              },
            },
            strong: {
              color: '#fff',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};