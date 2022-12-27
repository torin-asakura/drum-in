import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { OpenOvalIcon }     from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { ListDesktop }      from './list-desktop'
import { ListMobile }       from './list-mobile'

const FaqBlock = () => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[40, 65, 90]} flexShrink={0} />
        <Box position='relative' width='max-content'>
          <Text
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'increased']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage
              id='landing_faq.questions_and_answers'
              defaultMessage='Вопросы и ответы'
            />
          </Text>
          <Box display={['none', 'none', 'flex']} position='absolute' right={-52} top={-39}>
            <OpenOvalIcon width={390} height={111} />
          </Box>
        </Box>
        <Layout flexBasis={[44, 62, 80]} flexShrink={0} />
        <ListDesktop />
        <ListMobile />
        <Layout flexBasis={[20, 37, 60]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
)
export { FaqBlock }
