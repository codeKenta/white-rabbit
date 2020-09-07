// import "typeface-montserrat"

import PropTypes from 'prop-types'
import React from 'react'

import Layout from '../src/layout/Layout'

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

wrapPageElement.propTypes = {
  element: PropTypes.any.isRequired,
  props: PropTypes.any.isRequired,
}
