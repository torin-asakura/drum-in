import { initializeApollo } from '@globals/data'
import { setCacheHeader }   from '@globals/data'
import { GET_SEO }          from '@globals/data'
import { addApolloState }   from '@globals/data'
import { GET_HERO }         from '@landing/hero-opening-the-rhythm-fragment'
import { GET_BANNER }       from '@landing/hero-opening-the-rhythm-fragment'
import { GET_PRICE }        from '@landing/price-opening-the-rhythm-fragment'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const banner = client.query({ query: GET_BANNER })
  const data = client.query({ query: GET_HERO })
  const price = client.query({ query: GET_PRICE })

  await Promise.allSettled([banner, data, price])

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: 'cG9zdDo0OTc=' },
  })

  const SEO = {
    ...seoData?.page.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, { props: { SEO } })
}
