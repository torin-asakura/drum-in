import { GET_SONG }          from '@globals/data'
import { GeneralFragmentID } from '@globals/data'
import { GET_MAIN_PAGE }     from '@globals/data'
import { PageID }            from '@globals/data'
import { GET_SEO }           from '@globals/data'
import { getClient }         from '@globals/data'
import { setCacheHeader }    from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = getClient()

  setCacheHeader(res, 3600, 300)

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

  const songUrl = songData?.generalFragment?.audio?.song?.node?.mediaItemUrl

  return { props: { SEO, mainPageData, background, songUrl } }
}
