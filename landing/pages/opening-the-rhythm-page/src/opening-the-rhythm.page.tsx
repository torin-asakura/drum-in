import React                               from 'react'
import { FC }                              from 'react'
import { useRef }                          from 'react'
import { useState }                        from 'react'

import { LocomotiveScrollProvider }        from '@forks/react-locomotive-scroll'
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
import { MainScrollContainer }             from '@shared/main-scroll-container/src'
import { Seo }                             from '@shared/seo-fragment'
import { Box }                             from '@ui/layout'
import { usePlayer }                       from '@shared/utils/src'

import { OpeningTheRhythmPageProps }       from './opening-the-rhythm-page.interfaces'
import { LOCOMOTIVE_SCROLL_WATCH }         from './opening-the-rhythm.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS }       from './opening-the-rhythm.constants'

export const OpeningTheRhythmPage: FC<OpeningTheRhythmPageProps> = ({
  SEO,
  background,
  openingTheRhythm,
  songUrl,
}) => {
  const containerRef = useRef(null)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const { playSong, setPlaySong } = usePlayer(songUrl)

  return (
    <Box backgroundColor='background.blackAmber' flexWrap='wrap'>
      <LocomotiveScrollProvider
        options={LOCOMOTIVE_SCROLL_OPTIONS}
        watch={LOCOMOTIVE_SCROLL_WATCH}
        containerRef={containerRef}
      >
        <HeaderBlock />
        <Seo seo={SEO} />
        <MainScrollContainer containerRef={containerRef}>
          <HeroOpeningTheRhythmBlock background={background} openingTheRhythm={openingTheRhythm} />
          <ProgramBlock openingTheRhythm={openingTheRhythm} />
          <CourseProcessBlock />
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
              <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
            </Box>
          </Box>
          <PriceOpeningTheRhythmBlock
            paymentSettingsData={{}}
            openingTheRhythm={openingTheRhythm}
          />
          <FaqBlock />
          <CtaBlock />
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
              <FooterBlock />
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
              <FooterBlock />
            </Box>
          </Box>
        </MainScrollContainer>
        <StartLearningBlock
          onClick={() => setVisibleModal(true)}
          onClickMobile={() => setVisibleModalMobile(true)}
        />
        <ModalFormOpeningTheRhythm
          paymentSettingsData={{}}
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormOpeningTheRhythm
          paymentSettingsData={{}}
          openingTheRhythm={openingTheRhythm}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default OpeningTheRhythmPage
