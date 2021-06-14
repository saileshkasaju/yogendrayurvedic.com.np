/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, meta, title, image, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  // const webURL = withPrefix('/');
  const webURL = site.siteMetadata.siteUrl;
  const ogImage = `${webURL}${image || '/img/og-image.jpg'}`;

  return (
    <Helmet
      htmlAttributes={{
        // fix html lang attribute
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'theme-color',
          content: '#58B856',
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: 'og:type',
          content: 'business.business',
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: 'og:url',
          content: webURL,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:image:src`,
          content: ogImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}>
      <link rel="apple-touch-icon" sizes="180x180" href={`${webURL}/img/apple-touch-icon.png`} />
      <link rel="icon" type="image/png" href={`${webURL}/img/favicon-32x32.png`} sizes="32x32" />
      <link rel="icon" type="image/png" href={`${webURL}/img/favicon-16x16.png`} sizes="16x16" />
      <link rel="mask-icon" href={`${webURL}/img/safari-pinned-tab.svg`} color="#ff4400" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
