import React      from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ SEO }) => (
  <Helmet
    title={SEO.title}
    meta={[
      {
        name: 'description',
        content: SEO.metaDesc,
      },
      {
        name: 'keywords',
        content: SEO.focuskw,
      },
      {
        property: 'og:locale',
        content: SEO.ogLocale,
      },
      {
        property: 'og:type',
        content: SEO.opengraphType,
      },
      {
        property: 'og:title',
        content: SEO.opengraphTitle,
      },
      {
        property: 'og:description',
        content: SEO.opengraphDescription,
      },
      {
        property: 'og:url',
        content: SEO.opengraphUrl,
      },
      {
        property: 'og:site_name',
        content: SEO.opengraphSiteName,
      },
      {
        property: 'og:image',
        content: SEO.ogCover,
      },
      {
        property: 'og:image:width',
        content: SEO.ogImageWidth,
      },
      {
        property: 'og:image:height',
        content: SEO.ogImageHeight,
      },
      {
        property: 'article:modified_time',
        content: SEO.opengraphModifiedTime,
      },
      {
        name: 'twitter:card',
        content: SEO.twitterCard,
      },
      {
        name: 'twitter:title',
        content: SEO.twitterTitle,
      },
      {
        name: 'twitter:description',
        content: SEO.twitterDescription,
      },
      {
        name: 'twitter:image',
        content: SEO.ogCover,
      },
    ]}
  />
)

export { Seo }
