import React                               from 'react'
import { FC }                              from 'react'
import { useRef }                          from 'react'
import { useEffect }                       from 'react'
import { useState }                        from 'react'

import { LocomotiveScrollProvider }        from '@forks/react-locomotive-scroll'
import { PageID }                          from '@globals/data'
import { CourseProcessBlock }              from '@landing/course-process-fragment'
import { CtaBlock }                        from '@landing/cta-fragment'
import { FaqBlock }                        from '@landing/faq'
import { FooterBlock }                     from '@landing/footer-fragment'
import { HeaderBlock }                     from '@landing/header-fragment'
import { HeroOpeningTheRhythmBlock }       from '@landing/hero-opening-the-rhythm-fragment'
import { ModalFormOpeningTheRhythm }       from '@landing/modal-form-opening-the-rhythm'
import { ModalMobileFormOpeningTheRhythm } from '@landing/modal-form-opening-the-rhythm'
import { PriceOpeningTheRhythmBlock }      from '@landing/price-opening-the-rhythm-fragment'
import { ProgramBlock }                    from '@landing/program-fragment'
import { StartLearningBlock }              from '@landing/start-learning-fragment'
import { TeacherBlock }                    from '@landing/teacher-fragment'
import { Seo }                             from '@shared/seo-fragment'
import { Box }                             from '@ui/layout'

import { OpeningTheRhythmPageProps }       from './opening-the-rhythm-page.interfaces'

export const OpeningTheRhythmPage: FC<OpeningTheRhythmPageProps> = ({
  faqData, consultationData, footerData, teacherData,processData,
  background,
  openingTheRhythm,
  songUrl,
  headerData,
}) => {
  const containerRef = useRef(null)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

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
        <HeaderBlock headerData={headerData} />
        <Seo id={PageID.OPENING_RHYTHM} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <HeroOpeningTheRhythmBlock background={background} openingTheRhythm={openingTheRhythm} />
          <ProgramBlock openingTheRhythm={openingTheRhythm} />
          <CourseProcessBlock processData={processData}/>
          <Box
            width='100%'
            backgroundImage={`url(${background?.desktop?.teacher?.node.sourceUrl})`}
            backgroundSize={['200%', '200% 100%', '1800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition='center top'
          >
            <Box
              width='100%'
              backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <TeacherBlock teacherData={teacherData} playSong={playSong} setPlaySong={setPlaySong} />
            </Box>
          </Box>
          <PriceOpeningTheRhythmBlock openingTheRhythm={openingTheRhythm} />
          <FaqBlock faqData={faqData}/>
          <CtaBlock consultationData={consultationData}/>
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${background?.desktop?.footer?.node.sourceUrl})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <Box
              width='100%'
              backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <FooterBlock footerData={footerData}/>
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
              width='100%'
              backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <FooterBlock footerData={footerData}/>
            </Box>
          </Box>
        </main>
        <StartLearningBlock
          onClick={() => setVisibleModal(true)}
          onClickMobile={() => setVisibleModalMobile(true)}
        />
        <ModalFormOpeningTheRhythm
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormOpeningTheRhythm
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default OpeningTheRhythmPage
