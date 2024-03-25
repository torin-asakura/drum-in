import React                 from 'react'
import { FC }                from 'react'
import { FormattedMessage }  from 'react-intl'

import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Space }             from '@ui/text'
import { Text }              from '@ui/text'

import { BulletedListProps } from './bulleted-list.interfaces'

export const BulletedList: FC<BulletedListProps> = ({ list }) => (
  <Box display={['flex', 'flex', 'none']}>
    <Column>
      {list.map(({ number, text }) => (
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'semiRegular', 'semiRegular']}
            lineHeight='primary'
            color='text.blackAmber'
          >
            <FormattedMessage id='landing_price.dot' />
            <Space count={number ? 1 : 0} />
            {number}
            <Space />
            {text}
          </Text>
        </Box>
      ))}
    </Column>
  </Box>
)
