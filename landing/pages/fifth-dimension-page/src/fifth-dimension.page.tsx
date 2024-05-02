import React                             from 'react'
import { FC }                            from 'react'
import { useRef }                        from 'react'
import { useEffect }                     from 'react'
import { useState }                      from 'react'

import { LocomotiveScrollProvider }      from '@forks/react-locomotive-scroll'
import { CourseProcessBlock }            from '@landing/course-process-fragment'
import { CtaBlock }                      from '@landing/cta-fragment'
import { FaqBlock }                      from '@landing/faq'
import { FooterBlock }                   from '@landing/footer-fragment'
import { HeaderBlock }                   from '@landing/header-fragment'
import { HeroFifthDimensionBlock }       from '@landing/hero-fifth-dimension-fragment'
import { ModalFormFifthDimension }       from '@landing/modal-form-fifth-dimension'
import { ModalMobileFormFifthDimension } from '@landing/modal-form-fifth-dimension'
import { PriceFifthDimensionBlock }      from '@landing/price-fifth-dimension-fragment'
import { StartLearningBlock }            from '@landing/start-learning-fragment'
import { TeacherBlock }                  from '@landing/teacher-fragment'
import { Seo }                           from '@shared/seo-fragment'
import { Box }                           from '@ui/layout'

import { FifthDimensionProps }           from './fifth-dimension.interfaces'

export const FifthDimensionPage: FC<FifthDimensionProps> = ({
  SEO,
  faqData,
  consultationData,
  footerData,
  consultationFormData,
  teacherData,
  processData,
  fifthDimensionData,
  background,
  songUrl,
  headerData,
  paymentSettingsData,
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
        <HeaderBlock
          headerData={headerData}
          consultationData={consultationData}
          consultationFormData={consultationFormData}
        />
        <Seo seo={SEO} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <HeroFifthDimensionBlock
            background={background}
            fifthDimensionData={fifthDimensionData}
          />
          <CourseProcessBlock processData={processData} />
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
              <TeacherBlock
                teacherData={teacherData}
                playSong={playSong}
                setPlaySong={setPlaySong}
              />
            </Box>
          </Box>
          <PriceFifthDimensionBlock
            paymentSettingsData={paymentSettingsData}
            fifthDimensionData={fifthDimensionData}
          />
          <FaqBlock faqData={faqData} />
          <CtaBlock
            consultationData={consultationData}
            consultationFormData={consultationFormData}
          />
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
              <FooterBlock footerData={footerData} />
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
              <FooterBlock footerData={footerData} />
            </Box>
          </Box>
        </main>
        <StartLearningBlock
          onClick={() => setVisibleModal(true)}
          onClickMobile={() => setVisibleModalMobile(true)}
        />
        <ModalFormFifthDimension
          paymentSettingsData={paymentSettingsData}
          fifthDimensionData={fifthDimensionData}
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormFifthDimension
          paymentSettingsData={paymentSettingsData}
          fifthDimensionData={fifthDimensionData}
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default FifthDimensionPage
