import { initializeApollo } from '@globals/data'
import { setCacheHeader }   from '@globals/data'
import { GET_SEO }          from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: 'cG9zdDo0OTc=' }
  })

  const SEO = {
    ...seoData?.page.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO } }
}
