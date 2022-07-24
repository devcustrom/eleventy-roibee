const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{md,njk,vue}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        body: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      letterSpacing: {
        normal:'0.145em',
      },
      borderRadius: {
        '1.5xl' : '10px',
        '4xl' : '32px',
      },
      backgroundSize: {
        '1/2': '50%',
      },
      maxWidth: {
        '1/2': '50%',
      },
      colors: {
        inherit: 'inherit',
        'cod-gray': '#181818',
        'medium-purple': '#6B68E0',
        'medium-purple-2': '#6C6AE4',
        'seance': '#781493',
        'seance-2': '#7A1294',
        'blue-ribbon' : '#4838FF',
        'electric-violet' : '#B510EF',
        'electric-violet-2' : '#704BFF',
        'bright-sun' :'#FFCA42',
        'silver' : '#CCCCCC',
        'heliotrope' : '#DC56FF',
        'mine-shaft' : '#2F2F2F',
        'malibu' : '#53CFFF',
        'dodger-blue' : '#3777FF',
        'porcelain':'#ECEDEE',
        'heliotrope':'#AC5FFF',
      },
      gridTemplateAreas: {
        'layout': [
          'header',
          'main',
          'footer',
        ],
      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'full': '100%',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1a': '1fr auto',
        '1a1': '1fr auto 1fr',
        'a1a': 'auto 1fr auto',
        '1aa': '1fr repeat(2, auto)',
        'full': '100%',
      },
      textShadow: {
        'base' : '0px 0px 4px rgba(255, 255, 255, 0.25)'
      },
      boxShadow: {
        'purp': '0px 0px 3px rgb(120, 20, 147)',
        'fiol': '0px 0px 6px rgb(107, 104, 224)',
        'black': '0px 0px 13px rgb(0, 0, 0)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@savvywombat/tailwindcss-grid-areas'),
    require('tailwindcss-textshadow')
  ],
}
