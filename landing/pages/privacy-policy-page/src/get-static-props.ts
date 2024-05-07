/* eslint-disable one-var */

import { GET_FOOTER }         from '@globals/data'
import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { GET_PRIVACY_POLICY } from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { useApolloOnServer }     from '@globals/data'
import { addApolloState }        from '@globals/data'

export const getStaticProps = async () => {
  const client = useApolloOnServer({})

  let
    seoData,
    header,
    footerContent,
    privacyPolicyContent

  try {


    const seoPromise = client.query({
      query: GET_SEO,
      variables: { id: PageID.PRIVACY_POLICY },
    })

    const headerPromise = client.query({
      query: GET_HEADER,
      variables: { id: GeneralFragmentID.HEADER },
    })

    const footerPromise = client.query({
      query: GET_FOOTER,
      variables: { id: GeneralFragmentID.FOOTER },
    })

    const privacyPolicyPromise = client.query({
            query: GET_PRIVACY_POLICY,
            variables: { id: GeneralFragmentID.PRIVACY_POLICY },
          })


    ;[
      seoData,
      header,
      privacyPolicyContent,
      footerContent,
    ] = await Promise.allSettled([
      seoPromise,
      headerPromise,
      privacyPolicyPromise,
      footerPromise,
    ])
  } catch (err) {}

  const footerData = footerContent?.value?.data?.footer || null
  const headerData = header?.value?.data?.generalFragment?.header || null
  const privacyPolicyData = privacyPolicyContent?.value?.data?.generalFragment?.privacyPolicy || null
  const SEO = {
    ...seoData?.value?.data?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, {
    props: {
      privacyPolicyData,
      footerData,
      SEO,
      headerData,
    },
    revalidate: 3600,
  })
}
