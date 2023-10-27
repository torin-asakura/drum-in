import React      from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ SEO }) => (
  <Helmet
    title={SEO.title}
    meta={[
      {
        name: 'keywords',
        content: SEO.focuskw,
      },
      {
        name: 'description',
        content: SEO.metaDesc,
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
        property: 'article:modified_time',
        content: SEO.opengraphModifiedTime,
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ]}
  />
)

export { Seo }
