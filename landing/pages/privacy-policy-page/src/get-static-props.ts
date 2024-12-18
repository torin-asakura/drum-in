/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { MediaUrl }           from '@globals/data'
import { GET_FOOTER }         from '@globals/data'
import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { GET_PRIVACY_POLICY } from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { initializeApollo }   from '@globals/data'
import { addApolloState }     from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoData, header, footerContent, privacyPolicyContent

  const seoPromise = client.query({
    query: GET_SEO,
    variables: {
      id: PageID.PRIVACY_POLICY,
      uriDefaultIcon: MediaUrl.DEFAULT_ICON,
      uriAppleIcon: MediaUrl.APPLE_ICON,
    },
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

  ;[seoData, header, privacyPolicyContent, footerContent] = await Promise.allSettled([
    seoPromise,
    headerPromise,
    privacyPolicyPromise,
    footerPromise,
  ])

  const footerData = footerContent?.value?.data?.footer || null
  const headerData = header?.value?.data?.generalFragment?.header || null
  const privacyPolicyData =
    privacyPolicyContent?.value?.data?.generalFragment?.privacyPolicy || null
  const SEO = {
    ...(seoData?.value.data?.page?.seo || null),
    lightThemeIcon: '/drum-in__favicon_dark.png',
    darkThemeIcon: '/drum-in__favicon_light.png',
    appleIcon: '/drum-in__favicon_apple-touch-icon.png',
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
