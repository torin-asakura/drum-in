import { GeneralFragmentID }  from '@globals/data'
import { GET_PRIVACY_POLICY } from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { getClient }          from '@globals/data'
import { setCacheHeader }     from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)
  const { data } = await client.query({
    query: GET_PRIVACY_POLICY,
    variables: { id: GeneralFragmentID.PRIVACY_POLICY },
  })

  const privacyPolicy = data?.generalFragment?.privacyPolicy

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.INDEX },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
  }

  return { props: { SEO, privacyPolicy } }
}
