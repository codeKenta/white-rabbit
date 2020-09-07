/** @jsx jsx */

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import LocaleContext from '@context/LocaleContext'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'
import MainNav from '@components/MainNav'
import Logo from '@components/Logo'
const Layout = ({
  children,
  data,
  location,
  pageResources = {
    page: { path: '' },
  },
}) => {
  return (
    <>
      <LocaleContext.Provider
        value={{
          locale: ((data || {}).page || {}).locale ? data.page.locale : '',
        }}
      >
        <MainNav />
        <div sx={{ maxWidth: '200px' }}>
          <Logo />
        </div>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div>
          <main>{children}</main>
          <footer />
        </div>
      </LocaleContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  data: PropTypes.object,
  location: PropTypes.object.isRequired,
  pageResources: PropTypes.object.isRequired,
}

Layout.defaultProps = {
  data: {},
}

export default Layout
