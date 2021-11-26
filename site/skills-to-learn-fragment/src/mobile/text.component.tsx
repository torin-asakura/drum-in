import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/layout'

const TextComponent = ({ headerHeight, headerWidth, mainHeight, mainWidth, height, width }) => {
  //TODO change props for work with content
  return (
    <Box width={width} height={height}>
      <Column>
        <Row>
          <Box borderRadius={50} width='11px' height='11px' border='1px solid black' />
          <Layout flexBasis={11} />
          <Box width={headerWidth} height={headerHeight} border='1px solid black'>
            <Layout>
              <Text>text</Text>
            </Layout>
          </Box>
        </Row>
        <Layout flexBasis={20} />
        <Box width={mainWidth} height={mainHeight} border='1px solid black'>
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
      </Column>
    </Box>
  )
}

export { TextComponent }
