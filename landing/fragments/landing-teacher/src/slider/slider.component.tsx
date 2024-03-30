import { TeacherDataProps } from '@globals/data/src'
import { FC }               from 'react'
import React                from 'react'
import { Children }         from 'react'
import { useMemo }          from 'react'

import { Condition }             from '@ui/condition'
import { DrumsticksIcon }        from '@ui/icons'
import { Box }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Slider }                from '@ui/slider'
import { SwiperSlide }           from '@ui/slider'

import { Slide }                 from './slide'
import { useViewportBreakpoint } from './hooks'
import { SliderBlockProps }      from './slider.interfaces'


const SliderBlock:FC<SliderBlockProps> = ({ gallery }) => {
  const { isWideViewport, isMobileViewport } = useViewportBreakpoint()

  const teacherChildren = useMemo(
    () =>
      gallery?.map((item) => (
        <Slide pathImage={item?.image?.node?.sourceUrl || ''} alt={item?.alt || ''} />
      )),
    [gallery]
  )

  return (
    <>
      <Box position='relative'>
        <Box position='absolute' top={-109} right={247} display={['none', 'none', 'flex']}>
          <DrumsticksIcon width={182} height={182} />
        </Box>
        <Condition
          match={isWideViewport && teacherChildren !== [] && teacherChildren !== undefined}
        >
          <Slider slidesPerView={2} clName='teacher-slider' spaceBetween={120} centeredSlides loop>
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Condition>

        <Condition
          match={
            !isWideViewport &&
            !isMobileViewport &&
            teacherChildren !== [] &&
            teacherChildren !== undefined
          }
        >
          <Slider
            slidesPerView='auto'
            clName='teacher-slider'
            spaceBetween={120}
            centeredSlides
            loop
          >
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Condition>
      </Box>

      <Box>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Condition
          match={isMobileViewport && teacherChildren !== [] && teacherChildren !== undefined}
        >
          <Slider
            slidesPerView='auto'
            clName='teacher-slider'
            spaceBetween={40}
            allowTouchMove
            loop
          >
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Condition>
      </Box>
    </>
  )
}

export { SliderBlock }
