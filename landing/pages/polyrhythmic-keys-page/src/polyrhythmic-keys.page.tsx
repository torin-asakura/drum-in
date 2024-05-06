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
import { HeroPolyrhythmicKeysBlock }       from '@landing/hero-polyrhythmic-keys-fragment'
import { ModalFormPolyrhythmicKeys }       from '@landing/modal-form-polyrhythmic-keys'
import { ModalMobileFormPolyrhythmicKeys } from '@landing/modal-form-polyrhythmic-keys'
import { PricePolyrhythmicKeyslBlock }     from '@landing/price-polyrhythmic-keys-fragment'
import { StartLearningBlock }              from '@landing/start-learning-fragment'
import { TeacherBlock }                    from '@landing/teacher-fragment'
import { MainScrollContainer }              from '@shared/main-scroll-container'
import { Seo }                             from '@shared/seo-fragment'
import { Box }                             from '@ui/layout'
import { usePlayer }                        from '@shared/utils'

import { LOCOMOTIVE_SCROLL_WATCH }         from './polyrhythmic-keys.constacts'
import { LOCOMOTIVE_SCROLL_OPTIONS }       from './polyrhythmic-keys.constacts'
import { PolyrhythmicKeysProps }           from './polyrhythmic-keys.interfaces'

export const PolyrhythmicKeysPage: FC<PolyrhythmicKeysProps> = ({
  polyrhythmicKeysData,
  background,
  songUrl,
  SEO,
}) => {
  const containerRef = useRef(null)
  const { playSong, setPlaySong } = usePlayer(songUrl)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

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
          <HeroPolyrhythmicKeysBlock
            background={background}
            polyrhythmicKeysData={polyrhythmicKeysData}
          />
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
          <PricePolyrhythmicKeyslBlock polyrhythmicKeysData={polyrhythmicKeysData} />
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
        <ModalFormPolyrhythmicKeys
          polyrhythmicKeysData={polyrhythmicKeysData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormPolyrhythmicKeys
          polyrhythmicKeysData={polyrhythmicKeysData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default PolyrhythmicKeysPage
