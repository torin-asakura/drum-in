import React                   from 'react'
import { Children }            from 'react'
import { useMemo }             from 'react'
import { useEffect }           from 'react'
import { useState }            from 'react'

import { Teacher as TTeacher } from '@shared/data'
import { DrumsticksIcon }      from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Slider }              from '@ui/slider'
import { SwiperSlide }         from '@ui/slider'
import { useMockedTeacher }    from '@shared/data'

import { Slide }               from './slide'

const SliderBlock = () => {
  const { teacher: teacherData } = useMockedTeacher()
  const [teacher, setTeacher] = useState<TTeacher[]>(teacherData)

  useEffect(() => {
    setTeacher(teacherData)
    // eslint-disable-next-line
  }, [])

  const teacherChildren = useMemo(
    () => teacher.map(({ pathImage }) => <Slide pathImage={pathImage} />),
    [teacher]
  )

  return (
    <>
      <Box position='relative' display={['none', 'none', 'flex']}>
        <Box position='absolute' top={-109} right={247}>
          <DrumsticksIcon width={182} height={182} />
        </Box>
        <Slider
          slidesPerView='auto'
          clName='teacher-slider'
          centeredSlides
          spaceBetween={197}
          loop
          grabCursor
        >
          {Children.map(teacherChildren, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Slider>
      </Box>
      <Box display={['flex', 'flex', 'none']}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Slider slidesPerView='auto' clName='teacher-slider' spaceBetween={20} loop>
          {Children.map(teacherChildren, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Slider>
      </Box>
    </>
  )
}

export { SliderBlock }
