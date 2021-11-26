import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Row }    from '@ui/layout'
import { Button } from '@ui/button'

const IndividualLessonsMobile = () => {
  //TODO slider logic
  return (
    <Box width='320px' height='390px' border='1px solid black'>
      <Column width='100%'>
        <Box width='320px' height='290px' border='1px solid black'>
          <Layout flexBasis={20} />
          <Column>
            <Layout flexBasis={25} />
            <Box width='254px' height='39px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={8} />
            <Box width='280px' height='180px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
          </Column>
          <Layout flexBasis={20} />
        </Box>
        <Box width='320px' height='30px' border='1px solid black'>
          <Row justifyContent={'flex-end'}>
            <Layout flexBasis={152} flexShrink={0} />
            <Layout flexBasis={16} flexShrink={0} alignItems='flex-end'>
              <Box height='3px' width='6px' borderRadius={50} border='1px solid black' />
              <Layout flexBasis={10} flexShrink={0} />
              <Box height='3px' width='6px' borderRadius={50} border='1px solid black' />
            </Layout>
            <Layout flexBasis={47} flexShrink={0} />
            <Box width='105px' height='30px' border='1px solid black' />
          </Row>
        </Box>
        <Layout flexBasis={30} />
        <Row justifyContent='center'>
          <Layout>
            <Button width='237px' height='41px' border='1px solid black'>
              signUp
            </Button>
          </Layout>
        </Row>
      </Column>
    </Box>
  )
}

export { IndividualLessonsMobile }
