import React                        from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'
import { useState }                 from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { CourseProcessBlock }       from '@landing/course-process-fragment'
import { CtaBlock }                 from '@landing/cta-fragment'
import { FaqBlock }                 from '@landing/faq'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { HeroFifthDimensionBlock }  from '@landing/hero-fifth-dimension-fragment'
import { PriceBlock }               from '@landing/price-fragment'
import { StartLearningBlock }       from '@landing/start-learning-fragment'
import { TeacherBlock }             from '@landing/teacher-fragment'
import { Background }               from '@ui/background'
import { Box }                      from '@ui/layout'

export const FifthDimensionPage = () => {
  const containerRef = useRef(null)
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
        <HeaderBlock />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <HeroFifthDimensionBlock />
          <CourseProcessBlock />
          <Background
            width='100%'
            gradient='greenBlueCirclesImage'
            backgroundSize={['200%', '200% 100%', '1800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition='center top'
          >
            <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
          </Background>
          <PriceBlock />
          <FaqBlock />
          <CtaBlock />
          <FooterBlock />
        </main>
        <StartLearningBlock />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default FifthDimensionPage
