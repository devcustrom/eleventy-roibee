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
		body: ['Mont', ...defaultTheme.fontFamily.sans],
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
        'gallery' : '#F0F0F0',
        'mercury' : '#e6e6e6',
        'mercury-2' : '#606060',
		'mercury-3' : '#E8E8E8',
        'tundora' : '#484848',
        'boulder':'#7D7D7D',
        'cod-gray': '#181818',
        'medium-purple': '#6B68E0',
        'medium-purple-2': '#6C6AE4',
        'seance': '#781493',
        'seance-2': '#7A1294',
        'blue-ribbon' : '#4838FF',
		'dove-gray':'#656565',
		'electric-violet' : '#B510EF',
        'electric-violet-2' : '#704BFF',
		'electric-violet-3' : '#881AFF',
		'electric-violet-4' : '#7100FF',
		'electric-violet-5' : '#A144FF',
		'electric-violet-6' : '#6A00E9',
		'electric-violet-7' : '#7A0BFF',
        'bright-sun' :'#FFCA42',
        'silver' : '#CCCCCC',
		'silver-2' : '#BCBCBC',
		'silver-3' : '#C7C7C7',
		'silver-4' : '#BDBDBD',
        'heliotrope' : '#DC56FF',
        'mine-shaft' : '#2F2F2F',
		'mine-shaft-2' : '#393939',
		'mine-shaft-3' : '#333333',
        'malibu' : '#53CFFF',
        'dodger-blue' : '#3777FF',
        'porcelain':'#ECEDEE',
        'heliotrope':'#AC5FFF',
		'heliotrope-2':'#AD44FF',
		'alabaster':'#FCFCFC',
		'alabaster-2':'#F8F8F8',
		'cod-gray-2':'#0F0F0F',
		'purple':'#4C00A6',
		'tolopea':'#1E0043',
		'emperor':'#4F4F4F',


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
        // 'footer': '200px minmax(900px, 1fr) 100px',
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
