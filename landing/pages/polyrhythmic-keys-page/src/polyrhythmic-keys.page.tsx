import React                               from 'react'
import { FC }                              from 'react'
import { useRef }                          from 'react'
import { useEffect }                       from 'react'
import { useState }                        from 'react'

import { LocomotiveScrollProvider }        from '@forks/react-locomotive-scroll'
import { PageID }                          from '@globals/data/src'
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
import { Seo }                             from '@shared/seo-fragment'
import { Box }                             from '@ui/layout'

import { PolyrhythmicKeysProps }           from './polyrhythmic-keys.interfaces'
import { useSong }                         from './data'

export const PolyrhythmicKeysPage: FC<PolyrhythmicKeysProps> = ({
  polyrhythmicKeysData,
  background,
}) => {
  const containerRef = useRef(null)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

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
        <Seo id={PageID.POLYRYTHMIC_KEYS} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
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
            backgroundPosition='center top'
          >
            <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
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
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${background?.mobile?.footer?.node.sourceUrl})`}
            backgroundSize='100% 80%'
            backgroundRepeat='no-repeat'
            backgroundPosition='center bottom'
          >
            <FooterBlock />
          </Box>
        </main>
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
