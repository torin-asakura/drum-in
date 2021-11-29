import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const AskQuestion: FC = () => {
  return (
    <Box width='320px' height='464px' border='1px solid black'>
      <Layout flexShrink={0} flexBasis={20} />
      <Column>
        <Layout flexBasis={30} flexShrink={0} />
        <Box width='282px' height='343px' border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={23} flexShrink={0} />
        <Layout justifyContent='center'>
          <Button width='237px' height='41px' border='1px solid black'>
            <Layout>
              <Text>ask question</Text>
            </Layout>
          </Button>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
      </Column>
      <Layout flexShrink={0} flexBasis={20} />
    </Box>
  )
}

export { AskQuestion }
