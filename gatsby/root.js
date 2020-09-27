import 'typeface-kanit'
import 'typeface-righteous'
import PropTypes from 'prop-types'
import React from 'react'

import GlobalStyles from '@components/GlobalStyles'
import Layout from '../src/layout/Layout'

export const wrapPageElement = ({ element, props }) => {
  return (
    <>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.any.isRequired,
  props: PropTypes.any.isRequired,
}
