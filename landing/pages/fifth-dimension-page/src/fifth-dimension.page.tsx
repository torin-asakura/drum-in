import { CourseID }            from '@globals/data'
import { useIndividualCourse } from '@globals/data'
import React                   from 'react'
import { useRef }              from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { LocomotiveScrollProvider }      from '@forks/react-locomotive-scroll'
import { PageID }                        from '@globals/data'
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

import { useSong }                       from './data'

interface SEOProp {
  [key: string]: string
}
interface Props {
  SEO: SEOProp
}

export const FifthDimensionPage = ({ SEO }: Props) => {

  const { individualCourse } = useIndividualCourse(CourseID.FIFTH_DIMENSION)


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
        <Seo id={PageID.FIFTH_DIMENSION} />
        <main style={{ width: '100%', height: '100%' }} data-scroll-container ref={containerRef}>
          <HeroFifthDimensionBlock fifthDimensionData={individualCourse}/>
          <CourseProcessBlock />
          <Box
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-middle-fifth-dimension-page.png'})`}
            backgroundSize={['200%', '200% 100%', '1800px']}
            backgroundRepeat='no-repeat'
            backgroundPosition='center top'
          >
            <TeacherBlock playSong={playSong} setPlaySong={setPlaySong} />
          </Box>
          <PriceFifthDimensionBlock fifthDimensionData={individualCourse}/>
          <FaqBlock />
          <CtaBlock />
          <Box
            display={['none', 'none', 'flex']}
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-footer-fifth-dimension-page.png'})`}
            backgroundSize='80% 100%'
            backgroundRepeat='no-repeat'
            backgroundPosition='left bottom'
          >
            <FooterBlock />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            width='100%'
            backgroundImage={`url(${'https://wp.drumin.pro/wp-content/uploads/2023/03/bg-mobile-footer-fifth-dimension-page.png'})`}
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
        <ModalFormFifthDimension
          activeRender={visibleModal}
          onClose={() => setVisibleModal(false)}
        />
        <ModalMobileFormFifthDimension
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </LocomotiveScrollProvider>
    </Box>
  )
}

export default FifthDimensionPage
