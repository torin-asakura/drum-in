/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { MediaUrl }           from '@globals/data'
import { GET_CONTRACT_OFFER } from '@globals/data'
import { GET_FOOTER }         from '@globals/data'
import { GET_HEADER }         from '@globals/data'
import { GeneralFragmentID }  from '@globals/data'
import { PageID }             from '@globals/data'
import { GET_SEO }            from '@globals/data'
import { initializeApollo }   from '@globals/data'
import { addApolloState }     from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoData, header, footerContent, contractOfferContent

  const seoPromise = client.query({
    query: GET_SEO,
    variables: {
      id: PageID.CONTRACT_OFFER,
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

  const contractOfferPromise = client.query({
    query: GET_CONTRACT_OFFER,
    variables: { id: GeneralFragmentID.CONTRACT_OFFER },
  })

  ;[seoData, header, contractOfferContent, footerContent] = await Promise.allSettled([
    seoPromise,
    headerPromise,
    contractOfferPromise,
    footerPromise,
  ])

  const footerData = footerContent?.value?.data?.footer || null
  const headerData = header?.value?.data?.generalFragment?.header || null
  const contractOfferData =
    contractOfferContent?.value?.data?.generalFragment?.contractOffer || null
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
      contractOfferData,
      footerData,
      SEO,
      headerData,
    },
    revalidate: 3600,
  })
}
