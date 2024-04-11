import { GET_HEADER }            from '@globals/data'
import { GeneralFragmentID }     from '@globals/data'
import { GET_SONG }              from '@globals/data'
import { CourseID }              from '@globals/data'
import { GET_INDIVIDUAL_COURSE } from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { getClient }             from '@globals/data'

export const getStaticProps = async () => {
  const client = getClient()

  const { data: course } = await client.query({
    query: GET_INDIVIDUAL_COURSE,
    variables: { id: CourseID.FEELING_OF_TIME },
  })

  const feelingOfTimeData = course?.individualCourse
  const background = course?.individualCourse?.individualCourseData?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.FEELING_OF_TIME },
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

  const { data: header } = await client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const headerData = header?.generalFragment?.header

  return { props: { SEO, feelingOfTimeData, background, songUrl, headerData }, revalidate: 3600 }
}
