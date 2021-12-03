import React              from 'react'

import { Box }            from '@ui/layout'
import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Row }            from '@ui/layout'

import { ImageBlock }     from './image-block'
import { Item }           from './text-block'
import { ListItem }       from './list-item'
import { SliderControls } from './slider-controls'

const SkillsToLearn = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black' position='relative' zIndex={0}>
    <Column style={{ border: '1px solid black' }} width='100%' display={['none', 'none', 'flex']}>
      <Row style={{ border: '1px solid black' }}>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <Layout flexBasis={60} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <ListItem />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item />
          </Layout>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <ListItem />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item />
          </Layout>
        </Column>
        <Layout flexBasis={215} flexShrink={0} />
        <Layout flexBasis={520} />
        <Column>
          <Layout style={{ border: '1px solid black' }} alignItems='center'>
            <Box
              style={{ border: '1px solid black' }}
              width={['104px', '105px', '375px']}
              height='640px'
              backgroundColor='red'
              justifyContent='center'
              alignItems='center'
            >
              <ImageBlock style={{ border: '1px solid black' }} />
            </Box>
          </Layout>
          <Layout flexBasis={275} flexShrink={0} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
      </Row>
      <Layout flexBasis={40} flexShrink={0} />
      <Row>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <Layout style={{ border: '1px solid black' }} alignItems='center'>
            <Box
              style={{ border: '1px solid black' }}
              width={['104px', '105px', '375px']}
              height='640px'
              backgroundColor='red'
              justifyContent='center'
              alignItems='center'
            >
              <ImageBlock style={{ border: '1px solid black' }} />
            </Box>
          </Layout>
          <Layout flexBasis={620} flexShrink={0} />
        </Column>
        <Layout flexBasis={140} flexShrink={0} />
        <Layout flexBasis={300} />
        <Column>
          <Layout style={{ border: '1px solid black' }}>
            <ListItem />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item />
          </Layout>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <ListItem />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item />
          </Layout>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout style={{ border: '1px solid black' }}>
            <ListItem />
            <Layout flexBasis={['11px', '11px', '18px']} />
            <Item />
          </Layout>
          <Layout flexBasis={60} flexShrink={0} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
      </Row>
    </Column>
    <Column display={['flex', 'flex', 'none']}>
      <Layout style={{ position: 'relative' }} height='480px'>
        <Box
          width='105px'
          height='480px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Row>
            <ListItem />
            <Layout flexBasis={11} flexShrink={0} />
            <Item />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout>
        <Column>
          <ImageBlock />
          <Layout style={{ position: 'relative' }} height='30px'>
            <Box
              width='105px'
              height='35px'
              position='absolute'
              zIndex={-1}
              backgroundColor='red'
              left={215}
            />
            <Column width='100%'>
              <Layout flexBasis={10} flexShrink={0} />
              <SliderControls />
              <Layout flexBasis={10} flexShrink={0} />
            </Column>
          </Layout>
        </Column>
      </Layout>
      <Layout style={{ position: 'relative' }} height='480px'>
        <Box
          width='105px'
          height='480px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Row>
            <ListItem />
            <Layout flexBasis={11} flexShrink={0} />
            <Item />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout style={{ position: 'relative' }} height='480px'>
        <Box
          width='105px'
          height='480px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Row>
            <ListItem />
            <Layout flexBasis={11} flexShrink={0} />
            <Item />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout>
        <Column>
          <ImageBlock />
          <Layout style={{ position: 'relative' }} height='30px'>
            <Box
              width='105px'
              height='35px'
              position='absolute'
              zIndex={-1}
              backgroundColor='red'
              left={215}
            />
            <Column width='100%'>
              <Layout flexBasis={10} flexShrink={0} />
              <SliderControls />
              <Layout flexBasis={10} flexShrink={0} />
            </Column>
          </Layout>
        </Column>
      </Layout>
      <Layout style={{ position: 'relative' }} height='480px'>
        <Box
          width='105px'
          height='480px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Row>
            <ListItem />
            <Layout flexBasis={11} flexShrink={0} />
            <Item />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <Layout style={{ position: 'relative' }} height='480px'>
        <Box
          width='105px'
          height='480px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <Column>
          <Layout flexBasis={25} flexShrink={0} />
          <Row>
            <ListItem />
            <Layout flexBasis={11} flexShrink={0} />
            <Item />
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
      </Layout>
      <ImageBlock />
      <Layout style={{ position: 'relative' }} height='30px'>
        <Box
          width='105px'
          height='31px'
          position='absolute'
          zIndex={-1}
          backgroundColor='red'
          left={215}
        />
      </Layout>
    </Column>
  </Box>
)

export { SkillsToLearn }
