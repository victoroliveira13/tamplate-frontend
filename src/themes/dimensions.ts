const dimensions = {
  xs: '0px', // extra small devices - portrait phones < 576px
  sm: '576px', // small devices - landscape phones >= 576px and < 768px
  md: '768px', // medium devices - tablet >= 768px and < 992px
  lg: '992px', // large devices - desktop/laptop >= 992px and < 1200px
  xl: '1200px', // extra large devices - large desktop >= 1200px
}

const radius = {
  sm: '5px',
  md: '8px'
}

const sizes = {
  xs: '1.25rem',
  sm: '1.5rem',
  md: '3.1rem'
}

const spaces = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.25rem',
  xl: '1.5rem',
  '2xl': '3rem'
}

const typography = {
  fontSizes: {
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