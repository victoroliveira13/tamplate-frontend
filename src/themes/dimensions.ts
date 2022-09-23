const dimensions = {
  xs: '0px', // extra small devices - portrait phones < 576px
  sm: '576px', // small devices - landscape phones >= 576px and < 768px
  md: '768px', // medium devices - tablet >= 768px and < 992px
  lg: '992px', // large devices - desktop/laptop >= 992px and < 1200px
  xl: '1200px', // extra large devices - large desktop >= 1200px
}

const radius = {
  'radii-xs': '2.5px',
  'radii-sm': '5px',
  sm: '5px',
  md: '8px',
  'radii-md': '10px',
  'radii-lg': '20px',
  'radii-full': '99999px',
}

const sizes = {
  xs: '1.25rem',
  sm: '1.5rem',
  md: '3.1rem'
}

const spaces = {
  '2xl': '3rem',
  'space-1': '0.25rem',
  xs: '0.25rem',
  'space-2': '0.5rem',
  sm: '0.5rem',
  'space-3': '0.75rem',
  'space-4': '1rem',
  md: '1rem',
  'space-5': '1.25rem',
  lg: '1.25rem',
  'space-6': '1.5rem',
  xl: '1.5rem',
  'space-7': '1.75rem',
  'space-8': '2rem',
  'space-10': '2.5rem',
  'space-12': '3rem',
  'space-16': '4rem',
  'space-20': '5rem',
  'space-40': '10rem',
  'space-64': '16rem',
  'space-80': '20rem',
  'space-px': '1px',
}

const typography = {
  fontSizes: {
    xxs: '0.625rem',
    xs: '0.75rem',
    sm: '0.87rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2rem',
    '4xl': '2rem'
  },
  fontWeights: {
    normal: 400,
    medium: 600,
    bold: 700
  },
  lineHeights: {
    xs: '0.5rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem'
  },
  letterSpacings: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem'
  }
}

export { dimensions, radius, sizes, spaces, typography };