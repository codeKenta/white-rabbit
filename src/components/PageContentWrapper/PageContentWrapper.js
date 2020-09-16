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
        maxWidth: '1200px',
        margin: '0 auto',
        px: [3, 4, null, null, 5],
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
