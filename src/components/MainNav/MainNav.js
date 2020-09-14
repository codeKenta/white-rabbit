/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'
import useLocaleContext from '@hooks/useLocaleContext'
import Logo from '@components/Logo'
import { isActiveOrHasActiveParent } from '@utils/'
import { useLocation } from '@reach/router'

import Hamburger from '@components/Hamburger'

const breakpoint = 700

const hamburgerBars = {
  position: 'absolute',
  display: 'block',
  width: '100%',
  height: '3px',
  backgroundColor: 'secondaryContrast',
  borderRadious: '4px',
  transitionProperty: 'transform',
  transitionDuration: '0.15s',
  transitionTimingFunction: 'ease',
}
const getStyles = (isActive) => ({
  navWrapper: {
    width: '100%',
    top: '0',
    zIndex: 10000,
    px: [3, 4, null, null, 5],
    '@media screen and (max-width: 699px)': {
      position: isActive ? 'fixed' : 'absolute',
      backgroundColor: isActive ? 'primaryBackground' : 'unset',
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

const MainNav = () => {
  const { allMainNavs } = useStaticQuery(
    graphql`
      query {
        allMainNavs: allDatoCmsNavigation(
          filter: { showInMainNav: { eq: true } }
          sort: { fields: position }
        ) {
          edges {
            node {
              locale
              showInMainNav
              linkText
              pageLink {
                ... on DatoCmsStartPage {
                  id
                  slug
                }
                ... on DatoCmsEventsPage {
                  id
                  slug
                }
                ... on DatoCmsDiscussionPage {
                  id
                  slug
                }
                ... on DatoCmsGuidePage {
                  id
                  slug
                }
                ... on DatoCmsContactPage {
                  id
                  slug
                }
                ... on DatoCmsOrganizerPage {
                  id
                  slug
                }
              }
            }
          }
        }
      }
    `
  )

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isActive) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = ''
      }
    }
  }, [isActive])

  const styles = getStyles(isActive)

  const location = useLocation()
  const { locale } = useLocaleContext()

  const localeLinks = allMainNavs.edges.filter(
    ({ node }) => node.locale === locale
  )

  const renderLinks = () => (
    <ul sx={styles.listWrapper}>
      {localeLinks.map(({ node: link }) => {
        const isActive = isActiveOrHasActiveParent(
          location.pathname,
          link.pageLink.slug,
          '/en'
        )

        return (
          <li key={link.linkText}>
            <Link
              sx={styles.a}
              className={`${isActive ? 'active' : ''}`}
              to={link.pageLink.slug}
            >
              {link.linkText}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <div sx={styles.navWrapper}>
      <nav sx={styles.nav}>
        <div sx={styles.logoWrapper}>
          <Logo />
        </div>

        {renderLinks()}
      </nav>

      <Hamburger
        isActive={isActive}
        handleClick={(e) => setIsActive(!isActive)}
      />
    </div>
  )
}

export default MainNav
