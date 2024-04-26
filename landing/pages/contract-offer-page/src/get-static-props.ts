import { GET_FOOTER }         from '@globals/data'
import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_CONTRACT_OFFER } from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { getClient }          from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

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

  const {data:footerContent} = await client.query({query:GET_FOOTER,variables:{id:GeneralFragmentID.FOOTER}})
  const footerData = footerContent?.generalFragment?.footer

  return { props: { footerData, SEO, contractOfferData, headerData }, revalidate: 3600 }
}
