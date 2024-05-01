import React                from 'react'
import { FC }               from 'react'
import { Children }         from 'react'
import { useMemo }          from 'react'

import { Condition }        from '@ui/condition'
import { Row }              from '@ui/layout'
import { Slider }           from '@ui/slider'
import { SwiperSlide }      from '@ui/slider'

import { Card }             from '../card'
import { MobileCardsProps } from './mobile-cards.interfaces'

const MobileCards: FC<MobileCardsProps> = ({ connacolData }) => {
  const getCount = (number?: number | null): string => `0${number}`

  const advantagesChildren = useMemo(
    () =>
      connacolData?.individualCourseData?.hero?.courseConditions?.map((element) => (
        <Card counter={getCount(element?.number)} text={element?.description} />
      )),
    [connacolData]
  )

  return (
    <Row display={['flex', 'flex', 'none']}>
      <Condition match={advantagesChildren !== undefined && advantagesChildren !== []}>
        <Slider
          clName='advantages-slider'
          spaceBetween={20}
          slidesOffsetBefore={20}
        slidesPerView='auto'
          slidesOffsetAfter={20}
        >
          {Children.map(advantagesChildren, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Slider>
      </Condition>
    </Row>
  )
}

export { MobileCards }
