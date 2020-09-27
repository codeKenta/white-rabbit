/** @jsx jsx */

import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { jsx } from 'theme-ui'

const PageContentWrapper = ({ children, addPaddingY }) => {
  const py = addPaddingY
    ? {
        paddingTop: [5, '100px', null, '150px'],
        paddingBottom: ['20px', 4, 5, null, 6],
      }
    : {}

  return (
    <div
      sx={{
        width: '100%',
        maxWidth: '1000px',
        margin: '0 auto',
        px: [2, 3, 4, null, null, 5],
        ...py,
      }}
    >
      {children}
    </div>
  )
}

PageContentWrapper.defaultProps = {
  addPaddingY: false,
}

PageContentWrapper.propTypes = {
  addPaddingY: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default PageContentWrapper
