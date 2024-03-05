import { PageID }         from '@globals/data'
import { GET_SEO }        from '@globals/data'
import { getClient }      from '@globals/data'
import { setCacheHeader } from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.SEVENTH_HEAVEN },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO } }
}
