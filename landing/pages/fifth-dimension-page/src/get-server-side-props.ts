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
    variables: { id: CourseID.FIFTH_DIMENSION },
  })

  const fifthDimensionData = course?.individualCourse
  const background = course?.individualCourse?.individualCourseData?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.FIFTH_DIMENSION },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return { props: { SEO, fifthDimensionData, background } }
}
