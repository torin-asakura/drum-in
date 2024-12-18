import React                            from 'react'
import { FC }                           from 'react'
import { useRef }                       from 'react'
import { useState }                     from 'react'

import { LocomotiveScrollProvider }     from '@forks/react-locomotive-scroll'
import { CourseProcessBlock }           from '@landing/course-process-fragment'
import { CtaBlock }                     from '@landing/cta-fragment'
import { FaqBlock }                     from '@landing/faq'
import { FooterBlock }                  from '@landing/footer-fragment'
import { HeaderBlock }                  from '@landing/header-fragment'
import { HeroSeventhHeavenBlock }       from '@landing/hero-seventh-heaven-fragment'
import { ModalFormSeventhHeaven }       from '@landing/modal-form-seventh-heaven'
import { ModalMobileFormSeventhHeaven } from '@landing/modal-form-seventh-heaven'
import { PriceSeventhHeavenBlock }      from '@landing/price-seventh-heaven-fragment'
import { StartLearningBlock }           from '@landing/start-learning-fragment'
import { TeacherBlock }                 from '@landing/teacher-fragment'
import { MainScrollContainer }          from '@shared/main-scroll-container/src'
import { Seo }                          from '@shared/seo-fragment'
import { Box }                          from '@ui/layout'
import { usePlayer }                    from '@shared/utils/src'

import { LOCOMOTIVE_SCROLL_WATCH }      from './seventh-heaven.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS }    from './seventh-heaven.constants'
import { SeventhHeavenProps }           from './seventh-heaven.interfaces'

export const SeventhHeavenPage: FC<SeventhHeavenProps> = ({
  SEO,
  seventhHeavenData,
  background,
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
          <HeroSeventhHeavenBlock background={background} seventhHeavenData={seventhHeavenData} />
          <CourseProcessBlock />
          <Box
            width='100%'
            backgroundImage={`url(${background?.desktop?.teacher?.node.sourceUrl})`}
            backgroundSize={['200%', '200% 100%', '1800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition='-100px -50px'
          >
            <Box
              width='100%'
              backgroundImage={`url(${background?.noise?.node.sourceUrl})`}
              backgroundSize='contain'
            >
              <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
            </Box>
          </Box>
          <PriceSeventhHeavenBlock seventhHeavenData={seventhHeavenData} />
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
        <ModalFormSeventhHeaven
          seventhHeavenData={seventhHeavenData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormSeventhHeaven
          seventhHeavenData={seventhHeavenData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default SeventhHeavenPage
