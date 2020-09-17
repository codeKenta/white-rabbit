/** @jsx jsx */

import PropTypes from 'prop-types'

import { jsx, Styled } from 'theme-ui'
// import Seo from "../components/Seo"
import PageContentWrapper from '@components/PageContentWrapper'
import PageContentWithPlatform from '@components/PageContentWithPlatform'
import PageIntroContent from '@components/PageIntroContent'
import { platformTypes } from '@utils'

const EventsPage = ({
  data: {
    content: { heading, text, platformLinkText, platformLinkUrl },
  },
}) => {
  return (
    <PageContentWithPlatform
      platformType={platformTypes.meetup}
      platformLinkText={platformLinkText}
      platformLinkUrl={platformLinkUrl}
    >
      <PageContentWrapper addPaddingY>
        <PageIntroContent heading={heading} text={text} />
      </PageContentWrapper>
    </PageContentWithPlatform>
  )
}

export const query = graphql`
  query GetEventsPage($locale: String!) {
    page: datoCmsEventsPage(locale: { eq: $locale }) {
      id
      pageTitle
      locale
      slug
    }
    content: datoCmsEventsPage(locale: { eq: $locale }) {
      heading
      text
      platformLinkText
      platformLinkUrl
    }
  }
`

EventsPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export default EventsPage
