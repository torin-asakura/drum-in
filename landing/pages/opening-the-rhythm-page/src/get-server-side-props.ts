import { GET_PREVIEW }                from '@globals/data'
import { getClient }                  from '@globals/data'
import { setCacheHeader }             from '@globals/data'

import { GET_OPENING_THE_RHYTHM_SEO } from './data'

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
    query: GET_OPENING_THE_RHYTHM_SEO,
  })

  const SEO = {
    ...seoData?.pageContentBy.seo,
    ogCover,
    ogLocale: 'ru_RU',
    ogImageWidth: '1024',
    ogImageHeight: '621',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO } }
}
