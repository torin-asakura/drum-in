import React               from 'react'
import { FC }              from 'react'
import { Children }        from 'react'
import { useMemo }         from 'react'

import { Condition }       from '@ui/condition'
import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Slider }          from '@ui/slider'
import { SwiperSlide }     from '@ui/slider'

import { MobileListProps } from './mobile-list.interfaces'
import { Slide }           from './slide'
import { getUi }           from '../helpers'

// TODO: tooltip for levels

const MobileList: FC<MobileListProps> = ({ openingTheRhythm }) => {
  const programOpeningTheRhythmChildren = useMemo(
    () =>
      openingTheRhythm?.details?.levels?.map((item, index) => (
        <Slide
          forWhom={item?.target}
          level={item?.level}
          desc={item?.content}
          squareRotate={getUi(index).squareRotateMobile}
          squarePositionX={getUi(index).squarePositionXMobile}
          squarePositionY={getUi(index).squarePositionYMobile}
          quantityVideoLessons={item?.videoTrainingsNumber}
          rectangleRotate={getUi(index).rectangleRotateMobile}
          rectanglePositionX={getUi(index).rectanglePositionXMobile}
          rectanglePositionY={getUi(index).rectanglePositionYMobile}
          quantityMonths={item?.lengthOfCourseInMonths}
          rectangleColor={getUi(index).rectangleColor}
          circlePositionX={getUi(index).circlePositionXMobile}
          circlePositionY={getUi(index).circlePositionYMobile}
          quantityLiveBroadcast={item?.liveTrainingsNumber}
        />
      )),
    [openingTheRhythm]
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
          slidesOffsetAfter={20}
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
