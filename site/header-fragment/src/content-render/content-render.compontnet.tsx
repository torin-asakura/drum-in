import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Column }  from '@ui/layout'
import { Row }       from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const ContentRender: FC<string[]> = ({ array }) => {
  const intl = useIntl()
  return (
    <Column width='100%' alignItems={['center', 'center', 'flex-start']}>
      {array.map((item) => (
        <>
          <Row justifyContent='flex-start'>
            <Layout flexBasis={15} />
            <Layout
              width={['220px', '220px', '400px']}
              justifyContent={['center', 'center', 'flex-start']}
            >
              <Text
                color={item === messages.instructorName ? 'dullRed' : 'dullBlack'}
                fontSize={['small', 'small', 'large']}
                fontWeight='bold'
                lineHeight={['semiSmall', 'semiSmall', 'semiNormal']}
              >
                {intl.formatMessage(item)}
              </Text>
            </Layout>
          </Row>
          <Layout flexBasis={[14, 14, 20]} />
        </>
      ))}
    </Column>
  )
}

export { ContentRender }
