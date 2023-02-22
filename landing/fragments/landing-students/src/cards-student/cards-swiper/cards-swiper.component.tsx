import React                                 from 'react'
import { Children }                          from 'react'
import { useMemo }                           from 'react'
import { useEffect }                         from 'react'
import { useState }                          from 'react'

import { StudentsSlider as SStudentsSlider } from '@shared/data'
import { Box }                               from '@ui/layout'
import { Slider }                            from '@ui/slider'
import { SwiperSlide }                       from '@ui/slider'
import { useMockedStudentsSlider }           from '@shared/data'

import { Item }                              from '../item'

const CardsSwiper = () => {
  const { studentsSlider: studentsSliderData } = useMockedStudentsSlider()
  const [studentsSlider, setStudentsSlider] = useState<SStudentsSlider[]>(studentsSliderData)

  useEffect(() => {
    setStudentsSlider(studentsSliderData)
    // eslint-disable-next-line
  }, [])

  const studentsSliderChildren = useMemo(
    () =>
      studentsSlider.map(({ fullName, age, profession, description }) => (
        <Item fullName={fullName} age={age} profession={profession} description={description} />
      )),
    [studentsSlider]
  )

  return (
    <Box display={['flex', 'flex', 'none']}>
      <Slider
        clName='students-slider'
        spaceBetween={16}
        slidesOffsetAfter={50}
        slidesPerView='auto'
        progressbar
        autoHeight
      >
        {Children.map(studentsSliderChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
    </Box>
  )
}
export { CardsSwiper }
