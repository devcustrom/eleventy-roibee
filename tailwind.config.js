module.exports = {
  content: ['./src/**/*.{htm,md,njk}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        body: ['body'],
      },
      letterSpacing: {
        normal:'0.145em',
      },
      borderRadius: {
        '2.5xl' : '10px', 
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
        // https://chir.ag/projects/name-that-color/#072329
      },
      borderRadius: {
      },
      gridTemplateRows: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1aa': '1fr repeat(2, auto)',
      },
      gridTemplateColumns: {
        'aa1': 'repeat(2, auto) 1fr',
        'a1': 'auto 1fr',
        '1aa': '1fr repeat(2, auto)',
      },
      boxShadow: {
        'purp': '0px 0px 3px rgb(120, 20, 147,)',
        'fiol': '0px 0px 6px rgb(107, 104, 224,)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
