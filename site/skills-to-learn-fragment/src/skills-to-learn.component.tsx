import React          from 'react'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'

import { ImageBlock } from './image-block.component'
import { TextBlock }  from './text-block.component'

const SkillsToLearn = () => (
  <Box width={['320px', '320px', '1440px']} border='1px solid black' position='relative' zIndex={0}>
    <Layout flexBasis={64} flexShrink={0} display={['none', 'none', 'flex']} />
    <Column width='100%' display={['flex', 'flex', 'none']} alignItems='center'>
      <Row height='25px'>
        <Box width='209px' height='25px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='25px' backgroundColor='red' />
      </Row>
      <Row>
        <Layout flexBasis={20} />
        <Layout>
          <Box
            height='11px'
            width='11px'
            border='1px solid black'
            borderRadius={50}
            display={['flex', 'flex', 'none']}
          />
          <Layout flexBasis={11} />
          <TextBlock width='279px' height='472px' zIndex={1} />
        </Layout>
        <Box
          width={['105px', '105px', '375px']}
          height={['472px', '472px', '620px']}
          position='absolute'
          display={['flex', 'flex', 'none']}
          border='1px solid black'
          zIndex={-1}
          flexShrink={0}
          left={[210, 210, 100]}
        />
        <Layout flexBasis={20} />
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <ImageBlock />
      <Row height='10px'>
        <Box width='209px' height='16px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='16px' backgroundColor='red' />
      </Row>
      <Row justifyContent='center' display={['flex', 'flex', 'none']}>
        <Layout width='26px' height='6px'>
          <Layout>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
          <Layout flexBasis={10} flexShrink={0} />
          <Layout>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
        </Layout>
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <Row>
        <Layout flexBasis={20} />
        <Layout>
          <Box
            height='11px'
            width='11px'
            border='1px solid black'
            borderRadius={50}
            display={['flex', 'flex', 'none']}
          />
          <Layout flexBasis={11} />
          <TextBlock width='279px' height='472px' zIndex={1} />
        </Layout>
        <Box
          width={['105px', '105px', '375px']}
          height={['472px', '472px', '620px']}
          position='absolute'
          display={['flex', 'flex', 'none']}
          border='1px solid black'
          zIndex={-1}
          flexShrink={0}
          left={[210, 210, 100]}
        />
        <Layout flexBasis={20} />
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <Row>
        <Layout flexBasis={20} />
        <Layout>
          <Box
            height='11px'
            width='11px'
            border='1px solid black'
            borderRadius={50}
            display={['flex', 'flex', 'none']}
          />
          <Layout flexBasis={11} />
          <TextBlock width='279px' height='472px' zIndex={1} />
        </Layout>
        <Box
          width={['105px', '105px', '375px']}
          height={['472px', '472px', '620px']}
          position='absolute'
          display={['flex', 'flex', 'none']}
          border='1px solid black'
          zIndex={-1}
          flexShrink={0}
          left={[210, 210, 100]}
        />
        <Layout flexBasis={20} />
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <ImageBlock />
      <Row height='10px'>
        <Box width='209px' height='16px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='16px' backgroundColor='red' />
      </Row>
      <Row justifyContent='center' display={['flex', 'flex', 'none']}>
        <Layout width='26px' height='6px'>
          <Layout>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
          <Layout flexBasis={10} flexShrink={0} />
          <Layout>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
        </Layout>
      </Row>
      <Row>
        <Layout flexBasis={20} />
        <Layout>
          <Box
            height='11px'
            width='11px'
            border='1px solid black'
            borderRadius={50}
            display={['flex', 'flex', 'none']}
          />
          <Layout flexBasis={11} />
          <TextBlock width='279px' height='472px' zIndex={1} />
        </Layout>
        <Box
          width={['105px', '105px', '375px']}
          height={['472px', '472px', '620px']}
          position='absolute'
          display={['flex', 'flex', 'none']}
          border='1px solid black'
          zIndex={-1}
          flexShrink={0}
          left={[210, 210, 100]}
        />
        <Layout flexBasis={20} />
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <Row>
        <Layout flexBasis={20} />
        <Layout>
          <Box
            height='11px'
            width='11px'
            border='1px solid black'
            borderRadius={50}
            display={['flex', 'flex', 'none']}
          />
          <Layout flexBasis={11} />
          <TextBlock width='279px' height='472px' zIndex={1} />
        </Layout>
        <Box
          width={['105px', '105px', '375px']}
          height={['472px', '472px', '620px']}
          position='absolute'
          display={['flex', 'flex', 'none']}
          border='1px solid black'
          zIndex={-1}
          flexShrink={0}
          left={[210, 210, 100]}
        />
        <Layout flexBasis={20} />
      </Row>
      <Row height='10px'>
        <Box width='209px' height='10px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='10px' backgroundColor='red' />
      </Row>
      <ImageBlock />
      <Row height='25px'>
        <Box width='209px' height='25px' backgroundColor='transparent' flexShrink={0} />
        <Box width='110px' height='25px' backgroundColor='red' />
      </Row>
    </Column>
    <Column>
      <Row display={['none', 'none', 'flex']}>
        <Column width='100%'>
          <Layout flexBasis={60} flexShrink={0} />
          <Row>
            <Layout>
              <Box
                height='18px'
                width='18px'
                border='1px solid black'
                borderRadius={50}
                display={['none', 'none', 'flex']}
              />
            </Layout>
            <Layout flexBasis={18} flexShrink={0} />
            <TextBlock width='713px' height='360px' display={['none', 'none', 'flex']} />
          </Row>
          <Layout flexBasis={40} />
          <Row>
            <Layout>
              <Box
                height='18px'
                width='18px'
                border='1px solid black'
                borderRadius={50}
                display={['none', 'none', 'flex']}
              />
            </Layout>
            <Layout flexBasis={18} flexShrink={0} />
            <TextBlock width='713px' height='360px' display={['none', 'none', 'flex']} />
          </Row>
        </Column>
        <Layout flexBasis={60} flexShrink={0} />
        <Column width='100%'>
          <Box
            width={['105px', '105px', '375px']}
            height={['3942px', '400px', '620px']}
            position='relative'
            display={['none', 'none', 'flex']}
            border='1px solid black'
            zIndex={1}
            flexShrink={0}
            left={[100, 100, 100]}
          >
            <ImageBlock position='absolute' top={60} left={-60} zIndex={2} />
          </Box>
          <Layout flexBasis={275} />
        </Column>
      </Row>
      <Row display={['none', 'none', 'flex']}>
        <Column width='100%'>
          <Box
            width={['105px', '105px', '375px']}
            height={['3942px', '400px', '620px']}
            position='relative'
            display={['none', 'none', 'flex']}
            border='1px solid black'
            zIndex={1}
            flexShrink={0}
            left={[100, 100, 100]}
          >
            <ImageBlock position='absolute' top={60} left={-60} zIndex={2} />
          </Box>
          <Layout flexBasis={684} />
        </Column>
        <Layout flexBasis={295} flexShrink={0} />
        <Column>
          <Row>
            <Layout>
              <Box
                height='18px'
                width='18px'
                border='1px solid black'
                borderRadius={50}
                display={['none', 'none', 'flex']}
              />
            </Layout>
            <Layout flexBasis={18} flexShrink={0} />
            <TextBlock width='632px' height='360px' display={['none', 'none', 'flex']} />
          </Row>
          <Layout flexBasis={40} />
          <Row>
            <Layout>
              <Box
                height='18px'
                width='18px'
                border='1px solid black'
                borderRadius={50}
                display={['none', 'none', 'flex']}
              />
            </Layout>
            <Layout flexBasis={18} flexShrink={0} />
            <TextBlock width='632px' height='360px' display={['none', 'none', 'flex']} />
          </Row>
          <Layout flexBasis={40} />
          <Row>
            <Layout>
              <Box
                height='18px'
                width='18px'
                border='1px solid black'
                borderRadius={50}
                display={['none', 'none', 'flex']}
              />
            </Layout>
            <Layout flexBasis={18} flexShrink={0} />
            <TextBlock width='632px' height='435px' display={['none', 'none', 'flex']} />
          </Row>
        </Column>
      </Row>
    </Column>
    <Layout flexBasis={64} flexShrink={0} display={['none', 'none', 'flex']} />
  </Box>
)

export { SkillsToLearn }
