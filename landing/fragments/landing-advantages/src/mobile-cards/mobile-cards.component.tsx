import React            from 'react'
import { Children }     from 'react'
import { useMemo }      from 'react'

import { Condition }    from '@ui/condition'
import { Row }          from '@ui/layout'
import { Slider }       from '@ui/slider'
import { SwiperSlide }  from '@ui/slider'

import { Card }         from '../card'
import { useAdvantages } from '../data'

const MobileCards = () => {
  const advantages = useAdvantages()?.advantagesCourse?.skills

  const advantagesChildren = useMemo(
    () => advantages?.map(({ counter, item }) => <Card counter={counter} text={item} />),
    [advantages]
  )

  return (
    <Row display={['flex', 'flex', 'none']}>
      <Condition match={advantagesChildren !== undefined && advantagesChildren !== []}>
        <Slider
          clName='advantages-slider'
          spaceBetween={16}
          slidesPerView='auto'
          slidesOffsetAfter={40}
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
