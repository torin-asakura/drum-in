import { CourseID }              from '@globals/data'
import { GET_INDIVIDUAL_COURSE } from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { initializeApollo }      from '@globals/data'
import { setCacheHeader }        from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

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

  return { props: { SEO, feelingOfTimeData, background } }
}
