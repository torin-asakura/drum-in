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

  const headerData = header?.generalFragment?.header

  const songUrl = songData?.generalFragment?.audio?.song?.node?.mediaItemUrl

  return { props: { SEO, mainPageData, background, headerData, songUrl }, revalidate: 3600 }
}
