import { GET_PREVIEW }            from '@globals/data'
import { getClient }              from '@globals/data'
import { setCacheHeader }         from '@globals/data'

import { GET_SEVENTH_HEAVEN_SEO } from './data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  let SEO

  setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_SEVENTH_HEAVEN_SEO,
  })

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/contacts-preview/',
    },
  })

  if (seoData) {
    SEO = {
      RU: seoData.pageBy.seo,
      EN: seoData.pageBy.translation.seo,
    }
  } else SEO = { RU: {}, EN: {} }

  const ogCover = previewData?.mediaItemBy.sourceUrl

  return { props: { SEO, ogCover } }
}
