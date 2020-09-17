/** @jsx jsx */

import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { jsx, Styled } from 'theme-ui'
import MarkdownJsx from 'markdown-to-jsx'

const PageIntroContent = ({ heading, text, children }) => {
  return (
    <div sx={{ maxWidth: '500px' }}>
      <Styled.h1 sx={{ maxWidth: '370px' }}>{heading}</Styled.h1>
      <MarkdownJsx
        sx={{
          strong: {
            color: 'primary',
            fontWeight: '700',
          },
          em: {
            fontWeight: '700',
          },
        }}
      >
        {text}
      </MarkdownJsx>

      {children}
    </div>
  )
}
PageIntroContent.defaultProps = {
  children: null,
}

PageIntroContent.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default PageIntroContent
