export default {
  colors: {
    background: '#05052A',
    primaryBackground: '#202040',
    secondaryBackground: '#1E1E5E',
    text: '#FEFEFF',
    primaryContrast: '#B030B0',
    secondaryContrast: '#D89D09',
    tertiaryContrast: '#1B87DE',
    success: '#ace498',
    fail: '#f46969',
  },
  fonts: {
    body: "'Kanit', sans-serif",
    heading: "'Kanit', sans-serif",
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 300,
    heading: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.9,
    heading: 1.5,
  },
  breakpoints: ['420px', '768px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 36, 48],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  styles: {
    root: {
      // uses the theme values provided above
      fontFamily: 'body',
      fontWeight: 'body',
      fontSize: [2, 3],
    },
    h1: {
      variant: 'text.heading',
      fontSize: 7,
    },
    h2: {
      variant: 'text.heading',
      fontSize: 6,
    },
    button: {
      border: 'none',
    },
    a: {
      color: 'text',
      textDecoration: 'none',
    },
  },
}
