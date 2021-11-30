import React      from 'react'

import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const SkillsPresentationMobile: FC = () => (
  <Column width='100%' display={['flex', 'flex', 'none']} alignItems='center'>
    <Layout flexBasis={130} flexShrink={0} />
    <Layout>
      <Column>
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='68px' height='58px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} flexShrink={0} />
        <Layout>
          <Text>text</Text>
        </Layout>
      </Column>
    </Layout>
  </Column>
)

export { SkillsPresentationMobile }
