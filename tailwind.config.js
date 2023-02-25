/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        produto: {
          yellowDark: '#C47F17',
          yellowLight: '#F1E9C9',
          yellow: '#DBAC2C',
          purpleDark: '#4B2995',
          purpleLight: '#EBE5F9',
          purple: '#8047F8'
        },
        base: {
          baseTitle: '#272221',
          baseSubtitle: '#403937',
          baseText: '#574F4D',
          baseHover: '#555564',
          baseButton: '#E6E5E5',
          baseInput: '#EDEDED',
          card: '#F3F2F2',
          description: '#8D8686',
          radio: '#D7D5D5'
        },
        background: {
          background: '#FAFAFA'
        }
      },
      borderRadius: {
        card: '6px 36px'
      },

      fontFamily: {
        baloo: ['Baloo 2', 'cursive'],
        roboto: ['Roboto', 'sans-serif']
      }
    },

    plugins: []
  }
}
