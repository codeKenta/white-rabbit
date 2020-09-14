import { bool, func } from 'prop-types'

/** @jsx jsx */

import { jsx } from 'theme-ui'

const Hamburger = ({ handleClick, isActive }) => {
  const inner = {
    width: 30,
    height: 4,
    backgroundColor: 'secondaryContrast',
    borderRadius: 4,
    position: 'absolute',
    transitionProperty: 'transform',
    transitionDuration: '0.15s',
    transitionTimingFunction: 'ease',
  }

  return (
    <button
      aria-label='Menu'
      onClick={handleClick}
      sx={{
        padding: 0,
        margin: 0,
        border: 0,
        cursor: 'pointer',
        transitionProperty: 'opacity, filter',
        transitionDuration: '0.15s',
        transitionTimingFunction: 'linear',
        color: 'inherit',
        backgroundColor: 'transparent',
        overflow: 'visible',
        outline: 'none',
        display: 'flex',
        position: 'absolute',
        top: '20px',
        right: '20px',
        zIndex: '99999999',
        '@media screen and (min-width: 700px)': {
          display: 'none',
        },
      }}
      type='button'
    >
      <span
        sx={{
          width: 30,
          height: 24,
          display: 'inline-block',
          position: 'relative',
        }}
      >
        <span
          sx={{
            ...inner,
            display: 'block',
            top: '50%',
            marginTop: '-2px',
            transitionDuration: '0.075s',
            transitionTimingFunction: isActive
              ? 'cubic-bezier(0.215, 0.61, 0.355, 1)'
              : 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            transform: isActive ? 'rotate(45deg)' : null,
            transitionDelay: isActive ? '0.12s' : null,
            '::before': {
              ...inner,
              display: 'block',
              content: '""',
              top: isActive ? 0 : -10,
              opacity: isActive ? 0 : 1,
              transition: isActive
                ? 'top 0.075s ease, opacity 0.075s 0.12s ease'
                : 'top 0.075s 0.12s ease, opacity 0.075s ease',
            },
            '::after': {
              ...inner,
              display: 'block',
              content: '""',
              bottom: isActive ? 0 : -10,
              transition: isActive
                ? 'bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)'
                : 'bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
              transform: isActive ? 'rotate(-90deg)' : null,
            },
          }}
        />
      </span>
    </button>
  )
}

Hamburger.propTypes = {
  handleClick: func.isRequired,
  isActive: bool.isRequired,
}

export default Hamburger
