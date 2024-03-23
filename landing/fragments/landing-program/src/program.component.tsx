import React           from 'react'

import { Box }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Text }        from '@ui/text'

import { DesktopList } from './desktop-list'
import { MobileList }  from './mobile-list'

const ProgramBlock = ({ openingTheRhythm }) => (
  <Row justifyContent='center' flexWrap='wrap'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%' alignItems={['start', 'start', 'center']}>
        <Layout flexBasis={[32, 75, 120]} />
        <Box>
          <Text
            textTransform='uppercase'
            textAlign={['left', 'left', 'center']}
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['regular', 'semiExtra', 'gigantic']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {openingTheRhythm?.details.title}
          </Text>
        </Box>
        <Layout flexBasis={[8, 16, 24]} />
        <Box>
          <Text
            width={['100%', 450, 595]}
            textAlign={['left', 'left', 'center']}
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'large']}
            lineHeight='primary'
            color='text.transparentSmokyWhite'
          >
            {openingTheRhythm?.details.description}
          </Text>
        </Box>
        <Layout flexBasis={[36, 58, 80]} />
        <DesktopList openingTheRhythm={openingTheRhythm} />
        <Layout display={['none', 'none', 'flex']} flexBasis={[32, 75, 80]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} />
    </Box>
    <Column>
      <MobileList openingTheRhythm={openingTheRhythm} />
      <Layout display={['flex', 'flex', 'none']} flexBasis={[32, 75, 80]} />
    </Column>
  </Row>
)

export { ProgramBlock }
