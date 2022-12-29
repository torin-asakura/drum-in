import React                        from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'
import { useState }                 from 'react'

import { LocomotiveScrollProvider } from '@forks/react-locomotive-scroll'
import { CtaBlock }                 from '@landing/cta-fragment'
import { FaqBlock }                 from '@landing/faq'
import { FooterBlock }              from '@landing/footer-fragment'
import { HeaderBlock }              from '@landing/header-fragment'
import { TeacherBlock }             from '@landing/teacher-fragment'
import { Box }                      from '@ui/layout'

export const OpeningTheRhythmPage = () => {
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
          <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
          <FaqBlock />
          <CtaBlock />
          <FooterBlock />
        </main>
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default OpeningTheRhythmPage
