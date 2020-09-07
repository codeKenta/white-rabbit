// datoCmsStartPage(locale: {eq: "en"}) {
//     introText
//     locale
//   }

// https://medium.com/datocms/static-multi-language-personal-site-with-gatsby-datocms-and-netlify-4be06118a57e

const path = require(`path`)

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const localesLabels = {
    en: 'en',
    sv: 'sv',
  }

  const locales = [localesLabels.sv, localesLabels.en]

  locales.forEach((locale) => {
    const prefix = locale === localesLabels.sv ? '' : `/${locale}`
    createPage({
      path: `${prefix}/portfolio`,
      component: path.resolve(`./src/templates/index.js`),
      context: { locale },
    })
  })

  await Promise.all(
    locales.map(async (locale) => {
      await graphql(`
        {
          index: datoCmsStartPage(locale: { eq: "${locale}" }) {
            locale
            slug
          }
          events: datoCmsEventsPage(locale: { eq: "${locale}" }) {
            locale
            slug
          }
          discussion: datoCmsDiscussionPage(locale: { eq: "${locale}" }) {
            locale
            slug
          },
          guide: datoCmsGuidePage(locale: { eq: "${locale}" }) {
            locale
            slug
          },
          contact: datoCmsContactPage(locale: { eq: "${locale}" }) {
            locale
            slug
          }
        }
      `).then((result) => {
        let templates = ['index', 'discussion', 'events', 'guide', 'contact']

        templates.forEach((template) => {
          let page = result.data[template]

          // TODO Page.locale is undefiend ?
          console.log('PAGE', page)

          const prefix =
            page.locale === localesLabels.sv ? '' : `/${page.locale}`
          let slug = template === 'index' ? '' : page.slug
          createPage({
            path: `${prefix}/${slug}`,
            component: path.resolve(`./src/templates/${template}.js`),
            context: { locale: page.locale },
          })
        })
      })
    })
  )
}

// https://medium.com/datocms/static-multi-language-personal-site-with-gatsby-datocms-and-netlify-4be06118a57e
