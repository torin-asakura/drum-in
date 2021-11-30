import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const CourseDescription: FC = () => (
  // TODO Modal appearacnce logic
  <Box
    width={['320px', '320px', '1440px']}
    height={['290px', '290px', '722px']}
    border='1px solid black'
  >
    <Layout flexBasis={[20, 20, 137]} />
    <Row>
      <Column alignItems='center'>
        <Layout flexBasis={[25, 25, 53]} />
        <Layout display={['none', 'none', 'flex']}>
          <Text>course</Text>
        </Layout>
        <Layout flexBasis={30} display={['none', 'none', 'flex']} />
        <Layout>
          <Text>rythm</Text>
        </Layout>
        <Layout flexBasis={[30, 30, 39]} />
        <Box
          width={['280px', '280px', '572px']}
          height={['145px', '145px', '311px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={24} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Row justifyContent='center' display={['flex', 'flex', 'none']}>
          <Layout width='26px' height='6px'>
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
            <Layout flexBasis={10} flexShrink={0} />
            <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
          </Layout>
        </Row>
        <Layout flexBasis={34} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Layout flexBasis={70} display={['none', 'none', 'flex']} />
        <Layout display={['none', 'none', 'flex']}>
          <Text>course description</Text>
        </Layout>
        <Layout flexBasis={60} display={['none', 'none', 'flex']} />
        <Button
          border='1px solid black'
          width={['237px', '237px', '426px']}
          height={['41px', '41px', '70px']}
        >
          <Layout>
            <Text>sign up</Text>
          </Layout>
        </Button>
        <Layout flexBasis={60} flexShrink={0} display={['none', 'none', 'flex']} />
      </Column>
      <Layout flexBasis={150} flexShrink={0} display={['none', 'none', 'flex']} />
      <Column>
        <Layout flexBasis={65} />
        <Box
          width='494px'
          height='596px'
          border='1px solid black'
          display={['none', 'none', 'flex']}
        >
          <Layout>photo</Layout>
        </Box>
      </Column>
    </Row>
    <Layout flexBasis={[20, 20, 118]} />
  </Box>
)

export { CourseDescription }
