import React               from 'react'

import { Box }             from '@ui/layout'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'

import { TextComponent }   from './text.component'
import { SliderComponent } from './slider.component'

const SkillsToLearnMobile = () => {
  //TODO add interfaces
  return (
    <Box width='320px' border='1px solid black' position='relative' zIndex={1}>
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={25} flexShrink={0} />
        <TextComponent
          height='472px'
          width='279px'
          headerHeight='20px'
          mainHeight='452px'
          mainWidth='279px'
          headerWidth='255px'
        />
        <Layout flexBasis={6} flexShrink={0} />
        <SliderComponent marginY={6} height='320px' width='320px' />
        <Layout flexBasis={5} flexShrink={0} />
        <TextComponent
          height='435px'
          width='258px'
          headerHeight='20px'
          headerWidth='238px'
          mainHeight='415px'
          mainWidth='258px'
        />
        <Layout flexBasis={10} flexShrink={0} />
        <TextComponent
          width='258px'
          height='346px'
          headerHeight='20px'
          headerWidth='236px'
          mainHeight='316px'
          mainWidth='258px'
        />
        <Layout flexBasis={20} flexShrink={0} />
        <SliderComponent height='320px' width='320px' marginY={6} />
        <Layout flexBasis={15} flexShrink={0} />
        <TextComponent
          height='425px'
          width='258px'
          headerWidth='236px'
          headerHeight='20px'
          mainHeight='385px'
          mainWidth='258px'
        />
        <Layout flexBasis={15} flexShrink={0} />
        <TextComponent
          height='379px'
          width='264px'
          headerHeight='20px'
          headerWidth='242px'
          mainHeight='339px'
          mainWidth='264px'
        />
        <Layout flexBasis={45} />
        <Box width='320px' height='320px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
      </Column>
      <Box
        width='105px'
        height='100%'
        border='1px solid black'
        position='absolute'
        zIndex={-1}
        left='215px'
      />
    </Box>
  )
}

export { SkillsToLearnMobile }
