import { GET_INDIVIDUAL_COURSE } from '@globals/data'
import { CourseID }              from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { initializeApollo }      from '@globals/data'
import { setCacheHeader }        from '@globals/data'
import { addApolloState }        from '@globals/data'

export const getServerSideProps = async ({ res }) => {
  const client = initializeApollo({})

  setCacheHeader(res, 3600, 300)

  const course = client.query({
    query: GET_INDIVIDUAL_COURSE,
    variables: { id: CourseID.OPENING_RHYTHM },
  })

  await Promise.allSettled([course])

  const { data: seoData } = await client.query({
    query: GET_SEO,
    variables: { id: PageID.OPENING_RHYTHM },
  })

  const SEO = {
    ...seoData?.page.seo,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, { props: { SEO } })
}
