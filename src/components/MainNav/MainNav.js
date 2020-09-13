/** @jsx jsx */

// import { graphql, useStaticQuery } from "gatsby"

import { jsx } from 'theme-ui'
import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import useLocaleContext from '@hooks/useLocaleContext'
import { isActiveOrHasActiveParent } from '@utils/'
import { useLocation } from '@reach/router'

const styles = {
  a: {
    textDecoration: 'none',
    color: 'secondaryContrast',
    fontWeight: '500',
    marginLeft: '25px',
    cursor: 'pointer',
    ':hover': {
      color: 'text',
    },
  },
  listWrapper: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}

const MainNav = () => {
  const { allMainNavs } = useStaticQuery(
    graphql`
      query {
        allMainNavs: allDatoCmsNavigation(
          filter: { showInMainNav: { eq: true } }
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

  const location = useLocation()
  const { locale } = useLocaleContext()

  const localeLinks = allMainNavs.edges.filter(
    ({ node }) => node.locale === locale
  )

  return (
    <nav sx={{ margin: '0 auto', maxWidth: '1900px', px: 4 }}>
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
    </nav>
  )
}

export default MainNav
