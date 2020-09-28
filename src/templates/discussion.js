/** @jsx jsx */

import PropTypes from 'prop-types'

import { jsx, Styled, Checkbox, Label, Input, Button } from 'theme-ui'
// import Seo from "../components/Seo"
import PageContentWrapper from '@components/PageContentWrapper'
import PageContentWithPlatform from '@components/PageContentWithPlatform'
import PageIntroContent from '@components/PageIntroContent'
import { platformTypes } from '@utils'
import { useColors } from '@hooks/useColors'

const DiscussionPage = ({
  data: {
    content: {
      heading,
      text,
      eMailFormLabel,
      acceptTermText1,
      acceptTermText2,
      acceptTerm2LinkText,
      sendButtonText,
      platformLinkText,
      platformLinkUrl,
    },
  },
}) => {
  const colors = useColors()
  return (
    <PageContentWithPlatform
      platformType={platformTypes.discord}
      platformLinkText={platformLinkText}
      platformLinkUrl={platformLinkUrl}
    >
      <PageContentWrapper addPaddingY>
        <PageIntroContent heading={heading} text={text}>
          <form>
            <div sx={{ display: 'flex', alignContent: 'center' }}>
              <Checkbox id='term1' name='code-of-conduct' />
              <Label for='term1'>{acceptTermText1} </Label>
            </div>

            <div sx={{ display: 'flex', alignContent: 'center' }}>
              <Checkbox id='term2' name='related-to-sweden' />

              <div sx={{ display: 'flex', alignContent: 'center' }}>
                <Label for='term2'>{acceptTermText2}</Label>
                <span
                  sx={{
                    whiteSpace: 'nowrap',
                    fontSize: 2,
                    fontWeight: '700',
                    color: 'tertiaryContrast',
                    marginLeft: '4px',
                    cursor: 'pointer',
                    ':hover': {
                      color: colors.secondaryContrast,
                    },
                  }}
                >
                  {acceptTerm2LinkText}
                </span>
              </div>
            </div>

            <Label
              sx={{ marginTop: ['20px', 4], marginBottom: [3] }}
              for='email'
            >
              {eMailFormLabel}
            </Label>
            <Input sx={{ maxWidth: '400px' }} id='email' type='email' />
            <Button sx={{ marginTop: ['20px', 4], variant: 'primary' }}>
              {sendButtonText}
            </Button>
          </form>
        </PageIntroContent>
      </PageContentWrapper>
    </PageContentWithPlatform>
  )
}

export const query = graphql`
  query GetDiscussionPage($locale: String!) {
    page: datoCmsDiscussionPage(locale: { eq: $locale }) {
      id
      pageTitle
      locale
      slug
    }
    content: datoCmsDiscussionPage(locale: { eq: $locale }) {
      heading
      text
      eMailFormLabel
      acceptTermText1
      acceptTermText2
      acceptTerm2LinkText
      sendButtonText
      platformLinkText
      platformLinkUrl
    }
  }
`

DiscussionPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export default DiscussionPage
