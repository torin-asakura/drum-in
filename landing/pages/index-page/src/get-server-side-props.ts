import { GET_MAIN_PAGE }  from '@globals/data'
import { PageID }         from '@globals/data'
import { GET_SEO }        from '@globals/data'
import { getClient }      from '@globals/data'
import { setCacheHeader } from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)

  const { data } = await client.query({
    query: GET_MAIN_PAGE,
  })

  const mainPageData = data?.generalFragments?.nodes[0].commonFragments?.main
  const background = data?.generalFragments?.nodes[0].commonFragments?.main?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.INDEX },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO, mainPageData, background } }
}
