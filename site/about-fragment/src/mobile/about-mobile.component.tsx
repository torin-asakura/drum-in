import React               from 'react'

import { Box }             from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Column }          from '@ui/layout'
import { Row }               from '@ui/layout'

import { TextComponent }   from './text.component'
import { SliderComponent } from './slider.component'

const AboutMobile = () => {
  //TODO add interfaces, move text component to ui
  return (
    <Box width='320px' height='1595px' border='1px solid black'>
      <Column width='100%'>
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column>
            <Layout flexBasis={25} flexShrink={0} />
            <TextComponent
              height='25px'
              width='262px'
              display={'none'}
              headerWidth={0}
              headerHeight={0}
              mainHeight='25px'
              mainWidth='262px'
            />
            <Layout flexBasis={12} flexShrink={0} />
            <TextComponent
              height='755px'
              width='233px'
              display={'none'}
              headerWidth={0}
              headerHeight={0}
              mainHeight='755px'
              mainWidth='233px'
            />
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout flexBasis={20} flexShrink={0} />
        <SliderComponent height='320px' width='320px' marginV='10px' />
        <Layout flexBasis={20}/>
        <Row>
        <Layout flexBasis={44} flexShrink={0}/>
        <TextComponent
              height='376px'
              width='237px'
              display={'none'}
              headerWidth={0}
              headerHeight={0}
              mainHeight='376px'
              mainWidth='237px'
            />
            <Layout flexBasis={44} flexShrink={0}/>
            </Row>
            <Layout flexBasis={15} flexShrink={0} />
            <Row>
             <Layout flexBasis={44} flexShrink={0}/> 
             <TextComponent
              height='25px'
              width='129px'
              display={'none'}
              headerWidth={0}
              headerHeight={0}
              mainHeight='25px'
              mainWidth='129px'
            />
             <Layout flexBasis={44} flexShrink={0}/>        
            </Row>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}
export { AboutMobile }
