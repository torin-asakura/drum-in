import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Space }            from '@ui/text'

import { Text }      from '@ui/text'

import { TitleProps }       from './title.interfaces'

const Title: FC<TitleProps> = ({ price }) => (
  <Box>
    <Text
      textTransform='uppercase'
      fontFamily='secondary'
      fontWeight='bold'
      fontSize={['semiBig', 'semiExtra', 'gigantic']}
      lineHeight='default'
      color='text.blackAmber'
    >
      {price}
      <Space />
      <FormattedMessage id='currency.ruble' />
    </Text>
  </Box>
)
export { Title }
