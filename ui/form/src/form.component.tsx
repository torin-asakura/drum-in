import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'
import { useState }              from 'react'
import { useIntl }               from 'react-intl'

import { Button }                from '@ui/button'
import { Checkbox }              from '@ui/checkbox'
import { CheckboxMobile }        from '@ui/checkbox'
import { Condition }             from '@ui/condition'
import { ArrowLeftDownTailIcon } from '@ui/icons'
import { Input }                 from '@ui/input'
import { Box }                   from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { NextLink }              from '@ui/link'
import { Space }                 from '@ui/text'
import { Text }                  from '@ui/text'

import { FormProps }             from './form.interfaces'

const Form: FC<FormProps> = ({ arrow = false, form = 'consultation' }) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')
  const [privacyPolicy, setPrivacyPolicy] = useState<boolean>(false)
  const { formatMessage } = useIntl()

  return (
    <Box flexDirection='column' height={arrow ? '100%' : 'auto'}>
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={name}
          onChange={setName}
          placeholder={formatMessage({
            id: 'landing_modal_forms.enter_a_name',
            defaultMessage: 'Введите имя',
          })}
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={name}
          onChange={setName}
          placeholder={formatMessage({
            id: 'landing_modal_forms.enter_a_name',
            defaultMessage: 'Введите имя',
          })}
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={phone}
          onChange={setPhone}
          placeholder={formatMessage({
            id: 'landing_modal_forms.plus_seven',
            defaultMessage: '+7',
          })}
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={phone}
          onChange={setPhone}
          placeholder={formatMessage({
            id: 'landing_modal_forms.plus_seven',
            defaultMessage: '+7',
          })}
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={telegram}
          onChange={setTelegram}
          placeholder={formatMessage({
            id: 'landing_modal_forms.nickname_telegram',
            defaultMessage: '@telegram',
          })}
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={telegram}
          onChange={setTelegram}
          placeholder={formatMessage({
            id: 'landing_modal_forms.nickname_telegram',
            defaultMessage: '@telegram',
          })}
          size='small'
        />
      </Box>
      <Layout flexBasis={[32, 36, 36]} flexShrink={0} />
      {arrow ? (
        <>
          <Layout flexBasis={34} flexShrink={0} />
          <Row justifyContent='end'>
            <Box style={{ transform: 'rotate(45deg)' }} width={102} height={103}>
              <ArrowLeftDownTailIcon width={102} height={103} />
            </Box>
            <Layout flexBasis={13} flexShrink={0} />
          </Row>
          <Layout flexBasis={40} flexShrink={0} />
          <Layout flexGrow={3} />
        </>
      ) : null}
      <Box display={['none', 'flex', 'flex']}>
        <Button size='withoutPaddingSemiBigHeight' variant='purpleBackground' fill>
          <Text fontWeight='semiBold' fontSize='medium' textTransform='uppercase'>
            <Condition match={form === 'consultation'}>
              <FormattedMessage
                id='landing_modal_forms.submit_your_application'
                defaultMessage='оставить заявку'
              />
            </Condition>
            <Condition match={form === 'payment'}>
              <FormattedMessage id='landing_modal_forms.pay' defaultMessage='оплатить' />
            </Condition>
          </Text>
        </Button>
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Button size='withoutPaddingSemiRegularHeight' variant='purpleBackground' fill>
          <Text fontWeight='semiBold' fontSize='semiMedium' textTransform='uppercase'>
            <Condition match={form === 'consultation'}>
              <FormattedMessage
                id='landing_modal_forms.submit_your_application'
                defaultMessage='оставить заявку'
              />
            </Condition>
            <Condition match={form === 'payment'}>
              <FormattedMessage id='landing_modal_forms.pay' defaultMessage='оплатить' />
            </Condition>
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[16, 20, 20]} flexShrink={0} />
      <Row display={['none', 'flex', 'flex']}>
        <Checkbox checked={privacyPolicy} onCheck={setPrivacyPolicy}>
          <Condition match={form === 'consultation'}>
            <FormattedMessage
              id='landing_modal_forms.give_my_consent_to_the_processing'
              defaultMessage='Даю согласие на обработку моих персональных данных'
            />
          </Condition>
          <Condition match={form === 'payment'}>
            <FormattedMessage id='landing_modal_forms.accept' defaultMessage='Принимаю' />
            <Space />
            <NextLink path='/'>
              <Text textTransform='lowercase'>
                <FormattedMessage
                  id='landing_modal_forms.offer_agreement'
                  defaultMessage='договор оферты'
                />
              </Text>
            </NextLink>
            <Space />
            <FormattedMessage
              id='landing_modal_forms.and_i_give_my_consent'
              defaultMessage='и даю согласие на обработку моих персональных данных'
            />
          </Condition>
        </Checkbox>
      </Row>
      <Row display={['flex', 'none', 'none']}>
        <CheckboxMobile checked={privacyPolicy} onCheck={setPrivacyPolicy}>
          <Condition match={form === 'consultation'}>
            <FormattedMessage
              id='landing_modal_forms.give_my_consent_to_the_processing'
              defaultMessage='Даю согласие на обработку моих персональных данных'
            />
          </Condition>
          <Condition match={form === 'payment'}>
            <FormattedMessage id='landing_modal_forms.accept' defaultMessage='Принимаю' />
            <Space />
            <NextLink path='/'>
              <Text textTransform='lowercase' fontSize='semiMicro'>
                <FormattedMessage
                  id='landing_modal_forms.offer_agreement'
                  defaultMessage='договор оферты'
                />
              </Text>
            </NextLink>
            <Space />
            <FormattedMessage
              id='landing_modal_forms.and_i_give_my_consent'
              defaultMessage='и даю согласие на обработку моих персональных данных'
            />
          </Condition>
        </CheckboxMobile>
      </Row>
      <Layout flexBasis={[24, 62, 62]} flexShrink={0} />
    </Box>
  )
}

export { Form }
