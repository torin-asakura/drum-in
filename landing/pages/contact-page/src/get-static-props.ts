/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { GET_FOOTER }        from '@globals/data'
import { GET_HEADER }        from '@globals/data'
import { GeneralFragmentID } from '@globals/data'
import { GET_CONTACTS }      from '@globals/data'
import { PageID }            from '@globals/data'
import { GET_SEO }           from '@globals/data'
import { initializeApollo }  from '@globals/data'
import { addApolloState }    from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoData, header, footerContent, contactsContent

  const seoPromise = client.query({
    query: GET_SEO,
    variables: { id: PageID.CONTACT },
  })

  const headerPromise = client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const footerPromise = client.query({
    query: GET_FOOTER,
    variables: { id: GeneralFragmentID.FOOTER },
  })

  const contactsPromise = client.query({
    query: GET_CONTACTS,
    variables: { id: GeneralFragmentID.CONTACTS },
  })

  ;[seoData, header, contactsContent, footerContent] = await Promise.allSettled([
    seoPromise,
    headerPromise,
    contactsPromise,
    footerPromise,
  ])

  const footerData = footerContent?.value?.data?.footer || null
  const headerData = header?.value?.data?.generalFragment?.header || null
  const contactsData = contactsContent?.value?.data?.generalFragment?.contacts || null
  const SEO = {
    ...seoData?.value?.data?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, {
    props: {
      contactsData,
      footerData,
      SEO,
      headerData,
    },
    revalidate: 3600,
  })
}
