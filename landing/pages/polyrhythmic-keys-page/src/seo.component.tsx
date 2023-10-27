import React      from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ SEO, ogCover }) => (
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
        content: 'ru_RU',
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
        content: ogCover,
      },
      {
        property: 'og:image:width',
        content: '1024',
      },
      {
        property: 'og:image:height',
        content: '621',
      },
      {
        property: 'article:modified_time',
        content: SEO.opengraphModifiedTime,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
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
        content: ogCover,
      },
    ]}
  />
)

export { Seo }
