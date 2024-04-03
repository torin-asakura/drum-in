import { GeneralFragmentID }     from '@globals/data'
import { GET_SONG }              from '@globals/data'
import { CourseID }              from '@globals/data'
import { GET_INDIVIDUAL_COURSE } from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { initializeApollo }      from '@globals/data'
import { setCacheHeader }        from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const { data } = await client.query({
    query: GET_INDIVIDUAL_COURSE,
    variables: { id: CourseID.CONNACOL },
  })

  const connacolData = data?.individualCourse
  const background = data?.individualCourse?.individualCourseData?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.CONNACOL },
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

  return { props: { SEO, connacolData, background, songUrl } }
}
