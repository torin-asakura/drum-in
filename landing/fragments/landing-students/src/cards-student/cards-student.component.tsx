import React                 from 'react'
import { FC }                from 'react'
import { Children }          from 'react'
import { useMemo }           from 'react'

import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Slider }            from '@ui/slider'
import { SwiperSlide }       from '@ui/slider'

import { BackgroundBlock }   from './background'
import { CardsStudentProps } from './cards-student.interfaces'
import { CardsSwiper }       from './cards-swiper'
import { Item }              from './item'
import { getUi }             from '../helpers'

const CardsStudent: FC<CardsStudentProps> = ({ studentCardsData }) => {
  const studentsSliderChildren = useMemo(
    () =>
      studentCardsData?.map((item, index) => (
        <Item
          fullName={item?.title}
          age={item?.firstBadge}
          profession={item?.secondBadge}
          description={item?.description}
          urlFirstIcon={item?.leftIcon?.node?.sourceUrl}
          urlSecondIcon={item?.rightIcon?.node?.sourceUrl}
          verticalPositionFirstIcon={getUi(index).verticalPositionFirstIcon}
          horizontalPositionFirstIcon={getUi(index).horizontalPositionFirstIcon}
          verticalPositionSecondIcon={getUi(index).verticalPositionSecondIcon}
          horizontalPositionSecondIcon={getUi(index).horizontalPositionSecondIcon}
          rotateCard={getUi(index).rotateCard}
        />
      )),
    [studentCardsData]
  )

  return (
    <>
      <Column>
        <Row display={['none', 'flex', 'flex']}>
          <Slider
            clName='students-slider-desktop'
            spaceBetween={40}
            slidesPerView='auto'
            slidesOffsetAfter={-40}
            slidesOffsetBefore={40}
            mousewheel
            grabCursor
            forceToAxis
          >
            {Children.map(studentsSliderChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Row>
        <Row display={['flex', 'none', 'none']}>
          <Slider
            clName='students-slider-desktop'
            spaceBetween={20}
            slidesPerView='auto'
            slidesOffsetAfter={20}
            slidesOffsetBefore={20}
            mousewheel
            grabCursor
            forceToAxis
          >
            {Children.map(studentsSliderChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Row>
        <Layout flexBasis={[0, 0, 42]} />
        <BackgroundBlock />
      </Column>
      <CardsSwiper />
    </>
  )
}
export { CardsStudent }
