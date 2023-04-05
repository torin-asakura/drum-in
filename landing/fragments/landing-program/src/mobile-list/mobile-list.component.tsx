import React           from 'react'
import { Children }    from 'react'
import { useMemo }     from 'react'

import { Condition }   from '@ui/condition'
import { Box }         from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Slider }      from '@ui/slider'
import { SwiperSlide } from '@ui/slider'

import { Slide }       from './slide'
import { useProgram }  from '../data'
import { getUi }       from '../helpers'

const MobileList = () => {
  const program = useProgram()?.programOpeningTheRhythm?.levelItem

  const programOpeningTheRhythmChildren = useMemo(
    () =>
      program?.map((
        {
          descriptionLevel,
          forWhoThisLevel,
          listNecessaryKnowledge,
          nameLevel,
          quantityLiveBroadcast,
          quantityMonths,
          quantityVideoLessons,
          titleHoverBlock,
          textMonths,
        },
        index
      ) => (
        <Slide
          forWhom={forWhoThisLevel}
          level={nameLevel}
          desc={descriptionLevel}
          squareRotate={getUi(index).squareRotateMobile}
          squarePositionX={getUi(index).squarePositionXMobile}
          squarePositionY={getUi(index).squarePositionYMobile}
          quantityVideoLessons={quantityVideoLessons}
          rectangleRotate={getUi(index).rectangleRotateMobile}
          rectanglePositionX={getUi(index).rectanglePositionXMobile}
          rectanglePositionY={getUi(index).rectanglePositionYMobile}
          quantityMonths={quantityMonths}
          textMonths={textMonths}
          rectangleColor={getUi(index).rectangleColor}
          circlePositionX={getUi(index).circlePositionXMobile}
          circlePositionY={getUi(index).circlePositionYMobile}
          quantityLiveBroadcast={quantityLiveBroadcast}
        />
      )),
    [program]
  )

  return (
    <Box display={['flex', 'flex', 'none']}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Condition
        match={
          programOpeningTheRhythmChildren !== [] && programOpeningTheRhythmChildren !== undefined
        }
      >
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
      </Condition>
    </Box>
  )
}

export { MobileList }
