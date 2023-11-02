import React      from 'react'
import { Helmet } from 'react-helmet'

const Seo = ({ SEO }) => {
  const {
    width: ogImageWidth,
    height: ogImageHeight,
    sourceUrl: ogCover,
  } = SEO.opengraphImage.mediaDetails.sizes.find((img) => img.name === 'large')

  return (
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
          content: ogCover,
        },
        {
          property: 'og:image:width',
          content: ogImageWidth,
        },
        {
          property: 'og:image:height',
          content: ogImageHeight,
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
          content: SEO.twitterImage.sourceUrl,
        },
      ]}
    />
  )
}

export { Seo }
