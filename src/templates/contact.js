/** @jsx jsx */

import PropTypes from 'prop-types'

import { jsx, Styled, Input, Label, Textarea, Button } from 'theme-ui'
// import Seo from "../components/Seo"
import PageContentWrapper from '@components/PageContentWrapper'
import PageIntroContent from '@components/PageIntroContent'

const ContactPage = ({
  data: {
    content: {
      heading,
      text,
      eMailFormLabel,
      messageFormLabel,
      sendButtonText,
    },
  },
}) => {
  return (
    <PageContentWrapper addPaddingY>
      <PageIntroContent heading={heading} text={text} />

      <form>
        <Label sx={{ marginTop: ['20px', 4], marginBottom: [3] }} for='email'>
          {eMailFormLabel}
        </Label>
        <Input sx={{ maxWidth: '500px' }} id='email' type='email' />

        <Label sx={{ marginTop: ['20px', 4], marginBottom: [3] }} for='message'>
          {eMailFormLabel}
        </Label>
        <Textarea
          id='message'
          sx={{ maxWidth: '500px', minHeight: '200px', fontSize: [2] }}
        ></Textarea>
        <Button sx={{ marginTop: ['20px', 4], variant: 'primary' }}>
          {sendButtonText}
        </Button>
      </form>
    </PageContentWrapper>
  )
}

export const query = graphql`
  query GetContactPage($locale: String!) {
    page: datoCmsContactPage(locale: { eq: $locale }) {
      id
      pageTitle
      locale
      slug
    }
    content: datoCmsContactPage(locale: { eq: $locale }) {
      heading
      text
      eMailFormLabel
      messageFormLabel
      sendButtonText
    }
  }
`

ContactPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export default ContactPage
