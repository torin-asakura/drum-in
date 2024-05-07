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
import { HeroFeelingOfTimeBlock }       from '@landing/hero-feeling-of-time-fragment'
import { ModalFormFeelingOfTime }       from '@landing/modal-form-feeling-of-time'
import { ModalMobileFormFeelingOfTime } from '@landing/modal-form-feeling-of-time'
import { PriceFeelingOfTimeBlock }      from '@landing/price-feeling-of-time-fragment'
import { StartLearningBlock }           from '@landing/start-learning-fragment'
import { TeacherBlock }                 from '@landing/teacher-fragment'
import { MainScrollContainer }          from '@shared/main-scroll-container/src'
import { Seo }                          from '@shared/seo-fragment'
import { Box }                          from '@ui/layout'
import { usePlayer }                    from '@shared/utils/src'

import { LOCOMOTIVE_SCROLL_WATCH }      from './feeling-of-time.constants'
import { LOCOMOTIVE_SCROLL_OPTIONS }    from './feeling-of-time.constants'
import { FeelingOfTimeProps }           from './feeling-of-time.interfaces'

export const FeelingOfTimePage: FC<FeelingOfTimeProps> = ({
  SEO,
  feelingOfTimeData,
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
          <HeroFeelingOfTimeBlock background={background} feelingOfTimeData={feelingOfTimeData} />
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
          <PriceFeelingOfTimeBlock feelingOfTimeData={feelingOfTimeData} />
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
        <ModalFormFeelingOfTime
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormFeelingOfTime
          feelingOfTimeData={feelingOfTimeData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default FeelingOfTimePage
