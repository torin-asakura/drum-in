import React                         from 'react'
import { useEffect }                 from 'react'
import { useState }                  from 'react'

import { Advantages as AAdvantages } from '@shared/data'
import { Box }                       from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { useMockedAdvantages }       from '@shared/data'

import { Card }                       from '../card'
import { getUi }                      from '../helpers'

const DesktopCards = () => {
  const { advantages: advantagesData } = useMockedAdvantages()
  const [advantages, setAdvantages] = useState<AAdvantages[]>([])

  useEffect(() => {
    setAdvantages(advantagesData)
    // eslint-disable-next-line
  }, [])

  return (
    <Row
      display={['none', 'none', 'flex']}
      justifyContent='space-between'
      flexWrap={{ _: 'nowrap', tablet: 'nowrap', laptop: 'wrap', wide: 'nowrap' }}
    >
      {advantages.map(({ counter, text }) => (
        <Box flexDirection='column' style={{ transform: `rotate(${getUi(counter).rotate}deg)` }}>
          <Layout
            flexBasis={getUi(counter).valueTopIndentation}
            display={['none', 'none', 'flex']}
          />
          <Card counter={counter} text={text} />
        </Box>
      ))}
    </Row>
  )
}

export { DesktopCards }
