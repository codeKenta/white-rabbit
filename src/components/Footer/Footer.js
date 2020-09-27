/** @jsx jsx */

import { jsx, Button, useColorMode } from 'theme-ui'

import { graphql, useStaticQuery, Link } from 'gatsby'
import useLocaleContext from '@hooks/useLocaleContext'
import Logo from '@components/Logo'
import { isActiveOrHasActiveParent } from '@utils/'
import { useLocation } from '@reach/router'

const styles = {
  footer: {
    backgroundColor: 'darkBackground',
    padding: 4,
  },
  a: {
    textDecoration: 'none',
    color: 'white',
    cursor: 'pointer',
    transition: 'color 500ms ease',
    ':hover': {
      color: 'secondaryContrast',
    },
  },
  listWrapper: {
    padding: 0,
    listStyle: 'none',
    color: 'white',
  },
}

const Footer = () => {
  const { allLinks } = useStaticQuery(
    graphql`
      query {
        allLinks: allDatoCmsNavigation(sort: { fields: position }) {
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

  const location = useLocation()
  const { locale } = useLocaleContext()

  const [colorMode, setColorMode] = useColorMode()

  const localeLinks = allLinks.edges.filter(
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
    <footer sx={styles.footer}>
      <div sx={{ height: '50px', width: 'max-content' }}>
        <Logo fillWhite />
      </div>
      {renderLinks()}

      <Button
        sx={{ marginTop: ['20px', 4], variant: 'primary' }}
        onClick={(e) => {
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }}
      >
        Toggle {colorMode === 'default' ? 'Dark' : 'Light'}
      </Button>
    </footer>
  )
}

export default Footer
