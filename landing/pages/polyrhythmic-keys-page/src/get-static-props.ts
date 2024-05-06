import { initializeApollo }      from '@globals/data'
import { addApolloState }        from '@globals/data'
import { GET_PAYMENT_SETTINGS }  from '@globals/data'
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
  const client = initializeApollo({});

  let course, seoData, songData, header, teacherContent, faqContent, consultationContent, footerContent, processContent, consultationFormContent, paymentSettingsContent;

  try {
    const coursePromise = client.query({
      query: GET_INDIVIDUAL_COURSE,
      variables: { id: CourseID.POLYRYTHMIC_KEYS },
    });

    const seoPromise = client.query({
      query: GET_SEO,
      variables: { id: PageID.POLYRYTHMIC_KEYS },
    });

    const songPromise = client.query({
      query: GET_SONG,
      variables: { id: GeneralFragmentID.SONG },
    });

    const headerPromise = client.query({
      query: GET_HEADER,
      variables: { id: GeneralFragmentID.HEADER },
    });

    const teacherPromise = client.query({
      query: GET_TEACHER,
      variables: { id: GeneralFragmentID.TEACHER },
    });

    const faqPromise = client.query({
      query: GET_FAQ,
      variables: { id: GeneralFragmentID.FAQ },
    });

    const consultationPromise = client.query({
      query: GET_CONSULTATION,
      variables: { id: GeneralFragmentID.CONSULTATION },
    });

    const footerPromise = client.query({
      query: GET_FOOTER,
      variables: { id: GeneralFragmentID.FOOTER },
    });

    const processPromise = client.query({
      query: GET_PROCESS_EDUCATION,
      variables: { id: GeneralFragmentID.PROCESS },
    });

    const consultationFormPromise = client.query({
      query: GET_CONSULTATION_FORM,
      variables: { id: FormID.consultation.id },
    });

    const paymentSettingsPromise = client.query({
      query: GET_PAYMENT_SETTINGS,
      variables: { id: GeneralFragmentID.SETTINGS },
    });

    [course, seoData, songData, header, teacherContent, faqContent, consultationContent, footerContent, processContent, consultationFormContent, paymentSettingsContent] = await Promise.allSettled([coursePromise, seoPromise, songPromise, headerPromise, teacherPromise, faqPromise, consultationPromise, footerPromise, processPromise, consultationFormPromise, paymentSettingsPromise]);
  } catch (err) {
    console.error('Error fetching data:', err);
  }

  const consultationFormData = consultationFormContent?.value?.data?.form || null;
  const faqData = faqContent?.value?.data?.faq?.content || null;
  const consultationData = consultationContent?.value?.data?.consultation || null;
  const footerData = footerContent?.value?.data?.footer || null;
  const teacherData = teacherContent?.value?.data?.teacher || null;
  const processData = processContent?.value?.data?.learningProcess || null;
  const background = course?.value?.data?.individualCourse?.individualCourseData?.background || null;
  const headerData = header?.value?.data?.generalFragment?.header || null;
  const songUrl = songData?.value?.data?.generalFragment?.audio?.song?.node?.mediaItemUrl || null;
  const paymentSettingsData = paymentSettingsContent?.value?.data?.generalFragment?.siteSettings?.paymentSettings || null;

  return addApolloState(client, {
    props: {
      consultationFormData,
      faqData,
      consultationData,
      footerData,
      teacherData,
      processData,
      SEO: {
        ...seoData?.value?.data?.page?.seo,
        ogLocale: 'ru_RU',
        twitterCard: 'summary_large_image',
      },
      polyrhythmicKeysData: course?.value?.data?.individualCourse || null,
      background,
      headerData,
      songUrl,
      paymentSettingsData,
    },
    revalidate: 3600,
  });
};
