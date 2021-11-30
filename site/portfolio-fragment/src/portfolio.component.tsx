import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const Portfolio: FC = () => {
  return (
    <Box width='1440px' height='1100px' border='1px solid black' display={['none', 'none', 'flex']}>
      <Column width='100%'>
        <Row>
          <Layout flexBasis={65} flexShrink={0} />
          <Column alignItems='center'>
            <Layout flexBasis={70} />
            <Box width='355px' height='64px' border='1px solid black' />
            <Box width='505px' height='392px' border='1px solid black'>
              <Layout>img</Layout>
            </Box>
            <Box width='355px' height='74px' border='1px solid black' />
            <Box width='505px' height='397px' border='1px solid black'>
              <Layout>img</Layout>
            </Box>
            <Box width='355px' height='45px' border='1px solid black' />
          </Column>
          <Layout flexBasis={160} />
          <Column>
            <Layout flexBasis='126px' />
            <Box width='568px' height='890px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={82} />
          </Column>
          <Layout flexBasis={143} flexShrink={0} />
        </Row>
        <Layout flexBasis={60} />
      </Column>
    </Box>
  )
}

export { Portfolio }
