import { GET_FOOTER }        from '@globals/data'
import { GET_HEADER }        from '@globals/data'
import { GeneralFragmentID } from '@globals/data'
import { GET_CONTACTS }      from '@globals/data'
import { PageID }            from '@globals/data'
import { GET_SEO }           from '@globals/data'
import { getClient }         from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_CONTACTS,
    variables: { id: GeneralFragmentID.CONTACTS },
  })

  const contactsData = data?.generalFragment?.contacts

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.CONTACT },
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

  const { data: footerContent } = await client.query({
    query: GET_FOOTER,
    variables: { id: GeneralFragmentID.FOOTER },
  })
  const footerData = footerContent?.generalFragment?.footer

  return { props: { footerData, SEO, contactsData, headerData }, revalidate: 3600 }
}
