import React           from 'react'
import { Children }    from 'react'
import { useMemo }     from 'react'

import { Condition }   from '@ui/condition'
import { Box }         from '@ui/layout'
import { Slider }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

import { Item }        from '../item'
import { useStudents } from '../../data'

const CardsSwiper = () => {
  const students = useStudents()?.students?.cardsStudents

  const studentsSliderChildren = useMemo(
    () =>
      students?.map(({ name, age, specialization, description }) => (
        <Item fullName={name} age={age} profession={specialization} description={description} />
      )),
    [students]
  )

  return (
    <Box display={['flex', 'flex', 'none']}>
      <Condition match={studentsSliderChildren !== [] && studentsSliderChildren !== undefined}>
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
      </Condition>
    </Box>
  )
}
export { CardsSwiper }
