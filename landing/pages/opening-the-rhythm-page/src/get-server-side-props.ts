import { GET_OPENING_THE_RHYTHM }            from '@globals/data'
import { CourseID }              from '@globals/data'

import { GET_SEO }               from '@globals/data'
import { initializeApollo }      from '@globals/data'
import { setCacheHeader }        from '@globals/data'
import { addApolloState }        from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const { data } = await client.query({
    query: GET_OPENING_THE_RHYTHM,
    variables: { id: CourseID.OPENING_RHYTHM },
  })

    const openingTheRhythm = data?.course?.content
    const background = data?.course?.content?.background

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: CourseID.OPENING_RHYTHM },
  })

  const SEO = {
    ...seoData?.page?.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, { props: { SEO,background,openingTheRhythm } })
}
