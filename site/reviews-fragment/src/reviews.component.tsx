import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Row }    from '@ui/layout'

const Reviews = () => {
  return (
    <Box width='1440px' height='430px' border='1px solid black'>
      <Layout flexBasis={138} flexShrink={0} />
      <Column width='100%'>
        <Box width='116px' height='25px' border='1px solid black'>
          <Layout>
            <Text> text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={56} flexShrink={0} />
        <Row>
          <Box width='527px' height='284px' border='1px solid black'>
            yotube player
          </Box>
          <Layout flexBasis={92} flexShrink={0} />
          <Box width='527px' height='284px' border='1px solid black'>
            yotube player
          </Box>
        </Row>
        <Layout flexBasis={64} />
      </Column>
      <Layout flexBasis={156} flexShrink={0} />
    </Box>
  )
}

export { Reviews }
