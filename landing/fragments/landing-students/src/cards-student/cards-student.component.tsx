import React                                 from 'react'
import { Children }                          from 'react'
import { useMemo }                           from 'react'
import { useEffect }                         from 'react'
import { useState }                          from 'react'

import { StudentsSlider as SStudentsSlider } from '@shared/data'
import { Column }                            from '@ui/layout'
import { Layout }                            from '@ui/layout'
import { Row }                               from '@ui/layout'
import { Slider }                            from '@ui/slider'
import { SwiperSlide }                       from '@ui/slider'
import { useMockedStudentsSlider }           from '@shared/data'

import { BackgroundBlock }                   from './background'
import { CardsSwiper }                       from './cards-swiper'
import { Item }                              from './item'
import { getUi }                             from '../helpers'

const CardsStudent = () => {
  const { studentsSlider: studentsSliderData } = useMockedStudentsSlider()
  const [studentsSlider, setStudentsSlider] = useState<SStudentsSlider[]>(studentsSliderData)

  useEffect(() => {
    setStudentsSlider(studentsSliderData)
    // eslint-disable-next-line
  }, [])

  const studentsSliderChildren = useMemo(
    () =>
      studentsSlider.map(({ fullName, age, profession, description, itemId }) => (
        <Item
          fullName={fullName}
          age={age}
          profession={profession}
          description={description}
          itemId={itemId}
          verticalPositionFirstIcon={getUi(itemId).verticalPositionFirstIcon}
          horizontalPositionFirstIcon={getUi(itemId).horizontalPositionFirstIcon}
          verticalPositionSecondIcon={getUi(itemId).verticalPositionSecondIcon}
          horizontalPositionSecondIcon={getUi(itemId).horizontalPositionSecondIcon}
          rotateCard={getUi(itemId).rotateCard}
        />
      )),
    [studentsSlider]
  )

  return (
    <>
      <Column display={['none', 'none', 'flex']}>
        <Row>
          <Slider clName='students-slider-desktop' spaceBetween={40} slidesPerView='auto'>
            {Children.map(studentsSliderChildren, (child) => (
              <SwiperSlide>{child}</SwiperSlide>
            ))}
          </Slider>
        </Row>
        <Layout flexBasis={[64, 70, 42]} />
        <BackgroundBlock />
      </Column>
      <CardsSwiper />
    </>
  )
}
export { CardsStudent }
