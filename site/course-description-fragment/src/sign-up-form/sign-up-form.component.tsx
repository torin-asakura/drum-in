import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Input }   from '@ui/input'
import messages    from '../messages'

const SignUpFrom: FC = () => {
  const intl = useIntl()
  return (
    <Box width='611px' height='461px' border='1px solid black'>
      <Layout flexBasis={92} />
      <Column style={{ border: '1px solid black' }}>
        <Layout flexBasis={64} />
        <Layout style={{ border: '1px solid black' }}>
          <Input />
        </Layout>
        <Layout flexBasis={64} />
        <Layout style={{ border: '1px solid black' }}>
          <Input />
        </Layout>
        <Layout flexBasis={64} />
        <Layout style={{ border: '1px solid black' }} width='426px' height='70px'>
          {intl.formatMessage(messages.signUp)}
        </Layout>
        <Layout flexBasis={64} />
      </Column>
      <Layout flexBasis={92} />
    </Box>
  )
}

export { SignUpFrom }
