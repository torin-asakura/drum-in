import React                from 'react'
import { FC }               from 'react'
import { useState }         from 'react'

import { Checkbox }         from '@ui/checkbox'
import { CheckboxMobile }   from '@ui/checkbox'
import { Condition }        from '@ui/condition'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Layout }           from '@ui/layout'
import { NextLink }         from '@ui/link'
import { Text }             from '@ui/text'
import { Space }            from '@ui/text'

import { Consultation }     from './consultation'
import { FormContentProps } from './form-content.interfaces'
import { Terminal }         from './terminal'
import { TerminalScreen }   from './terminal'
import { messages }         from '../messages'

const FormContent: FC<FormContentProps> = ({
  amount = 0,
  arrow = false,
  form = 'consultation',
  onSuccess,
  onFailure,
}) => {
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)

  return (
    <Box flexDirection='column' height={arrow ? '100%' : 'auto'}>
      <Condition match={form === 'payment'}>
        <Box display={['none', 'flex', 'flex']} flexDirection='column'>
          <Terminal amount={amount} disabled={!privacyPolicy} screen={TerminalScreen.Desktop} />
          <Layout flexBasis={20} flexShrink={0} />
          <Row>
            <Checkbox checked={privacyPolicy} onCheck={setPrivacyPolicy}>
              {messages.accept}
              <Space />
              <NextLink path='/contract-offer'>
                <Text textTransform='lowercase'>{messages.offerAgreement}</Text>
              </NextLink>
              <Space />
              {messages.giveConsent}
            </Checkbox>
          </Row>
        </Box>
        <Box display={['flex', 'none', 'none']} flexDirection='column'>
          <Terminal amount={amount} disabled={!privacyPolicy} screen={TerminalScreen.Mobile} />
          <Layout flexBasis={16} flexShrink={0} />
          <Row>
            <CheckboxMobile checked={privacyPolicy} onCheck={setPrivacyPolicy}>
              {messages.accept}
              <Space />
              <NextLink path='/contract-offer'>
                <Text textTransform='lowercase' fontSize='semiMicro'>
                  {messages.offerAgreement}
                </Text>
              </NextLink>
              <Space />
              {messages.giveConsent}
            </CheckboxMobile>
          </Row>
        </Box>
      </Condition>

      <Condition match={form === 'consultation'}>
        <Consultation
          arrow={arrow}
          onSuccess={onSuccess}
          onFailure={onFailure}
          privacyPolicy={privacyPolicy}
          setPrivacyPolicy={setPrivacyPolicy}
        />
      </Condition>
      <Layout flexBasis={[42, 102, 102]} flexShrink={0} />
    </Box>
  )
}

export { FormContent }
