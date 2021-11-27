import React      from 'react'
import { FC }       from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'

const SkillsPresentationMobile: FC = () => {
  //TODO img render automation
  return (
    <Box width='320px' height='992px' border='1px solid black'>
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={30} />
        <Box width='52px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='68px' height='68px' border='1px solid black'>
          <Layout>img</Layout>
        </Box>
        <Layout flexBasis={30} />
        <Box width='156px' height='11px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={30} />
      </Column>
    </Box>
  )
}

export { SkillsPresentationMobile }
