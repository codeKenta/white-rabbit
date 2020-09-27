export default {
  colors: {
    background: '#202040',
    darkBackground: '#05052A',
    secondaryBackground: '#1E1E5E',
    text: '#FEFEFF',
    primary: '#B030B0',
    secondaryContrast: '#D89D09',
    tertiaryContrast: '#1B87DE',
    success: '#ace498',
    fail: '#f46969',
    modes: {
      dark: {
        background: '#F0F0F0',
        darkBackground: '#B8C0CD',
        secondaryBackground: '#C4DAFB',
        text: '#121820',
        primary: '#B030B0',
        secondaryContrast: '#D89D09',
        tertiaryContrast: '#1B87DE',
        success: '#ace498',
        fail: '#f46969',
      },
    },
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
    body: 2,
    heading: 1.5,
  },
  breakpoints: ['420px', '768px', '900px', '1400px'],
  fontSizes: [12, 14, 16, 20, 24, 32, 36, 48],
  space: [0, 10, 15, 20, 32, 64, 128, 256, 512],
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
  },
  buttons: {
    primary: {
      fontSize: 2,
      letterSpacing: '1.2px',
      color: 'text',
      py: [2, 3],
      borderRadius: '20px',
      backgroundColor: 'tertiaryContrast',
      cursor: 'pointer',
      willChange: 'transform',
      position: 'relative',
      overflow: 'hidden',
      transition: '.2s transform ease-in-out',
      ':hover': {
        transform: 'scale(1.05)',
        willChange: 'transform',
        color: '',
      },
    },
  },
  forms: {
    label: {
      fontSize: 2,
      fontWeight: 'bold',
      letterSpacing: '1px',
    },
    checkbox: {
      color: 'tertiaryContrast',
    },

    input: {
      fontSize: [2, 3],
      padding: '12px',
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
      fontSize: [5, null, null, 6],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [4, null, null, 5],
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
