import { MainScrollContainer } from '@shared/main-scroll-container/src'
import React                   from 'react'
import { FC }                  from 'react'
import { useRef }              from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { CtaBlock }                 from '@landing/cta-fragment'
import { FaqBlock }                 from '@landing/faq'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { Hero }                     from '@landing/hero-fragment'
import { LearningProcessBlock }     from '@landing/learning-process-fragment'
import { StudentsBlock }            from '@landing/learning-students'
import { PrivateLessonBlock }       from '@landing/private-lesson-fragment'
import { TeacherBlock }             from '@landing/teacher-fragment'
import { Seo }                      from '@shared/seo-fragment'
import { Box }                      from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { SpyScroll }                from '@ui/spy-scroll'
import { SpyScrollProvider }        from '@ui/spy-scroll'
import { useIntersectionObserver }  from '@ui/intersection-observer'
import { useSpyScroll }             from '@ui/spy-scroll'

import { IndexPageProps }           from './index-page.interfaces'

export const HomePage: FC<IndexPageProps> = ({
  SEO,
  studentsData,
  teacherData,
  faqData,
  consultationData,
  footerData,
  consultationFormData,
  mainPageData,
  background,
  songUrl,
  headerData,
}) => {
  const containerRef = useRef(null)
  const spyScrollStore = useSpyScroll()
  const { getObserverOptions } = useIntersectionObserver((id) => {
    const order = [
      'hero',
      'teacher',
      'private-lesson',
      'learning-process',
      'students',
      'faq',
      'cta',
      'footer',
    ]

    spyScrollStore.setActive(order.indexOf(id))
  })

  const [playSong, setPlaySong] = useState<boolean>(false)

  const songElement = useRef<HTMLAudioElement | undefined>()

  useEffect(() => {
    if (typeof window !== 'undefined' && songUrl !== undefined) {
      songElement.current = new Audio(songUrl || '')
    }

    return () => {
      if (typeof window !== 'undefined') {
        songElement.current?.pause()
        songElement.current = undefined
      }
    }
  }, [songUrl])

  useEffect(() => {
    if (playSong) {
      songElement?.current?.play()
    } else {
      songElement?.current?.pause()
    }
  }, [playSong])

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
          },
          tablet: {
            smooth: true,
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <SpyScrollProvider>
          <HeaderBlock
            headerData={headerData}
            consultationData={consultationData}
            consultationFormData={consultationFormData}
          />
          <SpyScroll playSong={playSong} setPlaySong={setPlaySong} />
          <Seo seo={SEO} />
          <MainScrollContainer containerRef={containerRef}>
            <Hero
              mainPageData={mainPageData}
              background={background}
              {...getObserverOptions('hero')}
            />
            <Box
              width='100%'
              backgroundImage={`url(${background?.desktop?.teacher?.node?.sourceUrl})`}
              backgroundSize={['200%', '100% auto', '1800px']}
              backgroundRepeat='no-repeat'
              backgroundPosition={['center 500px', 'center center', 'center 75%']}
            >
              <Box
                fill
                backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
                backgroundSize='contain'
                flexWrap='wrap'
              >
                <Box fill order={{ _: 1, laptop: 0, wide: 0 }}>
                  <TeacherBlock
                    teacherData={teacherData}
                    playSong={playSong}
                    setPlaySong={setPlaySong}
                    {...getObserverOptions('teacher')}
                  />
                </Box>
                <Box order={{ _: 2, laptop: 1, wide: 1 }}>
                  <PrivateLessonBlock
                    consultationData={consultationData}
                    consultationFormData={consultationFormData}
                    privateLessonData={mainPageData.individualLesson}
                    {...getObserverOptions('private-lesson')}
                  />
                </Box>
                <Box width='100%' order={{ _: 0, laptop: 2, wide: 2 }}>
                  <LearningProcessBlock
                    learningProcessData={mainPageData.slider}
                    {...getObserverOptions('learning-process')}
                  />
                </Box>
              </Box>
            </Box>
            <Layout height={[40, 0, 0, 0]} />
            <StudentsBlock
              mainData={mainPageData.students}
              studentsData={studentsData}
              {...getObserverOptions('students')}
            />
            <FaqBlock faqData={faqData} {...getObserverOptions('faq')} />
            <CtaBlock
              consultationData={consultationData}
              {...getObserverOptions('cta')}
              consultationFormData={consultationFormData}
            />
            <Box
              display={['none', 'none', 'flex']}
              width='100%'
              backgroundImage={`url(${background?.desktop?.footer?.node.sourceUrl})`}
              backgroundSize='80% 100%'
              backgroundRepeat='no-repeat'
              backgroundPosition='left bottom'
            >
              <Box
                backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
                backgroundSize='contain'
                width='100%'
              >
                <FooterBlock footerData={footerData} {...getObserverOptions('footer')} />
              </Box>
            </Box>
            <Box
              display={['flex', 'flex', 'none']}
              width='100%'
              backgroundImage={`url(${background?.mobile?.footer?.node.sourceUrl})`}
              backgroundSize='100% 80%'
              backgroundRepeat='no-repeat'
              backgroundPosition='center bottom'
            >
              <Box
                backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
                backgroundSize='contain'
                width='100%'
              >
                <FooterBlock footerData={footerData} {...getObserverOptions('footer')} />
              </Box>
            </Box>
          </MainScrollContainer>
        </SpyScrollProvider>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default HomePage
