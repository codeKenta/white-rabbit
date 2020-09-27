/** @jsx jsx */

import PropTypes from 'prop-types'

import { jsx } from 'theme-ui'
import React from 'react'
import discordLogo from '@assets/discord.svg'
import meetupLogo from '@assets/meetupLogo.svg'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { platformTypes } from '@utils'

const PageContentWithPlatform = ({
  children,
  platformType,
  platformLinkText,
  platformLinkUrl,
}) => {
  const hasPlatform = platformType && platformLinkText && platformLinkUrl

  const hasCorrectPlatform =
    (hasPlatform && platformType === platformTypes.discord) ||
    platformType === platformTypes.meetup

  const styles = {
    [platformTypes.discord]: {
      fill: '#7289DA',
      color: 'text',
      image: {
        width: '150px',
        '@media screen and (min-width: 400px)': {
          width: '170px',
        },
      },
    },
    [platformTypes.meetup]: {
      image: {
        height: '70px',
        padding: '10px',
        boxSizing: 'content-box',
        borderRadius: '50%',
        backgroundColor: 'white',
        '@media screen and (min-width: 400px)': {
          height: '100px',
        },
      },
      fill: '#F64060',
      color: 'text',
    },
  }

  const platformLogos = {
    [platformTypes.discord]: discordLogo,
    [platformTypes.meetup]: meetupLogo,
  }

  return (
    <div
      sx={{
        position: 'relative',
        overflow: 'hidden',
        paddingBottom: [hasCorrectPlatform ? '300px' : 0, null, 0],
      }}
    >
      {children}
      {hasCorrectPlatform && (
        <div
          sx={{
            position: 'absolute',
            bottom: '-20px',
            right: '-20px',
            alignItems: 'center',
            width: '300px',
            '@media screen and (min-width: 400px)': {
              width: '330px',
            },
            '@media screen and (min-width: 860px)': {
              width: '370px',
            },
          }}
        >
          <svg width='100%' height='100%' viewBox='0 0 418 408' version='1.1'>
            <g
              id='Page-1'
              stroke='none'
              stroke-width='1'
              fill='none'
              fillRule='evenodd'
            >
              <path
                d='M339.215548,-2.27373675e-13 C376.946763,7.17688243 401.573575,29.6633088 413.095985,67.4592791 C430.379599,124.153235 396.42542,145.600885 396.42542,190.668899 C396.42542,235.736913 355.750094,246.239327 339.215548,279.724061 C322.681003,313.208794 322.681003,367.702794 272.896699,385.670154 C223.112395,403.637515 178.058938,349.735434 138.492461,367.702794 C98.9259834,385.670154 78.8112716,408 39.4056358,408 C13.1352119,408 0,400.556718 0,385.670154 L0,-2.27373675e-13 L339.215548,-2.27373675e-13 Z'
                id='Path'
                fill={styles[platformType].fill}
                transform='translate(209.000000, 204.000000) rotate(-180.000000) translate(-209.000000, -204.000000) '
              ></path>
            </g>
          </svg>
          <div
            sx={{
              position: 'absolute',
              bottom: '80px',
              right: '50px',
              left: '50px',
              textAlign: 'center',
              '@media screen and (min-width: 400px)': {
                right: 0,
                left: 0,
              },
            }}
          >
            <a
              href={platformLinkUrl}
              target='_blank'
              sx={{
                color: styles[platformType].color,
                cursor: 'pointer',
                transition: '.2s transform ease-in',
                ':hover': {
                  transform: 'scale(1.02)',
                  willChange: 'transform',
                },
              }}
            >
              <img
                sx={{
                  ...styles[platformType].image,
                }}
                src={platformLogos[platformType]}
              />
              <p
                sx={{
                  margin: 0,
                  fontSize: 2,
                  fontWeight: 600,
                  width: '200px',
                  '@media screen and (min-width: 400px)': {
                    width: '100%',
                  },
                }}
              >
                {platformLinkText} <FaExternalLinkAlt />
              </p>
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

PageContentWithPlatform.propTypes = {
  children: PropTypes.node.isRequired,
  platformType: PropTypes.string.isRequired,
  platformLinkText: PropTypes.string.isRequired,
  platformLinkUrl: PropTypes.string.isRequired,
}

export default PageContentWithPlatform
