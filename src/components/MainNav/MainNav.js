/** @jsx jsx */

import { jsx } from 'theme-ui'
import { useState, useEffect } from 'react'

import { graphql, useStaticQuery, Link } from 'gatsby'
import useLocaleContext from '@hooks/useLocaleContext'
import Logo from '@components/Logo'
import { isActiveOrHasActiveParent } from '@utils/'
import { useLocation } from '@reach/router'
import getStyles from './styles'
import Hamburger from '@components/Hamburger'

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
              to={'/' + link.pageLink.slug}
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
        <Link to='/'>
          <div sx={styles.logoWrapper}>
            <Logo />
          </div>
        </Link>

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
