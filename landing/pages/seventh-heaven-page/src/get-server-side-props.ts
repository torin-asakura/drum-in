import { GET_PREVIEW }            from '@globals/data'
import { getClient }              from '@globals/data'
import { setCacheHeader }         from '@globals/data'

import { GET_SEVENTH_HEAVEN_SEO } from './data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)

  const { data: previewData } = await client.query({
    query: GET_PREVIEW,
    variables: {
      uri: '/main-cover/',
    },
  })

  const ogCover = previewData?.mediaItemBy.sourceUrl

  const { data: seoData } = await client.query({
    query: GET_SEVENTH_HEAVEN_SEO,
  })

  const SEO = seoData?.pageContentBy.seo

  return { props: { SEO, ogCover } }
}
