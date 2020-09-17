const breakpoint = 700

const getStyles = (isActive) => ({
  navWrapper: {
    width: '100%',
    top: '0',
    zIndex: 10000,
    px: [3, 4, null, null, 5],
    '@media screen and (max-width: 699px)': {
      position: isActive ? 'fixed' : 'absolute',
      backgroundColor: isActive ? 'background' : 'unset',
      height: isActive ? '100vh' : 'auto',
    },
    '@media screen and (min-width: 700px)': {
      position: 'absolute',
    },
  },
  nav: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    '@media screen and (max-width: 699px)': {
      flexDirection: 'column',
      height: '100%',
    },
    '@media screen and (min-width: 700px)': {
      maxWidth: '1900px',
      justifyContent: 'space-between',
      height: 'auto',
      flexDirection: 'row',
    },
  },
  logoWrapper: {
    width: 'max-content',
    position: 'relative',
    top: '10px',
    height: '50px',
  },
  a: {
    display: 'block',
    textDecoration: 'none',
    color: 'secondaryContrast',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'color 500ms ease',
    ':hover': {
      color: 'text',
    },
    '@media screen and (max-width: 699px)': {
      marginBottom: '20px',
    },
    '@media screen and (min-width: 700px)': {
      marginLeft: '25px',
    },
  },
  listWrapper: {
    listStyle: 'none',
    '@media screen and (max-width: 699px)': {
      display: isActive ? 'flex' : 'none',
      flexDirection: 'column',
      fontSize: '25px',
      marginTop: '100px',
    },
    '@media screen and (min-width: 700px)': {
      fontSize: 3,
      display: 'flex',
      justifyContent: 'flex-end',
      flexDirection: 'row',
    },
  },
  hamburger: {
    display: 'flex',
    width: '40px',
    height: '25px;',
    justifyContent: 'space-between',
    flexDirection: 'column',
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 30000,
    cursor: 'pointer',

    '@media screen and (min-width: 700px)': {
      display: 'none',
    },
  },
})

export default getStyles
