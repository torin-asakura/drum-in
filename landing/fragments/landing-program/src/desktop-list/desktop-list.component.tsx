import React                                                   from 'react'
import { useEffect }                                           from 'react'
import { useState }                                            from 'react'

import { ProgramOpeningTheRhythm as PProgramOpeningTheRhythm } from '@shared/data'
import { Column }                                              from '@ui/layout'
import { Layout }                                              from '@ui/layout'
import { useMockedProgramOpeningTheRhythm }                    from '@shared/data'

import { Item }                                                from './item'
import { getUi }                                               from '../helpers'

const DesktopList = () => {
  const { programOpeningTheRhythm: programOpeningTheRhythmData } =
    useMockedProgramOpeningTheRhythm()
  const [programOpeningTheRhythm, setProgramOpeningTheRhythm] = useState<
    PProgramOpeningTheRhythm[]
  >([])

  useEffect(() => {
    setProgramOpeningTheRhythm(programOpeningTheRhythmData)
    // eslint-disable-next-line
  }, [])

  return (
    <Column display={['none', 'none', 'flex']} width='100%'>
      {programOpeningTheRhythm.map(({
        forWhom,
        level,
        desc,
        necessaryKnowledge,
        quantityVideoLessons,
        quantityLiveBroadcast,
        quantityMonths,
        textMonths,
        titleHoverBlock,
        listNecessaryKnowledge,
        itemId,
      }) => (
        <>
          <Item
            forWhom={forWhom}
            level={level}
            desc={desc}
            titleHoverBlock={titleHoverBlock}
            listNecessaryKnowledge={listNecessaryKnowledge}
            necessaryKnowledge={necessaryKnowledge}
            squareRotate={getUi(itemId).squareRotate}
            squarePositionX={getUi(itemId).squarePositionX}
            squarePositionY={getUi(itemId).squarePositionY}
            quantityVideoLessons={quantityVideoLessons}
            circlePositionX={getUi(itemId).circlePositionX}
            circlePositionY={getUi(itemId).circlePositionY}
            quantityLiveBroadcast={quantityLiveBroadcast}
            rectangleRotate={getUi(itemId).rectangleRotate}
            rectanglePositionX={getUi(itemId).rectanglePositionX}
            rectanglePositionY={getUi(itemId).rectanglePositionY}
            quantityMonths={quantityMonths}
            textMonths={textMonths}
            rectangleColor={getUi(itemId).rectangleColor}
          />
          <Layout flexBasis={40} />
        </>
      ))}
    </Column>
  )
}

export { DesktopList }
