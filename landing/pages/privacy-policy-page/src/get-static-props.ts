import { GET_FOOTER }         from '@globals/data'
import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { GET_PRIVACY_POLICY } from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { getClient }          from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_PRIVACY_POLICY,
    variables: { id: GeneralFragmentID.PRIVACY_POLICY },
  })

  const privacyPolicy = data?.generalFragment?.privacyPolicy

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.PRIVACY_POLICY },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
  }
  const { data: header } = await client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const headerData = header?.generalFragment?.header

  const { data: footerContent } = await client.query({
    query: GET_FOOTER,
    variables: { id: GeneralFragmentID.FOOTER },
  })
  const footerData = footerContent?.generalFragment?.footer

  return { props: { footerData, SEO, privacyPolicy, headerData }, revalidate: 3600 }
}
