import { getClient }               from '@globals/data'
import { setCacheHeader }          from '@globals/data'

import { GET_FIFTH_DIMENSION_SEO } from './data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_FIFTH_DIMENSION_SEO,
  })

  const SEO = {
    ...seoData?.pageContentBy.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO } }
}
