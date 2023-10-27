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
import { Box }                      from '@ui/layout'
import { SpyScroll }                from '@ui/spy-scroll'
import { SpyScrollProvider }        from '@ui/spy-scroll'
import { useIntersectionObserver }  from '@ui/intersection-observer'
import { useSpyScroll }             from '@ui/spy-scroll'

import { Seo }                      from './seo.component'
import { useBackgrounds }           from './data'
import { useSong }                  from './data'

interface SEOProp {
  [key: string]: string
}
interface Props {
  SEO: SEOProp
  ogCover: string
}

export const HomePage = ({ SEO, ogCover }: Props) => {
  const backgrounds = useBackgrounds()
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
  const urlSongData = useSong()?.songUrl?.mediaItemUrl
  const songElement = useRef<HTMLAudioElement | undefined>()

  useEffect(() => {
    if (typeof window !== 'undefined' && urlSongData !== undefined) {
      songElement.current = new Audio(urlSongData)
    }

    return () => {
      if (typeof window !== 'undefined') {
        songElement.current?.pause()
        songElement.current = undefined
      }
    }
  }, [urlSongData])

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
          <HeaderBlock />
          <SpyScroll playSong={playSong} setPlaySong={setPlaySong} />
          <Seo SEO={SEO} ogCover={ogCover} />
          <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
            <Hero {...getObserverOptions('hero')} />
            <Box
              width='100%'
              flexWrap='wrap'
              backgroundImage={`url(${backgrounds?.backgroundForTeacherBlock?.backgroundForTeacher?.sourceUrl})`}
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
            </Box>
            <StudentsBlock {...getObserverOptions('students')} />
            <FaqBlock {...getObserverOptions('faq')} />
            <CtaBlock {...getObserverOptions('cta')} />
            <Box
              display={['none', 'none', 'flex']}
              width='100%'
              backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundForFooter?.sourceUrl})`}
              backgroundSize='80% 100%'
              backgroundRepeat='no-repeat'
              backgroundPosition='left bottom'
            >
              <FooterBlock {...getObserverOptions('footer')} />
            </Box>
            <Box
              display={['flex', 'flex', 'none']}
              width='100%'
              backgroundImage={`url(${backgrounds?.backgroundForFooter?.backgroundMobileForFooter?.sourceUrl})`}
              backgroundSize='100% 80%'
              backgroundRepeat='no-repeat'
              backgroundPosition='center bottom'
            >
              <FooterBlock {...getObserverOptions('footer')} />
            </Box>
          </main>
        </SpyScrollProvider>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default HomePage
