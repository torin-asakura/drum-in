import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_CONTRACT_OFFER } from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { initializeApollo }   from '@globals/data'
import { setCacheHeader }     from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const { data } = await client.query({
    query: GET_CONTRACT_OFFER,
    variables: { id: GeneralFragmentID.CONTRACT_OFFER },
  })
  const contractOfferData = data?.generalFragment?.contractOffer

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.CONTRACT_OFFER },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  const { data: header } = await client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const headerData = header?.generalFragment?.header

  return { props: { SEO, contractOfferData,headerData } }
}
