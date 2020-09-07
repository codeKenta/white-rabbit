/** @jsx jsx */

import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { jsx } from 'theme-ui'

const PageContentWrapper = ({ children }) => {
  return (
    <div
      sx={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        padding: 3,
      }}
    >
      {children}
    </div>
  )
}

PageContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageContentWrapper
