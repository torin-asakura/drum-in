import React      from 'react'
import uniqid     from 'uniqid'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'

import { Card }   from '../card'
import { getUi }  from '../helpers'

const DesktopCards = ({ connacolData }) => {
  const getCount = (number: number): string => `0${number}`
  return (
    <Row
      display={['none', 'none', 'flex']}
      justifyContent='space-between'
      flexWrap={{ _: 'nowrap', tablet: 'nowrap', laptop: 'wrap', wide: 'nowrap' }}
    >
      {connacolData?.individualCourseData.hero.courseConditions.map(({ number, description }) => (
        <Box
          key={uniqid()}
          flexDirection='column'
          style={{ transform: `rotate(${getUi(getCount(number)).rotate}deg)` }}
        >
          <Layout
            flexBasis={getUi(getCount(number)).valueTopIndentation}
            display={['none', 'none', 'flex']}
          />
          <Card counter={getCount(number)} text={description} />
        </Box>
      ))}
    </Row>
  )
}

export { DesktopCards }
