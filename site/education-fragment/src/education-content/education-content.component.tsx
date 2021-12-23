import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const EducationContent: FC = () => {
  const intl = useIntl()
  const content = [messages.drumClass, messages.drumWorkshop, messages.maimonid]
  return (
    <Column>
      {content.map((item) => (
        <>
          <Layout>
            <Text
              color='dullBlack'
              fontSize={['regular', 'regular', 'normal']}
              fontWeight='normal'
              lineHeight='normal'
              textAlign='justify'
            >
              {intl.formatMessage(item)}
            </Text>
          </Layout>
          <Layout flexBasis={25} />
        </>
      ))}
    </Column>
  )
}

export { EducationContent }
