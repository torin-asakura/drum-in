import React          from 'react'

import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'

import { Item }       from './item'
import { useProgram } from '../data'
import { getUi }      from '../helpers'

const DesktopList = () => {
  const program = useProgram()?.programOpeningTheRhythm?.levelItem

  return (
    <Column display={['none', 'none', 'flex']} width='100%'>
      {program?.map((
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
        <>
          <Item
            forWhom={forWhoThisLevel}
            level={nameLevel}
            desc={descriptionLevel}
            titleHoverBlock={titleHoverBlock}
            listNecessaryKnowledge={listNecessaryKnowledge}
            squareRotate={getUi(index).squareRotate}
            squarePositionX={getUi(index).squarePositionX}
            squarePositionY={getUi(index).squarePositionY}
            quantityVideoLessons={quantityVideoLessons}
            circlePositionX={getUi(index).circlePositionX}
            circlePositionY={getUi(index).circlePositionY}
            quantityLiveBroadcast={quantityLiveBroadcast}
            rectangleRotate={getUi(index).rectangleRotate}
            rectanglePositionX={getUi(index).rectanglePositionX}
            rectanglePositionY={getUi(index).rectanglePositionY}
            quantityMonths={quantityMonths}
            textMonths={textMonths}
            rectangleColor={getUi(index).rectangleColor}
          />
          <Layout flexBasis={40} />
        </>
      ))}
    </Column>
  )
}

export { DesktopList }
