import React         from 'react'

import { Layout }    from '@ui/layout'
import { Column }    from '@ui/layout'
import { Text }      from '@ui/text'
import { Condition } from '@ui/condition'

const List = ({ content }) => (
  <>
    <Condition match={Array.isArray(content)}>
      {content.map((item) => (
        <Column>
          <Layout>
            <Text
              color='dullBlack'
              fontWeight={['semiNormal', 'semiNormal', 'normal']}
              fontSize='normal'
              lineHeight='normal'
            >
              {item}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
        </Column>
      ))}
    </Condition>
  </>
)

export { List }
