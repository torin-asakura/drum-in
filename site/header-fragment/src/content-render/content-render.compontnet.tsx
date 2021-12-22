import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const ContentRender: FC<string[]> = ({ array }) => {
  const intl = useIntl()
  return (
    <Column alignItems={['center', 'center', 'flex-start']}>
      {array.map((item) => (
        <>
          <Layout>
            <Text
              color={item === messages.instructorName ? 'dullRed' : 'dullBlack'}
              fontSize={['small', 'small', 'large']}
              fontWeight='bold'
              lineHeight={['semiSmall', 'semiSmall', 'semiNormal']}
            >
              {intl.formatMessage(item)}
            </Text>
          </Layout>
          <Layout flexBasis={[14, 14, 20]} />
        </>
      ))}
    </Column>
  )
}

export { ContentRender }
