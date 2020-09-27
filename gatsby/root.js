import 'typeface-kanit'
import 'typeface-righteous'
import PropTypes from 'prop-types'
import React from 'react'

import { ThemeProvider } from 'theme-ui'
import GlobalStyles from '@components/GlobalStyles'
import Layout from '../src/layout/Layout'

import theme from '../src/gatsby-plugin-theme-ui'

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  )
}

wrapPageElement.propTypes = {
  element: PropTypes.any.isRequired,
  props: PropTypes.any.isRequired,
}
