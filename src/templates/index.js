/** @jsx jsx */

import React from 'react'
import PropTypes from 'prop-types'
import { jsx, Styled, Flex, Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { useColors } from '@hooks/useColors'

// import Seo from "../components/Seo"
import BackgroundImage from 'gatsby-background-image'
import PageContentWrapper from '@components/PageContentWrapper'
import MarkdownJsx from 'markdown-to-jsx'

const IndexPage = ({
  data: {
    content: { introText, firstSectionText, firstSectionTitle },
    hero: { heroImage },
  },
}) => {
  const colors = useColors()

  return (
    <>
      {/* <Seo description={seoDescription} pathname={url} title={title} /> */}
      <BackgroundImage
        sx={{
          backgroundSize: 'cover',
          height: '100vh',
          width: '100%',
        }}
        Tag='div'
        fluid={heroImage.fluid}
      >
        <div
          sx={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            backgroundColor: alpha(colors.background, 0.8),
          }}
        >
          <PageContentWrapper>
            <MarkdownJsx
              sx={{
                position: 'relative',
                bottom: '50px',
                maxWidth: '500px',
                em: {
                  color: colors.secondaryContrast,
                },
              }}
            >
              {introText}
            </MarkdownJsx>
          </PageContentWrapper>
        </div>
      </BackgroundImage>

      <section
        sx={{
          backgroundColor: colors.background,
          py: [4, null, 5],
        }}
      >
        <PageContentWrapper>
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Box>Image here?</Box>
            <Box
              sx={{
                maxWidth: '500px',
              }}
            >
              <Styled.h2>{firstSectionTitle}</Styled.h2>
              <MarkdownJsx
                sx={{
                  strong: {
                    color: colors.secondaryContrast,
                    fontWeight: '700',
                  },
                }}
              >
                {firstSectionText}
              </MarkdownJsx>
            </Box>
          </Flex>
        </PageContentWrapper>
      </section>
    </>
  )
}

export const query = graphql`
  query GetAboutPage($locale: String!) {
    page: datoCmsStartPage(locale: { eq: $locale }) {
      id
      pageTitle
      locale
      slug
    }
    hero: datoCmsStartPage(locale: { eq: $locale }) {
      heroImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    content: datoCmsStartPage(locale: { eq: $locale }) {
      introText
      firstSectionText
      firstSectionTitle
    }
  }
`

IndexPage.propTypes = {
  data: PropTypes.any.isRequired,
}

export default IndexPage
