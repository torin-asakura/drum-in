/* eslint-disable one-var */
/* eslint-disable prefer-const */

import { MediaUrl }              from '@globals/data'
import { GET_MAIN_PAGE }         from '@globals/data'
import { GET_STUDENTS }          from '@globals/data'
import { FormID }                from '@globals/data'
import { GET_CONSULTATION_FORM } from '@globals/data'
import { GET_FOOTER }            from '@globals/data'
import { GET_CONSULTATION }      from '@globals/data'
import { GET_FAQ }               from '@globals/data'
import { GET_TEACHER }           from '@globals/data'
import { GET_HEADER }            from '@globals/data'
import { GeneralFragmentID }     from '@globals/data'
import { GET_SONG }              from '@globals/data'
import { PageID }                from '@globals/data'
import { GET_SEO }               from '@globals/data'
import { initializeApollo }      from '@globals/data'
import { addApolloState }        from '@globals/data'

export const getStaticProps = async () => {
  const client = initializeApollo({})

  let seoData,
    songData,
    header,
    teacherContent,
    faqContent,
    consultationContent,
    footerContent,
    consultationFormContent,
    studentsContent,
    mainPageContent

  const seoPromise = client.query({
    query: GET_SEO,
    variables: {
      id: PageID.INDEX,
      uriDefaultIcon: MediaUrl.DEFAULT_ICON,
      uriAppleIcon: MediaUrl.APPLE_ICON,
    },
  })

  const songPromise = client.query({
    query: GET_SONG,
    variables: { id: GeneralFragmentID.SONG },
  })

  const headerPromise = client.query({
    query: GET_HEADER,
    variables: { id: GeneralFragmentID.HEADER },
  })

  const teacherPromise = client.query({
    query: GET_TEACHER,
    variables: { id: GeneralFragmentID.TEACHER },
  })

  const faqPromise = client.query({
    query: GET_FAQ,
    variables: { id: GeneralFragmentID.FAQ },
  })

  const consultationPromise = client.query({
    query: GET_CONSULTATION,
    variables: { id: GeneralFragmentID.CONSULTATION },
  })

  const footerPromise = client.query({
    query: GET_FOOTER,
    variables: { id: GeneralFragmentID.FOOTER },
  })

  const consultationFormPromise = client.query({
    query: GET_CONSULTATION_FORM,
    variables: { id: FormID.consultation.id },
  })

  const studentsPromise = client.query({
    query: GET_STUDENTS,
    variables: { id: GeneralFragmentID.STUDENTS },
  })

  const mainPagePromise = client.query({
    query: GET_MAIN_PAGE,
    variables: { id: GeneralFragmentID.MAIN },
  })

  ;[
    seoData,
    songData,
    header,
    teacherContent,
    faqContent,
    consultationContent,
    footerContent,
    consultationFormContent,
    studentsContent,
    mainPageContent,
  ] = await Promise.allSettled([
    seoPromise,
    songPromise,
    headerPromise,
    teacherPromise,
    faqPromise,
    consultationPromise,
    footerPromise,
    consultationFormPromise,
    studentsPromise,
    mainPagePromise,
  ])

  const studentsData = studentsContent?.value?.data?.generalFragment?.students
  const mainPageData = mainPageContent?.value?.data?.generalFragment?.main || null
  const consultationFormData = consultationFormContent?.value?.data?.form || null
  const faqData = faqContent?.value?.data?.faq?.content || null
  const consultationData = consultationContent?.value?.data?.consultation || null
  const footerData = footerContent?.value?.data?.footer || null
  const teacherData = teacherContent?.value?.data?.teacher || null
  const headerData = header?.value?.data?.generalFragment?.header || null
  const songUrl = songData?.value?.data?.generalFragment?.audio?.song?.node?.mediaItemUrl || null
  const background = mainPageContent?.value?.data?.generalFragment?.main?.background || null
  const SEO = {
    ...(seoData?.value.data?.page?.seo || null),
    defaultIcon: seoData.value.data?.defaultIcon?.mediaItemUrl || null,
    appleIcon: seoData.value.data?.appleIcon?.mediaItemUrl || null,
    ogLocale: 'ru_RU',
    twitterCard: 'summary_large_image',
  }

  return addApolloState(client, {
    props: {
      consultationFormData,
      studentsData,
      mainPageData,
      faqData,
      consultationData,
      footerData,
      teacherData,
      SEO,
      background,
      headerData,
      songUrl,
    },
    revalidate: 3600,
  })
}
