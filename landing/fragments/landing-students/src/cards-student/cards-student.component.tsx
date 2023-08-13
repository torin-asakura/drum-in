import React               from 'react'
import { Children }        from 'react'
import { useMemo }         from 'react'

import { Condition }       from '@ui/condition'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Slider }          from '@ui/slider'
import { SwiperSlide }     from '@ui/slider'

import { BackgroundBlock } from './background'
import { CardsSwiper }     from './cards-swiper'
import { Item }            from './item'
import { useStudents }     from '../data'
import { getUi }           from '../helpers'

const CardsStudent = () => {
  const students = useStudents()?.students?.cardsStudents

  const studentsSliderChildren = useMemo(
    () =>
      students?.map(({ name, age, specialization, firstIcon, secondIcon, description }, index) => (
        <Item
          fullName={name}
          age={age}
          profession={specialization}
          description={description}
          urlFirstIcon={firstIcon.sourceUrl}
          urlSecondIcon={secondIcon.sourceUrl}
          verticalPositionFirstIcon={getUi(index).verticalPositionFirstIcon}
          horizontalPositionFirstIcon={getUi(index).horizontalPositionFirstIcon}
          verticalPositionSecondIcon={getUi(index).verticalPositionSecondIcon}
          horizontalPositionSecondIcon={getUi(index).horizontalPositionSecondIcon}
          rotateCard={getUi(index).rotateCard}
        />
      )),
    [students]
  )

  return (
    <>
      <Column display={['none', 'none', 'flex']}>
        <Row>
          <Condition match={studentsSliderChildren !== [] && studentsSliderChildren !== undefined}>
            <Slider
                clName='students-slider-desktop'
                spaceBetween={40}
                slidesPerView='auto'
                slidesOffsetAfter={40}
                slidesOffsetBefore={40}
                mousewheel
                grabCursor
                forceToAxis
            >
              {Children.map(studentsSliderChildren, (child) => (
                <SwiperSlide>{child}</SwiperSlide>
              ))}
            </Slider>
          </Condition>
        </Row>
        <Layout flexBasis={[64, 70, 42]} />
        <BackgroundBlock />
      </Column>
      <CardsSwiper />
    </>
  )
}
export { CardsStudent }
