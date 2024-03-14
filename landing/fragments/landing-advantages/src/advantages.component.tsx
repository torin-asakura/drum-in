import React             from 'react'

import { OpenOvalIcon }  from '@ui/icons'
import { Box }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'
import { Text }          from '@ui/text'

import { DesktopCards }  from './desktop-cards'
import { MobileCards }   from './mobile-cards'



const AdvantagesBlock = ({connacolData}) => {


  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%' alignItems={['start', 'start', 'center']}>
          <Layout flexBasis={[32, 72, 112]} flexShrink={0} />
          <Box position='relative'>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'mild', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {connacolData?.individualCourseData.hero?.cta}
            </Text>
            <Box display={['none', 'none', 'flex']} position='absolute' right={-23} top={-47}>
              <OpenOvalIcon width={421} height={150} />
            </Box>
          </Box>
          <Layout flexBasis={{ _: 24, tablet: 40, laptop: 85, wide: 179 }} flexShrink={0} />
          <DesktopCards connacolData={connacolData}/>
          <MobileCards connacolData={connacolData}/>
          <Layout flexBasis={[32, 60, 190]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { AdvantagesBlock }
