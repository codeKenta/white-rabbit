/** @jsx jsx */

import PropTypes from 'prop-types'
import React from 'react'
import { jsx, Styled } from 'theme-ui'
// import Seo from "../components/Seo"
import PageContentWrapper from '@components/PageContentWrapper'
import PageIntroContent from '@components/PageIntroContent'
import Wave from '@components/Wave'
import MarkdownJsx from 'markdown-to-jsx'

const GuidePage = ({
  data: {
    content: { heading, text, articles },
  },
}) => {
  return (
    <>
      <PageContentWrapper addPaddingY>
        <PageIntroContent heading={heading} text={text} />
      </PageContentWrapper>
      {Array.isArray(articles) && articles.length > 0
        ? articles.map(({ articleHeading, articleIntro, body, id }, index) => (
            <>
              <Wave fillColor={index % 2 == 0 ? '#05052A ' : '#202040'} />
              <div
                sx={{
                  backgroundColor:
                    index % 2 == 0 ? 'darkBackground' : 'background',
                }}
              >
                <PageContentWrapper>
                  <article key={id} sx={{ py: [2, null, 5] }}>
                    <Styled.h2 sx={{ color: 'secondaryContrast' }}>
                      {articleHeading}
                    </Styled.h2>
                    <p
                      sx={{ fontSize: 4, fontWeight: '700', maxWidth: '800px' }}
                    >
                      {articleIntro}
                    </p>
                    <MarkdownJsx
                      sx={{
                        h3: {
                          marginBottom: 0,
                        },
                        'h3 + p': {
                          marginTop: 1,
                        },
                        h4: {
                          mx: 4,
                          marginBottom: 0,
                        },
                        'h4 + p': {
                          mx: 4,
                          marginTop: 1,
                        },
                        'h4 + p + p': {
                          mx: 4,
                        },
                        'h4 + p + p + p': {
                          mx: 4,
                        },
                      }}
                    >
                      {body}
                    </MarkdownJsx>
                  </article>
                </PageContentWrapper>
              </div>
            </>
          ))
        : null}
    </>
  )
}

export const query = graphql`
  query GetGuidePage($locale: String!) {
    page: datoCmsGuidePage(locale: { eq: $locale }) {
      id
      pageTitle
      locale
      slug
    }
    content: datoCmsGuidePage(locale: { eq: $locale }) {
      heading
      text

      articles {
        body
        articleHeading: heading
        articleIntro: intro
        id
      }
    }
  }
`

GuidePage.propTypes = {
  data: PropTypes.any.isRequired,
}

export default GuidePage
