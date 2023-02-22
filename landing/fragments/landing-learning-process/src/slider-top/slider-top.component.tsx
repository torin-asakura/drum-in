import React                                   from 'react'
import { Children }                            from 'react'
import { useMemo }                             from 'react'
import { useEffect }                           from 'react'
import { useState }                            from 'react'

import { LearningProcess as LLearningProcess } from '@shared/data'
import { Slider }                              from '@ui/slider'
import { SwiperSlide }                         from '@ui/slider'
import { useMockedLearningProcessTop }         from '@shared/data'

import { SlideImage }                          from '../slide-image'
import { SlideText }                           from '../slide-text'

const SliderTop = () => {
  const { learningProcessTop: learningProcessTopData } = useMockedLearningProcessTop()
  const [learningProcessTop, setLearningProcessTop] =
    useState<LLearningProcess[]>(learningProcessTopData)

  useEffect(() => {
    setLearningProcessTop(learningProcessTopData)
    // eslint-disable-next-line
  }, [])

  const learningProcessTopChildren = useMemo(() => {
    let i = 0
    return learningProcessTop.map(({ pathImage = '', text = '' }, index) => {
      if (index % 2 === 0) {
        i += 1
        return <SlideText text={text} activeIcons={i % 2 === 0 ? 'target' : 'sheetMusic'} />
      }

      return <SlideImage pathImage={pathImage} />
    })
  }, [learningProcessTop])

  return (
    <Slider
      slidesPerView='auto'
      clName='learning-process-slider'
      spaceBetween={40}
      loop
      mousewheel
      mousewheelInvert
      speed={500}
      allowTouchMove={false}
    >
      {Children.map(learningProcessTopChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}
export { SliderTop }
