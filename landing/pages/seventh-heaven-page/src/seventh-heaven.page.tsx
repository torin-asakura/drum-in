import React                            from 'react'
import { useRef }                       from 'react'
import { useEffect }                    from 'react'
import { useState }                     from 'react'

import { LocomotiveScrollProvider }     from '@forks/react-locomotive-scroll'
import { CourseID }                     from '@globals/data'
import { PageID }                       from '@globals/data'
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
import { Seo }                          from '@shared/seo-fragment'
import { Box }                          from '@ui/layout'
import { useIndividualCourse }          from '@globals/data'

import { useSong }                      from './data'

interface SEOProp {
  [key: string]: string
}
interface Props {
  SEO: SEOProp
}

export const SeventhHeavenPage = ({ SEO }: Props) => {
  const { individualCourse } = useIndividualCourse(CourseID.SEVENTH_HEAVEN)

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
        <Seo id={PageID.SEVENTH_HEAVEN} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <HeroSeventhHeavenBlock seventhHeavenData={individualCourse} />
          <CourseProcessBlock />
          <Box
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-middle-seventh-heaven-page.png'})`}
            backgroundSize={['200%', '200% 100%', '1800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition='center top'
          >
            <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
          </Box>
          <PriceSeventhHeavenBlock seventhHeavenData={individualCourse}/>
          <FaqBlock />
          <CtaBlock />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-footer-seventh-heaven-page.png'})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-mobile-footer-seventh-heaven-page.png'})`}
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
        <ModalFormSeventhHeaven
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormSeventhHeaven
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default SeventhHeavenPage
