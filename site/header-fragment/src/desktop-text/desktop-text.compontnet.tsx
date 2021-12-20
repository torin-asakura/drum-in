import React       from 'react'
import { useIntl } from 'react-intl'

import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const DesktopText = () => {
  const textDesktop = [messages.instructor, messages.instructorName, messages.whatsUp]
  const intl = useIntl()
  return (
    <Column>
      {textDesktop.map((item) => (
        <>
          <Layout>
            <Text
              color={item === messages.instructorName ? 'dullRed' : 'dullBlack'}
              fontSize='large'
              fontWeight='bold'
              lineHeight='semiNormal'
            >
              {intl.formatMessage(item)}
            </Text>
          </Layout>
          <Layout flexBasis={20} />
        </>
      ))}
    </Column>
  )
}

export { DesktopText }
