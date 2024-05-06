import React                         from 'react'
import { FC }                        from 'react'
import { useRef }                    from 'react'

import { LocomotiveScrollProvider }  from '@forks/react-locomotive-scroll'
import { CtaBlock }                  from '@landing/cta-fragment'
import { FaqBlock }                  from '@landing/faq'
import { FooterBlock }               from '@landing/footer-fragment'
import { HeaderBlock }               from '@landing/header-fragment'
import { Hero }                      from '@landing/hero-fragment'
import { LearningProcessBlock }      from '@landing/learning-process-fragment'
import { StudentsBlock }             from '@landing/learning-students'
import { PrivateLessonBlock }        from '@landing/private-lesson-fragment'
import { TeacherBlock }              from '@landing/teacher-fragment'
import { MainScrollContainer }       from '@shared/main-scroll-container/src'
import { Seo }                       from '@shared/seo-fragment'
import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { SpyScroll }                 from '@ui/spy-scroll'
import { SpyScrollProvider }         from '@ui/spy-scroll'
import { usePlayer }                 from '@shared/utils'
import { useIntersectionObserver }   from '@ui/intersection-observer'
import { useSpyScroll }              from '@ui/spy-scroll'

import { ModuleID }                  from './index-page.constants'
import { MODULES_ORDER }             from './index-page.constants'
import { LOCOMOTIVE_SCROLL_WATCH }   from './index-page.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS } from './index-page.constants'
import { IndexPageProps }            from './index-page.interfaces'

export const HomePage: FC<IndexPageProps> = ({
  SEO,
  studentsData,
  mainPageData,
  background,
  songUrl,
}) => {
  const containerRef = useRef(null)
  const spyScrollStore = useSpyScroll()
  const { playSong, setPlaySong } = usePlayer(songUrl)
  // @ts-ignore next-line
  const { getObserverOptions } = useIntersectionObserver((id: ModuleID) => {
    spyScrollStore.setActive(MODULES_ORDER.indexOf(id))
  })

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <SpyScrollProvider>
          <HeaderBlock />
          <SpyScroll playSong={playSong} setPlaySong={setPlaySong} />
          <Seo seo={SEO} />
          <MainScrollContainer containerRef={containerRef}>
            <Hero
              mainPageData={mainPageData}
              background={background}
              {...getObserverOptions(ModuleID.HERO)}
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
                    playSong={playSong}
                    setPlaySong={setPlaySong}
                    {...getObserverOptions(ModuleID.TEACHER)}
                  />
                </Box>
                <Box order={{ _: 2, laptop: 1, wide: 1 }}>
                  <PrivateLessonBlock
                    privateLessonData={mainPageData.individualLesson}
                    {...getObserverOptions(ModuleID.PRIVATE_LESSON)}
                  />
                </Box>
                <Box width='100%' order={{ _: 0, laptop: 2, wide: 2 }}>
                  <LearningProcessBlock
                    learningProcessData={mainPageData.slider}
                    {...getObserverOptions(ModuleID.LEARNING_PROCESS)}
                  />
                </Box>
              </Box>
            </Box>
            <Layout height={[40, 0, 0, 0]} />
            <StudentsBlock
              mainData={mainPageData.students}
              studentsData={studentsData}
              {...getObserverOptions(ModuleID.STUDENTS)}
            />
            <FaqBlock {...getObserverOptions(ModuleID.FAQ)} />
            <CtaBlock {...getObserverOptions(ModuleID.CTA)} />
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
                <FooterBlock {...getObserverOptions(ModuleID.FOOTER)} />
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
                <FooterBlock {...getObserverOptions(ModuleID.FOOTER)} />
              </Box>
            </Box>
          </MainScrollContainer>
        </SpyScrollProvider>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default HomePage
