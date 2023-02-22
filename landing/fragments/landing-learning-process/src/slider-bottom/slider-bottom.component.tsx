import React                                               from 'react'
import { Children }                                        from 'react'
import { useMemo }                                         from 'react'
import { useEffect }                                       from 'react'
import { useState }                                        from 'react'

import { LearningProcessBottom as LLearningProcessBottom } from '@shared/data'
import { Slider }                                          from '@ui/slider'
import { SwiperSlide }                                     from '@ui/slider'
import { useMockedLearningProcessBottom }                  from '@shared/data'

import { SlideImage }                                      from '../slide-image'
import { SlideText }                                       from '../slide-text'

const SliderBottom = () => {
  const { learningProcessBottom: learningProcessBottomData } = useMockedLearningProcessBottom()
  const [learningProcessBottom, setLearningProcessBottom] =
    useState<LLearningProcessBottom[]>(learningProcessBottomData)

  useEffect(() => {
    setLearningProcessBottom(learningProcessBottomData)
    // eslint-disable-next-line
  }, [])

  const learningProcessTopChildren = useMemo(() => {
    let i = 0
    return learningProcessBottom.map(({ pathImage = '', text = '' }, index) => {
      if (index % 2 === 1) {
        i += 1
        return <SlideText text={text} activeIcons={i % 2 === 0 ? 'target' : 'sheetMusic'} />
      }

      return <SlideImage pathImage={pathImage} />
    })
  }, [learningProcessBottom])

  return (
    <Slider
      slidesPerView='auto'
      clName='learning-process-slider'
      centeredSlides
      spaceBetween={40}
      mousewheel
      speed={500}
      allowTouchMove={false}
      loop
    >
      {Children.map(learningProcessTopChildren, (child) => (
        <SwiperSlide>{child}</SwiperSlide>
      ))}
    </Slider>
  )
}
export { SliderBottom }
