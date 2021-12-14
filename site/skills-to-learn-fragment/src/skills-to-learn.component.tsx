import React                 from 'react'

import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { before }            from '@site/data'
import { after }             from '@site/data'
import { firstMobileBlock }  from '@site/data'
import { secondMobileBlock } from '@site/data'
import { thirdMobileBlock }  from '@site/data'

import { ImageBlock }        from './image-block'

import { Skills }            from './skills'

const SkillsToLearn = () => (
  <Box width={['320px', '320px', '100%']} border='1px solid black'>
    <Column style={{ border: '1px solid black' }} width='100%' display={['none', 'none', 'flex']}>
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <Layout flexBasis={60} flexShrink={0} />
          <Skills items={before} />
        </Column>
        <Layout flexBasis={215} flexShrink={0} />
        <Layout flexBasis={520} />
        <Column>
          <ImageBlock />
          <Layout flexBasis={275} flexShrink={0} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
      </Row>
      <Layout flexBasis={40} flexShrink={0} />
      <Row>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <ImageBlock />
          <Layout flexBasis={620} flexShrink={0} />
        </Column>
        <Layout flexBasis={140} flexShrink={0} />
        <Layout flexBasis={300} />
        <Column>
          <Skills items={after} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
      </Row>
    </Column>
    <Column display={['flex', 'flex', 'none']}>
      <Skills items={firstMobileBlock} />
      <ImageBlock />
      <Skills items={secondMobileBlock} />
      <ImageBlock />
      <Skills items={thirdMobileBlock} />
      <ImageBlock />
      <Layout flexBasis={30} />
    </Column>
  </Box>
)

export { SkillsToLearn }
