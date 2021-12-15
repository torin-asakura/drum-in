import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Column }  from '@ui/layout'
import { Text }    from '@ui/text'
import { Input }   from '@ui/input'
import { Button }  from '@ui/button'

import messages    from '../messages'

const SignUpFrom: FC = () => {
  const intl = useIntl()
  return (
    <Box width='611px' height='461px' backgroundColor='softBlack'>
      <Layout flexBasis={92} />
      <Column>
        <Layout flexBasis={64} />
        <Layout>
          <Input placeholder={intl.formatMessage(messages.yourName)} />
        </Layout>
        <Layout flexBasis={64} />
        <Layout>
          <Input placeholder={intl.formatMessage(messages.numberTemplate)} />
        </Layout>
        <Layout flexBasis={64} />
        <Button size='big' width='426px'>
          <Layout>
            <Text fontWeight='normal' fontSize='huge' lineHeight='big'>
              {intl.formatMessage(messages.signUp)}
            </Text>
          </Layout>
        </Button>
        <Layout flexBasis={64} />
      </Column>
      <Layout flexBasis={92} />
    </Box>
  )
}

export { SignUpFrom }
