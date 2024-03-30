import { PageID }             from '@globals/data'
import { GET_CONTRACT_OFFER } from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { initializeApollo }   from '@globals/data'
import { setCacheHeader }     from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const { data } = await client.query({ query: GET_CONTRACT_OFFER })

  const contractOfferData = data?.generalFragments?.nodes[0].commonFragments?.contractOffer

  /* TODO: change PageID to contract */

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.CONTACT },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO, contractOfferData } }
}
