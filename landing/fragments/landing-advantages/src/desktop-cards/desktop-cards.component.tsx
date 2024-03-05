import React             from 'react'
import uniqid            from 'uniqid'

import { Box }           from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'

import { Card }          from '../card'
import { useAdvantages } from '../data'
import { getUi }         from '../helpers'

const DesktopCards = () => {
  const advantages = useAdvantages()?.advantagesCourse?.skills

  return (
    <Row
      display={['none', 'none', 'flex']}
      justifyContent='space-between'
      flexWrap={{ _: 'nowrap', tablet: 'nowrap', laptop: 'wrap', wide: 'nowrap' }}
    >
      {advantages?.map(({ counter, item }) => (
        <Box
          key={uniqid()}
          flexDirection='column'
          style={{ transform: `rotate(${getUi(counter).rotate}deg)` }}
        >
          <Layout
            flexBasis={getUi(counter).valueTopIndentation}
            display={['none', 'none', 'flex']}
          />
          <Card counter={counter} text={item} />
        </Box>
      ))}
    </Row>
  )
}

export { DesktopCards }
