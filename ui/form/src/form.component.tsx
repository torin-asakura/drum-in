import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptcha }         from 'react-google-recaptcha-v3'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import { useState }                from 'react'

import { Button }                  from '@ui/button'
import { Checkbox }                from '@ui/checkbox'
import { CheckboxMobile }          from '@ui/checkbox'
import { Condition }               from '@ui/condition'
import { ArrowLeftDownTailIcon }   from '@ui/icons'
import { Input }                   from '@ui/input'
import { Box }                     from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { NextLink }                from '@ui/link'
import { Space }                   from '@ui/text'
import { Text }                    from '@ui/text'

import { FormProps }               from './form.interfaces'
import { useActionHook }           from './data'
import { useData }                 from './data'
import { messages }                from './messages'
import { getFieldDataByLanguage }  from './utils'

const doNothing = () => {
  // do nothing
}

const sitekey = '6LeivSwlAAAAAL1abQj0DBd-w7zVtCHFHGge_Z7S'

const Form: FC<FormProps> = ({
  arrow = false,
  form = 'consultation',
  onSuccess = doNothing,
  onFailure = doNothing,
}) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
  const [verify, setVerify] = useState(false)
  const [submitForm, data, error] = useActionHook()
  const forms = useData()

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

  const onVerify = () => {
    setVerify(true)
  }

  const sendForm = () => {
    if (verify && privacyPolicy) {
      submitForm({
        variables: {
          name,
          phone,
          telegram,
        },
      }).then(({ data: res }) => {
        setVerify(false)
        setName('')
        setPhone('')
        setTelegram('')
        setPrivacyPolicy(false)
        handleSubmit(res.submitForm)
      })
    }
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={sitekey}
      language='ru'
      container={{
        element: 'containerCaptcha',
        parameters: {},
      }}
    >
      <Box flexDirection='column' height={arrow ? '100%' : 'auto'}>
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
              <Condition match={form === 'consultation'}>{messages.send}</Condition>
              <Condition match={form === 'payment'}>{messages.pay}</Condition>
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
              <Condition match={form === 'consultation'}>{messages.send}</Condition>
              <Condition match={form === 'payment'}>{messages.pay}</Condition>
            </Text>
          </Button>
        </Box>
        <Layout flexBasis={[16, 20, 20]} flexShrink={0} />
        <Row display={['none', 'flex', 'flex']}>
          <Checkbox checked={privacyPolicy} onCheck={setPrivacyPolicy}>
            <Condition match={form === 'consultation'}>{messages.formLetter}</Condition>
            <Condition match={form === 'payment'}>
              {messages.accept}
              <Space />
              <NextLink path='/'>
                <Text textTransform='lowercase'>{messages.offerAgreement}</Text>
              </NextLink>
              <Space />
              {messages.giveConsent}
            </Condition>
          </Checkbox>
        </Row>
        <Row display={['flex', 'none', 'none']}>
          <CheckboxMobile checked={privacyPolicy} onCheck={setPrivacyPolicy}>
            <Condition match={form === 'consultation'}>{messages.formLetter}</Condition>
            <Condition match={form === 'payment'}>
              {messages.accept}
              <Space />
              <NextLink path='/'>
                <Text textTransform='lowercase' fontSize='semiMicro'>
                  {messages.offerAgreement}
                </Text>
              </NextLink>
              <Space />
              {messages.giveConsent}
            </Condition>
          </CheckboxMobile>
        </Row>
        <Layout flexBasis={[18, 40, 40]} flexShrink={0} />
        <Row id='containerCaptcha' />
        <GoogleReCaptcha onVerify={onVerify} />
        <Layout flexBasis={[24, 62, 62]} flexShrink={0} />
      </Box>
    </GoogleReCaptchaProvider>
  )
}

export { Form }
