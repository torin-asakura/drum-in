import React                      from 'react'
import { FC }                     from 'react'

import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Text }                   from '@ui/text'

import { OneCharacteristicProps } from './one-characteristic.interfaces'

const OneCharacteristic: FC<OneCharacteristicProps> = ({ indentLeft, numeric, title }) => (
  <Row>
    <Layout display={['none', 'none', 'flex']} flexBasis={indentLeft} />
    <Box>
      <Text
        fontWeight='medium'
        fontSize={['large', 'big', 'huge']}
        lineHeight={['extra', 'extra', 'medium']}
        color='text.purple'
      >
        {numeric}
      </Text>
    </Box>
    <Layout flexBasis={[4, 6, 8]} flexShrink={0} />
    <Box>
      <Text
        whiteSpace='nowrap'
        fontWeight='medium'
        fontSize={['large', 'big', 'huge']}
        lineHeight={['extra', 'extra', 'medium']}
        color='text.smokyWhite'
      >
        {title}
      </Text>
    </Box>
  </Row>
)
export { OneCharacteristic }
