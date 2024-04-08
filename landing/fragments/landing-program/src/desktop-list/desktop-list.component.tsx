import React                from 'react'
import uniqid               from 'uniqid'
import { FC }               from 'react'

import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'

import { DesktopListProps } from './desktop-list.interfaces'
import { Item }             from './item'
import { getUi }            from '../helpers'

const DesktopList: FC<DesktopListProps> = ({ openingTheRhythm }) => (
  <Column display={['none', 'none','flex', 'flex']} width='100%'>
    {openingTheRhythm?.details?.levels?.map((item, index) => (
      <React.Fragment key={uniqid()}>
        <Item
          forWhom={item?.target}
          level={item?.level}
          desc={item?.content}
          listNecessaryKnowledge={item?.tooltip}
          squareRotate={getUi(index).squareRotate}
          squarePositionX={getUi(index).squarePositionX}
          squarePositionY={getUi(index).squarePositionY}
          quantityVideoLessons={item?.videoTrainingsNumber}
          circlePositionX={getUi(index).circlePositionX}
          circlePositionY={getUi(index).circlePositionY}
          quantityLiveBroadcast={item?.liveTrainingsNumber}
          rectangleRotate={getUi(index).rectangleRotate}
          rectanglePositionX={getUi(index).rectanglePositionX}
          rectanglePositionY={getUi(index).rectanglePositionY}
          quantityMonths={item?.lengthOfCourseInMonths}
          rectangleColor={getUi(index).rectangleColor}
        />
        <Layout flexBasis={40} />
      </React.Fragment>
    ))}
  </Column>
)

export { DesktopList }
