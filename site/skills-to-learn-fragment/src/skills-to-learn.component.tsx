import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { ImageBlock } from './image-block'

import { Skills }     from './skills'

const SkillsToLearn = () => {
  const before = [
    ['header', 'main'],
    ['header1', 'main1'],
  ]
  const after = [
    ['header2', 'main2'],
    ['header3', 'main3'],
    ['header41', 'main4'],
  ]
  return (
    <Box width={['320px', '320px', '1440px']} border='1px solid black'>
      <Column style={{ border: '1px solid black' }} width='100%' display={['none', 'none', 'flex']}>
        <Row style={{ border: '1px solid black' }}>
          <Layout flexBasis={120} flexShrink={0} />
          <Column>
            <Layout flexBasis={60} flexShrink={0} />
            <Skills skills={before} />
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
            <Skills skills={after} />
          </Column>
          <Layout flexBasis={120} flexShrink={0} />
        </Row>
      </Column>
      {/*  <Column display={['flex', 'flex', 'none']}>
      <Layout height='480px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Skills />
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <ImageBlock />
      <Layout height='480px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Skills />
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout height='480px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Skills />
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <ImageBlock />
      <Layout height='480px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Skills />
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout height='480px'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Skills />
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <ImageBlock />
      <Layout height='30px' />
    </Column> */}
    </Box>
  )
}

export { SkillsToLearn }
