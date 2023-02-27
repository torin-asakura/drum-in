import React                                                   from 'react'
import { Children }                                            from 'react'
import { useEffect }                                           from 'react'
import { useState }                                            from 'react'
import { useMemo }                                             from 'react'

import { ProgramOpeningTheRhythm as PProgramOpeningTheRhythm } from '@shared/data'
import { Box }                                                 from '@ui/layout'
import { Layout }                                              from '@ui/layout'
import { Slider }                                              from '@ui/slider'
import { SwiperSlide }                                         from '@ui/slider'
import { useMockedProgramOpeningTheRhythm }                    from '@shared/data'

import { Slide }                                               from './slide'
import { getUi }                                               from '../helpers'

const MobileList = () => {
  const { programOpeningTheRhythm: programOpeningTheRhythmData } =
    useMockedProgramOpeningTheRhythm()
  const [programOpeningTheRhythm, setProgramOpeningTheRhythm] = useState<
    PProgramOpeningTheRhythm[]
  >(programOpeningTheRhythmData)

  useEffect(() => {
    setProgramOpeningTheRhythm(programOpeningTheRhythmData)
    // eslint-disable-next-line
  }, [])

  const programOpeningTheRhythmChildren = useMemo(
    () =>
      programOpeningTheRhythm.map(({
        forWhom,
        level,
        desc,
        quantityVideoLessons,
        quantityLiveBroadcast,
        quantityMonths,
        textMonths,
        itemId,
      }) => (
        <Slide
          forWhom={forWhom}
          level={level}
          desc={desc}
          squareRotate={getUi(itemId).squareRotateMobile}
          squarePositionX={getUi(itemId).squarePositionXMobile}
          squarePositionY={getUi(itemId).squarePositionYMobile}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={getUi(itemId).rectangleRotateMobile}
          rectanglePositionX={getUi(itemId).rectanglePositionXMobile}
          rectanglePositionY={getUi(itemId).rectanglePositionYMobile}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={getUi(itemId).rectangleColor}
          circlePositionX={getUi(itemId).circlePositionXMobile}
          circlePositionY={getUi(itemId).circlePositionYMobile}
          quantityLiveBroadcast={quantityLiveBroadcast}
        />
      )),
    [programOpeningTheRhythm]
  )

  return (
    <Box display={['flex', 'flex', 'none']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Slider
        clName='program-slider'
        spaceBetween={16}
        slidesPerView='auto'
        progressbar
        autoHeight
        loop
      >
        {Children.map(programOpeningTheRhythmChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Slider>
    </Box>
  )
}

export { MobileList }
