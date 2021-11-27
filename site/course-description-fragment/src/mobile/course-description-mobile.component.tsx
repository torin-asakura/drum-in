import React      from 'react'
import { FC }       from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/text'
import { Row }    from '@ui/layout'
import { Button } from '@ui/button'

const CourseDescriptionMobile: FC = () => {
  //TODO slider controls cpmponent
  return (
    <Column width='100%' alignItems='center'>
      <Box width='320px' height='270px' border='1px solid black'>
        <Layout flexBasis={20} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={25} flexShrink={0} />
          <Box widht='253px' height='16px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={30} flexShrink={0} />
          <Box widht='282x' height='144px' border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
          <Layout flexBasis={30} flexShrink={0} />
          <Row justifyContent='center'>
            <Layout width='26px' height='6px'>
              <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
              <Layout flexBasis={10} flexShrink={0} />
              <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
            </Layout>
          </Row>
          <Layout flexBasis={25} flexShrink={0} />
        </Column>
        <Layout flexBasis={20} flexShrink={0} />
      </Box>
      <Layout flexBasis={30} flexShrink={0} />
      <Layout>
        <Button width='237px' height='41px' border='1px solid black'>
          <Layout>
            <Text>buy course</Text>
          </Layout>
        </Button>
      </Layout>
    </Column>
  )
}

export { CourseDescriptionMobile }
