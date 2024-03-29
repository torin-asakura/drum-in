import React                      from 'react'
import { FC }                     from 'react'
import { useState }               from 'react'
import { useGoogleReCaptcha }     from 'react-google-recaptcha-v3'

import { Button }                 from '@ui/button'
import { Checkbox }               from '@ui/checkbox'
import { CheckboxMobile }         from '@ui/checkbox'
import { Condition }              from '@ui/condition'
import { ArrowLeftDownTailIcon }  from '@ui/icons'
import { Input }                  from '@ui/input'
import { Box }                    from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { NextLink }               from '@ui/link'
import { Text }                   from '@ui/text'
import { Space }                  from '@ui/text'

import { FormContentProps }       from './form-content.interfaces'
import { Terminal }               from './terminal'
import { TerminalScreen }         from './terminal'
import { useActionHook }          from '../data'
import { useData }                from '../data'
import { messages }               from '../messages'
import { getFieldDataByLanguage } from '../utils'

const FormContent: FC<FormContentProps> = ({
  amount = 0,
  arrow = false,
  form = 'consultation',
  onSuccess,
  onFailure,
}) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
  const [submitForm, data, error] = useActionHook()

  const forms = useData()

  const { executeRecaptcha } = useGoogleReCaptcha()

  const getError = (field: string) => {
    if (data && data.errors) {
      const nameToIdMap = {
        name: 5,
        phone: 6,
        telegram: 7,
      }

      const message = data?.errors[0]?.fieldId === nameToIdMap[field] ? data.errors[0].message : ''

      if (message === messages.required) {
        return messages.required
      }

      if (message === '?') {
        return messages.incorrect
      }

      return message
    }

    return ''
  }

  const handleSubmit = (res) => {
    if (error) {
      onFailure()
    }
    if (res.message === 'OK') {
      if (!res.success) {
        onFailure()
        return
      }
      onSuccess()
    }
  }

  const sendForm = async () => {
    if (!executeRecaptcha) return

    const token = await executeRecaptcha('submit')
    if (token && privacyPolicy) {
      submitForm({
        variables: {
          name,
          phone,
          telegram,
        },
      }).then(({ data: res }) => {
        setName('')
        setPhone('')
        setTelegram('')
        setPrivacyPolicy(false)
        handleSubmit(res.submitForm)
      })
    }
  }

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
        <Box display={['none', 'flex', 'flex']}>
          <Input
            value={name}
            onChange={(value) => setName(value)}
            placeholder={getFieldDataByLanguage(forms, 'name')}
            errorText={getError('name')}
          />
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Input
            value={name}
            onChange={(value) => setName(value)}
            placeholder={getFieldDataByLanguage(forms, 'name')}
            errorText={getError('name')}
            size='small'
          />
        </Box>
        <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
        <Box display={['none', 'flex', 'flex']}>
          <Input
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder={getFieldDataByLanguage(forms, 'phone')}
            errorText={getError('phone')}
          />
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Input
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder={getFieldDataByLanguage(forms, 'phone')}
            errorText={getError('phone')}
            size='small'
          />
        </Box>
        <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
        <Box display={['none', 'flex', 'flex']}>
          <Input
            value={telegram}
            onChange={(value) => setTelegram(value)}
            placeholder={getFieldDataByLanguage(forms, 'telegram')}
            errorText={getError('telegram')}
          />
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Input
            value={telegram}
            onChange={(value) => setTelegram(value)}
            placeholder={getFieldDataByLanguage(forms, 'telegram')}
            errorText={getError('telegram')}
            size='small'
          />
        </Box>
        <Layout flexBasis={[32, 36, 36]} flexShrink={0} />
        <Condition match={arrow}>
          <Layout flexBasis={34} flexShrink={0} />
          <Row justifyContent='end'>
            <Box style={{ transform: 'rotate(45deg)' }} width={102} height={103}>
              <ArrowLeftDownTailIcon width={102} height={103} />
            </Box>
            <Layout flexBasis={13} flexShrink={0} />
          </Row>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout flexGrow={3} />
        </Condition>
        <Box display={['none', 'flex', 'flex']}>
          <Button
            size='withoutPaddingSemiBigHeight'
            variant='purpleBackground'
            fill
            onClick={sendForm}
          >
            <Text fontWeight='semiBold' fontSize='medium' textTransform='uppercase'>
              {messages.send}
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Button
            size='withoutPaddingSemiRegularHeight'
            variant='purpleBackground'
            fill
            onClick={sendForm}
          >
            <Text fontWeight='semiBold' fontSize='semiMedium' textTransform='uppercase'>
              {messages.send}
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[16, 20, 20]} flexShrink={0} />
        <Row display={['none', 'flex', 'flex']}>
          <Checkbox checked={privacyPolicy} onCheck={setPrivacyPolicy}>
            {messages.formLetter}
          </Checkbox>
        </Row>
        <Row display={['flex', 'none', 'none']}>
          <CheckboxMobile checked={privacyPolicy} onCheck={setPrivacyPolicy}>
            {messages.formLetter}
          </CheckboxMobile>
        </Row>
      </Condition>
      <Layout flexBasis={[42, 102, 102]} flexShrink={0} />
    </Box>
  )
}

export { FormContent }
