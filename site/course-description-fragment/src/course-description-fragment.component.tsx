import React        from 'react'
import { FC }       from 'react'
import { useState } from 'react'

import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }     from '@ui/layout'
import { Button }   from '@ui/button'

const CourseDescription: FC = () => {
  const [show, setShow] = useState('none')
  // TODO Modal appearacnce logic
  return (
    <Box width='1440px' border='1px solid black'>
      <Layout flexBasis={137} />
      <Row>
        <Column>
          <Layout flexBasis={53} />
          <Layout>
            <Text>course</Text>
          </Layout>
          <Layout flexBasis={30} />
          <Layout>
            <Text>rithm</Text>
          </Layout>
          <Layout flexBasis={39} />
          <Box width='572px' height='311px' border='1px solid black'>
            <layout>
              <Text>text</Text>
            </layout>
          </Box>
          <Layout flexBasis={70} />
          <Layout>
            <Text>course description</Text>
          </Layout>
          <Layout flexBasis={60} />
          <Button
            onClick={() => setShow('flex')}
            border='1px solid black'
            width='426px'
            height='70px'
          >
            <Layout>
              <Text>sign up</Text>
            </Layout>
          </Button>
          <Layout flexBasis={60} flexShrink={0} />
        </Column>
        <Layout flexBasis={150} flexShrink={0} />
        <Column>
          <Layout flexBasis={65} />
          <Box width='494px' height='596px' border='1px solid black'>
            <Layout>photo</Layout>
          </Box>
        </Column>
      </Row>
      <Layout flexBasis={118} />
    </Box>
  )
}
export { CourseDescription }
