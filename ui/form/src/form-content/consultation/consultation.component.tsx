/* eslint-disable */

import React                     from 'react'
import { FC }                    from 'react'
import { useState }              from 'react'

import { Button }                from '@ui/button'
import { Checkbox }              from '@ui/checkbox'
import { CheckboxMobile }        from '@ui/checkbox'
import { Condition }             from '@ui/condition'
import { ArrowLeftDownTailIcon } from '@ui/icons'
import { Input }                 from '@ui/input'
import { Box }                   from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Text }                  from '@ui/text'

import { ConsultationProps }     from './consultation.interface'
import { messages }              from '../../messages'

export const Consultation: FC<ConsultationProps> = ({ privacyPolicy, setPrivacyPolicy, arrow }) => {
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')

  {
    /* TODO: add mutation request by specifying state: name, phone, telegram */
  }

  return (
    <>
      <Box display={['none', 'flex', 'flex']}>
        <Input value={name} onChange={(value) => setName(value)} placeholder={messages.name} />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          placeholder={messages.name}
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input value={phone} onChange={(value) => setPhone(value)} placeholder={messages.phone} />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder={messages.phone}
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={telegram}
          onChange={(value) => setTelegram(value)}
          placeholder={messages.telegram}
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={telegram}
          onChange={(value) => setTelegram(value)}
          placeholder={messages.telegram}
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
          // onClick={sendForm}
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
          // onClick={sendForm}
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
    </>
  )
}
