import React                        from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'
import { useState }                 from 'react'

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
import { Background }               from '@ui/background'
import { Box }                      from '@ui/layout'
import { SpyScroll }                from '@ui/spy-scroll'
import { SpyScrollProvider }        from '@ui/spy-scroll'
import { useIntersectionObserver }  from '@ui/intersection-observer'
import { useSpyScroll }             from '@ui/spy-scroll'

export const HomePage = () => {
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

  const songElement = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== 'undefined' ? new Audio('/music/song-1.mp3') : undefined
  )
  useEffect(() => {
    if (playSong) {
      songElement.current?.play()
    } else {
      songElement.current?.pause()
    }
  }, [playSong])

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          smartphone: {
            smooth: true,
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          },
        }}
        containerRef={containerRef}
        watch={[]}
      >
        <SpyScrollProvider>
          <HeaderBlock />
          <SpyScroll playSong={playSong} setPlaySong={setPlaySong} />
          <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
            <Hero {...getObserverOptions('hero')} />
            <Background
              width='100%'
              gradient='purpleBlueCirclesImage'
              backgroundSize={['200%', '100% auto', '1800px']}
              backgroundRepeat='no-repeat'
              backgroundPosition={['center top', 'center center', 'center 75%']}
            >
              <TeacherBlock
                playSong={playSong}
                setPlaySong={setPlaySong}
                {...getObserverOptions('teacher')}
              />
              <PrivateLessonBlock {...getObserverOptions('private-lesson')} />
              <LearningProcessBlock {...getObserverOptions('learning-process')} />
            </Background>
            <StudentsBlock {...getObserverOptions('students')} />
            <FaqBlock {...getObserverOptions('faq')} />
            <CtaBlock {...getObserverOptions('cta')} />
            <Background
              display={['none', 'none', 'flex']}
              width='100%'
              gradient='purpleBlueSemicircleImage'
              backgroundSize='80% 100%'
              backgroundRepeat='no-repeat'
              backgroundPosition='left bottom'
            >
              <FooterBlock {...getObserverOptions('footer')} />
            </Background>
            <Background
              display={['flex', 'flex', 'none']}
              width='100%'
              gradient='purpleBlueTwoSemicirclesSmallImage'
              backgroundSize='100% 80%'
              backgroundRepeat='no-repeat'
              backgroundPosition='center bottom'
            >
              <FooterBlock {...getObserverOptions('footer')} />
            </Background>
          </main>
        </SpyScrollProvider>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default HomePage
