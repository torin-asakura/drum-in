import React                from 'react'
import { FC }               from 'react'
import { Children }         from 'react'
import { useMemo }          from 'react'

import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Slider }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'

import { Item }             from '../item'
import { CardsSwiperProps } from './cards-swiper.interfaces'

const CardsSwiper: FC<CardsSwiperProps> = ({ studentCardsData }) => {
  const studentsSliderChildren = useMemo(
    () =>
      studentCardsData?.map((item) => (
        <Item
          fullName={item?.title}
          age={item?.firstBadge}
          profession={item?.secondBadge}
          description={item?.description}
        />
      )),
    [studentCardsData]
  )

  return (
    <Box display={['flex', 'none', 'none']}>
      <Condition match={studentsSliderChildren !== [] && studentsSliderChildren !== undefined}>
        <Slider
          clName='students-slider'
          spaceBetween={16}
          slidesOffsetAfter={50}
          slidesOffsetBefore={20}
          slidesPerView='auto'
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
