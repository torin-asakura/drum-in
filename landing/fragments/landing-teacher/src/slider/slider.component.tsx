import React              from 'react'
import { Children }       from 'react'
import { useMemo }        from 'react'

import { Condition }      from '@ui/condition'
import { DrumsticksIcon } from '@ui/icons'
import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Slider }         from '@ui/slider'
import { SwiperSlide }    from '@ui/slider'

import { Slide }          from './slide'
import { useTeacher }     from '../data'

const SliderBlock = () => {
  const teacher = useTeacher()?.teacher.slider

  const teacherChildren = useMemo(
    () => teacher?.map(({ image }) => <Slide pathImage={image.sourceUrl} />),
    [teacher]
  )

  return (
    <>
      <Box position='relative' display={['none', 'none', 'flex']}>
        <Box position='absolute' top={-109} right={247}>
          <DrumsticksIcon width={182} height={182} />
        </Box>
        <Condition match={teacherChildren !== [] && teacherChildren !== undefined}>
          <Slider
            slidesPerView='auto'
            clName='teacher-slider'
            centeredSlides
            spaceBetween={197}
            mousewheel
            forceToAxis
            loop
            grabCursor
          >
            {Children.map(teacherChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Condition>
      </Box>
      <Box display={['flex', 'flex', 'none']}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Condition match={teacherChildren !== [] && teacherChildren !== undefined}>
          <Slider slidesPerView='auto' clName='teacher-slider' spaceBetween={20} loop>
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
