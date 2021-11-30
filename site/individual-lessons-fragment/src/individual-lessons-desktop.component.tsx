import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const IndividualLessonsDesktop: FC = () => (
  <Row justifyContent='center' display={['none', 'none', 'flex']}>
    <Layout flexBasis={138} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={60} />
      <Box width='570px' height='105px' border='1px solid black'>
        <Layout>
          <Text>individual lessons</Text>
        </Layout>
      </Box>
      <Layout />
      <Layout flexBasis={20} />
      <Box width='570px' height='313px' border='1px solid black'>
        <Layout>
          <Text>individual lessons description</Text>
        </Layout>
      </Box>
      <Layout flexBasis={20} />
      <Layout>
        <Button width='426px' height='70px' border='1px solid black'>
          <Layout>
            <Text>sign up</Text>
          </Layout>
        </Button>
      </Layout>
      <Layout flexBasis={60} />
    </Column>
    <Layout flexBasis={120} flexShrink={0} />
    <Column>
      <Layout flexBasis={60} />
      <Box width='538px' height='500px' border='1px solid black'>
        <Layout>video</Layout>
      </Box>
      <Layout flexBasis={20} />
    </Column>
    <Layout flexBasis={77} />
  </Row>
)

export { IndividualLessonsDesktop }
