import React                         from 'react'
import { Children }                  from 'react'
import { useEffect }                 from 'react'
import { useState }                  from 'react'
import { useMemo }                   from 'react'

import { Advantages as AAdvantages } from '@shared/data'
import { Row }                       from '@ui/layout'
import { Slider }                    from '@ui/slider'
import { SwiperSlide }               from '@ui/slider'
import { useMockedAdvantages }       from '@shared/data'

import { Card }                      from '../card'

const MobileCards = () => {
  const { advantages: advantagesData } = useMockedAdvantages()
  const [advantages, setAdvantages] = useState<AAdvantages[]>(advantagesData)

  useEffect(() => {
    setAdvantages(advantagesData)
    // eslint-disable-next-line
  }, [])

  const advantagesChildren = useMemo(
    () => advantages.map(({ counter, text }) => <Card counter={counter} text={text} />),
    [advantages]
  )

  return (
    <Row display={['flex', 'flex', 'none']}>
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
    </Row>
  )
}

export { MobileCards }
