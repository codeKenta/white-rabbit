/** @jsx jsx */

// import { graphql, useStaticQuery } from "gatsby"

import React from 'react'
import PropTypes from 'prop-types'
import { Heading, jsx, Styled, Flex, Box } from 'theme-ui'

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
  const styles = {
    hero: {
      backgroundSize: 'cover',
      minHeight: '100vh',
      width: '100%',
    },
    introText: {
      maxWidth: '500px',
      em: {
        color: 'secondaryContrast',
      },
    },
    firstSection: {
      backgroundColor: 'primaryBackground',
      py: 4,
    },
    firstSectionTextWrapper: {
      maxWidth: '500px',
    },
    firstSectionText: {
      strong: {
        color: 'secondaryContrast',
        fontWeight: '700',
      },
    },
  }

  return (
    <>
      {/* <Seo description={seoDescription} pathname={url} title={title} /> */}
      <BackgroundImage
        sx={{
          backgroundSize: 'cover',
          height: '100vh',
          minHeight: '90vh',
          width: '100%',
        }}
        Tag='div'
        fluid={heroImage.fluid}
      >
        <div sx={{ minHeight: '90vh' }}>
          <PageContentWrapper>
            <MarkdownJsx sx={styles.introText}>{introText}</MarkdownJsx>
          </PageContentWrapper>
        </div>

        <section sx={styles.firstSection}>
          <PageContentWrapper>
            <Flex sx={{ justifyContent: 'space-between' }}>
              <Box>Image here?</Box>
              <Box sx={styles.firstSectionTextWrapper}>
                <Styled.h2>{firstSectionTitle}</Styled.h2>
                <MarkdownJsx sx={styles.firstSectionText}>
                  {firstSectionText}
                </MarkdownJsx>
              </Box>
            </Flex>
          </PageContentWrapper>
        </section>
      </BackgroundImage>
      <div></div>
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
