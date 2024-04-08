import React                 from 'react'
import uniqid                from 'uniqid'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'

import { Card }              from '../card'
import { DesktopCardsProps } from './desktop-cards.interfaces'
import { getUi }             from '../helpers'

export const getLayout = (index) => {
  if (index % 2 === 1 && index !== 3) {
    return 80
  }
  if (index === 3) {
    return 180
  }
  return 0
}

const DesktopCards: FC<DesktopCardsProps> = ({ connacolData }) => {
  const getCount = (number?: number | null): string => `0${number}`
  return (
    <Row
      justifyContent='space-between'
      display={['none', 'none', 'flex']}
      flexWrap={{ _: 'nowrap', tablet: 'nowrap', laptop: 'nowrap', wide: 'nowrap' }}
      height={[300, 300, 300, 500]}
    >
      <Layout flexBasis={[0, 0, 0, 80]} />
      {connacolData?.individualCourseData?.hero?.courseConditions?.map((element, index) => (
        <Box
          fill
          position='relative'
          key={uniqid()}
          style={{ transform: `rotate(${getUi(getCount(element?.number)).rotate}deg)` }}
        >
          <Box position='absolute' fill zIndex={index}>
            <Column height={500}>
              <Layout flexBasis={getLayout(index)} />
              <Card counter={getCount(element?.number)} text={element?.description} />
            </Column>
          </Box>
        </Box>
      ))}
    </Row>
  )
}

export { DesktopCards }
