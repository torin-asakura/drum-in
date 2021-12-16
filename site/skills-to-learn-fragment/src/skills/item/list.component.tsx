import React       from 'react'

import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'
import { Condition } from '@ui/condition'

const List = ({ mainText }) => (
  <Condition match={Array.isArray(mainText)}>
    {mainText.map((item) => (
      <Column>
        <Layout>
          <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
            {item}
          </Text>
        </Layout>
        <Layout flexBasis={20} />
      </Column>
    ))}
  </Condition>
)

export { List }
