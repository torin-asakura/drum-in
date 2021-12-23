import React       from 'react'
import { useIntl } from 'react-intl'

import { Box }     from '@ui/layout'
import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Row }     from '@ui/layout'
import { Text }    from '@ui/text'
import { Button }  from '@ui/button'

import messages    from '../messages'

const AskQuestions = () => {
  const intl = useIntl()
  return (
    <Box backgroundColor='dullBlack' zIndex={1}>
      <Column alignItems='center'>
        <Layout flexBasis={30} flexShrink={0} />
        <Row>
          <Layout flexBasis={20} flexShrink={0} />
          <Text
            color='white'
            fontSize='regular'
            lineHeight='large'
            fontWeight='semiBold'
            textAlign='center'
          >
            {intl.formatMessage(messages.courseTime)}
          </Text>
          <Layout flexBasis={20} flexShrink={0} />
        </Row>
        <Layout flexBasis={25} flexShrink={0} />
        <Layout>
          <Button width='240px'>
            <Layout>
              <Text
                color='white'
                fontSize='regular'
                fontWeight='bold'
                lineHeight='small'
                letterSpacing='0.15em'
              >
                {intl.formatMessage(messages.askQuestion)}
              </Text>
            </Layout>
          </Button>
        </Layout>
        <Layout flexBasis={30} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { AskQuestions }
