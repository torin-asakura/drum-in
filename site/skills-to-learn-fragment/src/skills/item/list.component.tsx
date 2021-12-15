import React      from 'react'

import { Layout } from '@ui/layout'
import { Column }   from '@ui/layout'
import { Text }     from '@ui/text'

const List = ({ mainText }) =>
  mainText !== !mainText
    ? mainText.map((item) => (
        <Column>
          <Layout>
            <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
              {item}
            </Text>
          </Layout>{' '}
          <Layout flexBasis={20} />
        </Column>
      ))
    : null

export { List }
