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
  <Box width={['320px', '320px', '100%']}>
    <Column width='100%' alignItems='center' display={['none', 'none', 'flex']}>
      <Layout width='1440px'>
        <Layout>
          <Layout flexBasis={100} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={60} flexShrink={0} />
            <Skills items={before} />
          </Column>
          <Layout flexBasis={55} flexShrink={0} />
          <Column width='100%' alignItems='center'>
            <Box backgroundColor='dullRed' height='60px' width='375px' />
            <Layout width='490px' height='500px'>
              <ImageBlock />
            </Layout>
            <Box backgroundColor='dullRed' height='60px' width='375px' />
          </Column>
        </Layout>
      </Layout>
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Layout>
          <Column width='100%' alignItems='center'>
            <Box backgroundColor='dullRed' height='60px' width='375px' />
            <Layout width='490px' height='500px'>
              <ImageBlock />
            </Layout>
            <Box backgroundColor='dullRed' height='60px' width='375px' />
          </Column>
          <Layout flexBasis={140} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={60} flexShrink={0} />
            <Skills items={after} />
          </Column>
          <Layout flexBasis={55} flexShrink={0} />
        </Layout>
      </Layout>
    </Column>
    <Layout display={['flex', 'flex', 'none']}>
      <Layout width='115px' overflow='visible' style={{ zIndex: 1 }}>
        <Column>
          <Row>
            <Layout flexBasis={15} flexShrink={0} />
            <Skills items={firstMobileBlock} />
            <Layout flexBasis={15} flexShrink={0} />
          </Row>
          <Layout flexBasis={20} flexShrink={0} />
          <Layout width='320px' height='320px'>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={20} flexShrink={0} />
          <Row>
            <Layout flexBasis={15} flexShrink={0} />
            <Skills items={secondMobileBlock} />
            <Layout flexBasis={15} flexShrink={0} />
          </Row>
          <Layout flexBasis={20} flexShrink={0} />
          <Layout width='320px' height='320px'>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={20} flexShrink={0} />
          <Row>
            <Layout flexBasis={15} flexShrink={0} />
            <Skills items={thirdMobileBlock} />
            <Layout flexBasis={15} flexShrink={0} />
          </Row>
          <Layout width='320px' height='320px'>
            <ImageBlock />
          </Layout>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout flexBasis={30} />
        </Column>
      </Layout>
      <Box width='100px' backgroundColor='transparent' />
      <Box width='105px' backgroundColor='dullRed' />
    </Layout>
  </Box>
)

export { SkillsToLearn }
