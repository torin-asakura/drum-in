import React               from 'react'
import { FC }              from 'react'

import { OpenOvalIcon }    from '@ui/icons'
import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'

import { AdvantagesProps } from './advantages.interfaces'
import { DesktopCards }    from './desktop-cards'
import { MobileCards }     from './mobile-cards'

const AdvantagesBlock: FC<AdvantagesProps> = ({ connacolData }) => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[0, 0, 40]} flexShrink={0} />
      <Column width='100%' alignItems={['start', 'start', 'center']}>
        <Layout flexBasis={[32, 72, 112]} flexShrink={0} />
        <Box position='relative' width='100%' justifyContent={['start', 'start', 'center']}>
          <Layout flexBasis={[20, 20, 0]} flexShrink={0} />
          <Box>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'mild', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {connacolData?.individualCourseData?.hero?.cta}
            </Text>
          </Box>
          <Box display={['none', 'none', 'flex']} position='absolute' top={-50} right={520}>
            <OpenOvalIcon width={421} height={150} />
          </Box>
        </Box>
        <Layout flexBasis={{ _: 24, tablet: 40, laptop: 190, wide: 190 }} flexShrink={0} />
        <DesktopCards connacolData={connacolData} />
        <MobileCards connacolData={connacolData} />
        <Layout flexBasis={[32, 60, 190, 190]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
)

export { AdvantagesBlock }
