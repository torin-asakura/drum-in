import React        from 'react'
import { FC }       from 'react'
import { Helmet }   from 'react-helmet'

import { useSeo }   from '@globals/data'

import { SeoProps } from './seo.interfaces'

export const Seo: FC<SeoProps> = ({ id }) => {
  const seo = useSeo(id)

  if (!seo) return null

  return (
    // @ts-ignore null check
    <Helmet
      title={seo.title}
      meta={[
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