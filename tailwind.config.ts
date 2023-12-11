import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--bg-primary-color)',
        'secondary': 'var(--bg-secondary-color)',
        'ferra': '#684d4d',
      },
      gridTemplateColumns: {
        'layout': '1fr 3fr 1fr'
      },
      height: {
        'main-calc': 'calc(100vh - var(--headers-h) - var(--inputMessage-h))'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
