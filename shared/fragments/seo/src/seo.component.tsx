import React               from 'react'
import { FC }              from 'react'
import { Helmet }          from 'react-helmet'

import { OG_IMAGE_HEIGHT } from './seo.constacts'
import { OG_IMAGE_WIDTH }  from './seo.constacts'
import { SeoProps }        from './seo.interfaces'

export const Seo: FC<SeoProps> = ({ seo }) => {
  if (!seo) return null
  return (
    // @ts-ignore null check
    <Helmet
      title={seo.title}
      link={[
        {
          rel: 'icon',
          href: seo.lightThemeIcon,
          media: '(prefers-color-scheme: light)',
        },
        {
          rel: 'icon',
          href: seo.darkThemeIcon,
          media: '(prefers-color-scheme: dark)',
        },
        {
          rel: 'apple-touch-icon',
          href: seo.appleIcon,
        },
      ]}
      meta={[
        {
          property: 'og:image',
          content: seo.opengraphImage?.mediaItemUrl,
        },
        {
          property: 'og:image:width',
          content: OG_IMAGE_WIDTH,
        },
        {
          property: 'og:image:height',
          content: OG_IMAGE_HEIGHT,
        },
        {
          name: 'description',
          content: seo.metaDesc,
        },
        {
          name: 'keywords',
          content: seo.focuskw,
        },
        {
          property: 'og:type',
          content: seo.opengraphType,
        },
        {
          property: 'og:title',
          content: seo.opengraphTitle,
        },
        {
          property: 'og:description',
          content: seo.opengraphDescription,
        },
        {
          property: 'og:url',
          content: seo.opengraphUrl,
        },
        {
          property: 'og:site_name',
          content: seo.opengraphSiteName,
        },
        {
          property: 'article:modified_time',
          content: seo.opengraphModifiedTime,
        },
        {
          name: 'twitter:title',
          content: seo.twitterTitle,
        },
        {
          name: 'twitter:description',
          content: seo.twitterDescription,
        },
      ]}
    />
  )
}
