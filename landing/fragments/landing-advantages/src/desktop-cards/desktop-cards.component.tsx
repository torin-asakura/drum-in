import React                 from 'react'
import uniqid                from 'uniqid'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'

import { Card }              from '../card'
import { DesktopCardsProps } from './desktop-cards.interfaces'
import { getUi }             from '../helpers'

const DesktopCards: FC<DesktopCardsProps> = ({ connacolData }) => {
  const getCount = (number?: number | null): string => `0${number}`
  return (
    <Row
      display={['none', 'none', 'flex']}
      justifyContent='space-between'
      flexWrap={{ _: 'nowrap', tablet: 'nowrap', laptop: 'wrap', wide: 'nowrap' }}
    >
      {connacolData?.individualCourseData?.hero?.courseConditions?.map((element) => (
        <Box
          key={uniqid()}
          flexDirection='column'
          style={{ transform: `rotate(${getUi(getCount(element?.number)).rotate}deg)` }}
        >
          <Layout
            flexBasis={getUi(getCount(element?.number)).valueTopIndentation}
            display={['none', 'none', 'flex']}
          />
          <Card counter={getCount(element?.number)} text={element?.description} />
        </Box>
      ))}
    </Row>
  )
}

export { DesktopCards }
