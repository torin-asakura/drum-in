import { FormID }                from '@globals/data'
import { GET_CONSULTATION_FORM } from '@globals/data'
import { GET_CONSULTATION }      from '@globals/data'
import { GET_FOOTER }            from '@globals/data'
import { GET_HEADER }            from '@globals/data'
import { GeneralFragmentID }     from '@globals/data'
import { GET_PRIVACY_POLICY }    from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { getClient }             from '@globals/data'

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

  const { data: consultationContent } = await client.query({
    query: GET_CONSULTATION,
    variables: { id: GeneralFragmentID.CONSULTATION },
  })
  const consultationData = consultationContent?.generalFragment?.consultation

  const { data: consultationFormContent } = await client.query({
    query: GET_CONSULTATION_FORM,
    variables: { id: FormID.consultation.id },
  })
  const consultationFormData = consultationFormContent?.form

  return {
    props: { footerData, SEO, privacyPolicy, headerData, consultationData, consultationFormData },
    revalidate: 3600,
  }
}
