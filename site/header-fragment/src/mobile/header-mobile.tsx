import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Column } from '@ui/layout'

const HeaderMobile = () => {
  return (
    <Box width='320px' height='354px' border='1px solid black' position='relative' zIndex={1}>
      <Layout flexBasis={38} flexShrink={0} />
      <Box zIndex={1}>
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={30} />
          <Box judtifyContent='center' width='244px' height='11px' border='1px solid black'>
            <Layout>
              <Text>test</Text>
            </Layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='244px' height='11px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='152px' height='14px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box width='78px' height='79px' border='1px solid black'>
            <Layout>img</Layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='255px' height='21px' border='1px solid black'>
            <layout>
              <Text> text</Text>
            </layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='255px' height='21px' border='1px solid black'>
            <layout>
              <Text> text</Text>
            </layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='255px' height='21px' border='1px solid black'>
            <layout>
              <Text> text</Text>
            </layout>
          </Box>
          <Layout flexBasis={14} flexShrink={0} />
          <Box judtifyContent='center' width='255px' height='21px' border='1px solid black'>
            <layout>
              <Text> text</Text>
            </layout>
          </Box>
        </Column>
      </Box>
      <Box
        left={215}
        position='absolute'
        width='105px'
        id='ololo'
        height='354px'
        border='1px solid black'
        zIndex={-1}
        flexShrink={0}
      />
    </Box>
  )
}

export { HeaderMobile }
