/** @jsx jsx */

// import Seo from "../components/Seo"
import PropTypes from 'prop-types'
import React from 'react'
import { jsx, Styled } from 'theme-ui'
import { useColors } from '@hooks/useColors'
import PageContentWrapper from '@components/PageContentWrapper'
import PageIntroContent from '@components/PageIntroContent'
import Wave from '@components/Wave'
import MarkdownJsx from 'markdown-to-jsx'

const GuidePage = ({
  data: {
    content: { heading, text, articles },
  },
}) => {
  const colors = useColors()

  return (
    <>
      <PageContentWrapper addPaddingY>
        <PageIntroContent heading={heading} text={text} />
      </PageContentWrapper>
      <div sx={{ marginTop: '100px' }}>
        {Array.isArray(articles) && articles.length > 0
          ? articles.map(
              ({ articleHeading, articleIntro, body, id }, index) => {
                const IS_EVEN = index % 2 === 0
                const IS_ODD = index % 2 !== 0

                const IS_NOT_LAST = index < articles.length - 1
                const bg = IS_EVEN
                  ? colors.darkBackground
                  : colors.tertiaryBackground
                console.log(
                  'CECK',
                  IS_EVEN,
                  IS_NOT_LAST,
                  index,
                  articles.length
                )
                return (
                  <>
                    <Styled.div
                      sx={{
                        backgroundColor: bg,
                      }}
                    >
                      <div sx={{ position: 'relative', bottom: '45px' }}>
                        <Wave fillColor={bg} />
                      </div>
                      <PageContentWrapper>
                        <article
                          key={id}
                          sx={{
                            paddingTop: 0,
                            paddingBottom: IS_NOT_LAST
                              ? ['60px', '80px']
                              : [2, null, 5],
                          }}
                        >
                          <Styled.h2 sx={{ color: colors.secondaryContrast }}>
                            {articleHeading}
                          </Styled.h2>
                          <p
                            sx={{
                              fontSize: 4,
                              fontWeight: '700',
                              maxWidth: '800px',
                            }}
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
                    </Styled.div>
                  </>
                )
              }
            )
          : null}
      </div>
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
