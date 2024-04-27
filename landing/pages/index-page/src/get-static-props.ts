import { GET_FOOTER }        from '@globals/data'
import { GET_CONSULTATION }  from '@globals/data'
import { GET_FAQ }           from '@globals/data'
import { GET_TEACHER }       from '@globals/data'
import { GET_HEADER }        from '@globals/data'
import { GET_SONG }          from '@globals/data'
import { GeneralFragmentID } from '@globals/data'
import { GET_MAIN_PAGE }     from '@globals/data'
import { PageID }            from '@globals/data'
import { GET_SEO }           from '@globals/data'
import { getClient }         from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  const { data } = await client.query({
    query: GET_MAIN_PAGE,
    variables: { id: GeneralFragmentID.MAIN },
  })

  const mainPageData = data?.generalFragment?.main
  const background = data?.generalFragment?.main?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.INDEX },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  const { data: songData } = await client.query({
    query: GET_SONG,
    variables: { id: GeneralFragmentID.SONG },
  })

  const { data: header } = await client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const { data: teacherContent } = await client.query({
    query: GET_TEACHER,
    variables: { id: GeneralFragmentID.TEACHER },
  })
  const teacherData = teacherContent?.generalFragment?.teacher

  const { data: faqContent } = await client.query({
    query: GET_FAQ,
    variables: { id: GeneralFragmentID.FAQ },
  })
  const faqData = faqContent?.generalFragment?.faq?.content

  const { data: consultationContent } = await client.query({
    query: GET_CONSULTATION,
    variables: { id: GeneralFragmentID.CONSULTATION },
  })
  const consultationData = consultationContent?.generalFragment?.consultation

  const { data: footerContent } = await client.query({
    query: GET_FOOTER,
    variables: { id: GeneralFragmentID.FOOTER },
  })
  const footerData = footerContent?.generalFragment?.footer

  const headerData = header?.generalFragment?.header

  const songUrl = songData?.generalFragment?.audio?.song?.node?.mediaItemUrl

  return {
    props: {
      faqData,
      consultationData,
      footerData,
      teacherData,
      SEO,
      mainPageData,
      background,
      headerData,
      songUrl,
    },
    revalidate: 3600,
  }
}
