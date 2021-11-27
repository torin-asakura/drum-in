import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const TextComponent = ({
  headerHeight,
  headerWidth,
  mainHeight,
  mainWidth,
  height,
  width,
  display,
}) => {
  //TODO change props for work with content
  return (
    <Box width={width} height={height}>
      <Column>
        <Row>
          <Box
            display={display}
            borderRadius={50}
            width='11px'
            height='11px'
            border='1px solid black'
          />
          <Layout display={display} flexBasis={11} />
          <Box display={display} width={headerWidth} height={headerHeight} border='1px solid black'>
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
