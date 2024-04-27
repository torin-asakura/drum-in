import { FormID }                from '@globals/data'
import { GET_CONSULTATION_FORM } from '@globals/data'
import { GET_PROCESS_EDUCATION } from '@globals/data'
import { GET_FOOTER }            from '@globals/data'
import { GET_CONSULTATION }      from '@globals/data'
import { GET_FAQ }               from '@globals/data'
import { GET_TEACHER }           from '@globals/data'
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

  const { data: header } = await client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const headerData = header?.generalFragment?.header

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

  const { data: processContent } = await client.query({
    query: GET_PROCESS_EDUCATION,
    variables: { id: GeneralFragmentID.PROCESS },
  })
  const processData = processContent?.generalFragment?.learningProcess

  const { data: consultationFormContent } = await client.query({
    query: GET_CONSULTATION_FORM,
    variables: { id: FormID.consultation.id },
  })
  const consultationFormData = consultationFormContent?.form

  return {
    props: {
      faqData,
      consultationData,
      consultationFormData,
      footerData,
      teacherData,
      processData,
      SEO,
      connacolData,
      background,
      songUrl,
      headerData,
    },
    revalidate: 3600,
  }
}
