// import React from 'react';
// import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
// import { useStaticQuery, graphql } from 'gatsby';

// import { arrayCheck } from '@utils';

// import useLocaleContext from '@hooks/useLocaleContext';

// export default function SEO({ article, description, image, pathname, title }) {
//   const { locale } = useLocaleContext();
//   const {
//     site: {
//       siteMetadata: {
//         defaultTitle,
//         titleTemplate,
//         defaultDescription,
//         siteUrl,
//       },
//     },
//   } = useStaticQuery(
//     graphql`
//       query SEO {
//         site {
//           siteMetadata {
//             defaultTitle: title
//             titleTemplate
//             defaultDescription: description
//             siteUrl
//           }
//         }
//       }
//     `
//   );

//   const seo = {
//     description: description || defaultDescription,
//     image: image || null,
//     title: title || defaultTitle,
//     url: `${siteUrl}${pathname || '/'}`,
//   };

//   return (
//     <>
//       <Helmet
//         htmlAttributes={{ lang: locale.split('-')[0] }}
//         title={seo.title}
//         titleTemplate={titleTemplate}
//       >
//         <meta
//           content={
//             arrayCheck(seo.description)
//               ? seo.description.join(' ')
//               : seo.description
//           }
//           name="description"
//         />
//         <meta content={seo.image} name="image" />
//         {seo.url && <meta content={seo.url} property="og:url" />}
//         {(article ? true : null) && (
//           <meta content="article" property="og:type" />
//         )}
//         {seo.title && <meta content={seo.title} property="og:title" />}
//         {seo.description && (
//           <meta content={seo.description} property="og:description" />
//         )}
//         {seo.image && <meta content={seo.image} property="og:image" />}
//         <meta content="summary_large_image" name="twitter:card" />
//         {seo.title && <meta content={seo.title} name="twitter:title" />}
//         {seo.description && (
//           <meta content={seo.description} name="twitter:description" />
//         )}
//         {seo.image && <meta content={seo.image} name="twitter:image" />}
//       </Helmet>
//     </>
//   );
// }

// SEO.propTypes = {
//   article: PropTypes.bool,
//   description: PropTypes.any,
//   image: PropTypes.string,
//   pathname: PropTypes.string,
//   title: PropTypes.string,
// };

// SEO.defaultProps = {
//   article: false,
//   description: null,
//   image: null,
//   pathname: null,
//   title: null,
// };
