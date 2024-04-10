/* eslint-disable */

import { useConsultationFormMutation } from '@globals/data/src/hooks/forms'
import React                           from 'react'
import { useState }                    from 'react'
import {Condition} from '@ui/condition'
import { Button }                from '@ui/button'
import { Checkbox }              from '@ui/checkbox'
import { CheckboxMobile }        from '@ui/checkbox'
import { ArrowLeftDownTailIcon } from '@ui/icons'
import { Input }                 from '@ui/input'
import { Box }                   from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Text }                  from '@ui/text'


export const ConsultationForm = () => {
  const [checkbox,setCheckbox] = useState<boolean>(false)

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')

  const {submitConsultationForm} = useConsultationFormMutation()

  const handleSubmitForm = () => submitConsultationForm({name:name,phone:phone,telegram:telegram})

  {
    /*
    *  TODO:
    *   - placeholders
    *   - validation
    *   - error messages
    *   - action after successful submit
    */
  }

  return (
    <>
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          placeholder='name'

        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={name}
          onChange={(value) => setName(value)}
          placeholder='name'
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder='phone'
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={phone}
          onChange={(value) => setPhone(value)}
          placeholder='phone'
          size='small'
        />
      </Box>
      <Layout flexBasis={[16, 28, 28]} flexShrink={0} />
      <Box display={['none', 'flex', 'flex']}>
        <Input
          value={telegram}
          onChange={(value) => setTelegram(value)}
          placeholder='telegram'
        />
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Input
          value={telegram}
          onChange={(value) => setTelegram(value)}
          placeholder='telegram'
          size='small'
        />
      </Box>
      <Layout flexBasis={[32, 36, 36]} flexShrink={0} />
        <Layout flexBasis={34} flexShrink={0} />
        <Row justifyContent='end'>
          <Box style={{ transform: 'rotate(45deg)' }} width={102} height={103}>
            <ArrowLeftDownTailIcon width={102} height={103} />
          </Box>
          <Layout flexBasis={13} flexShrink={0} />
        </Row>
        <Layout flexBasis={40} flexShrink={0} />
        <Layout flexGrow={3} />
      <Box display={['none', 'flex', 'flex']}>
        <Button
          disabled={!checkbox}
          size='withoutPaddingSemiBigHeight'
          variant='purpleBackground'
          fill
          onClick={handleSubmitForm}
        >
          <Text fontWeight='semiBold' fontSize='medium' textTransform='uppercase'>
            send
          </Text>
        </Button>
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Button
          disabled={!checkbox}
          size='withoutPaddingSemiRegularHeight'
          variant='purpleBackground'
          fill
          onClick={handleSubmitForm}
        >
          <Text fontWeight='semiBold' fontSize='semiMedium' textTransform='uppercase'>
            send
          </Text>
        </Button>
      </Box>
      <Layout flexBasis={[16, 20, 20]} flexShrink={0} />
      <Row display={['none', 'flex', 'flex']}>
        <Checkbox checked={checkbox} onCheck={setCheckbox}>
          privacyPolicy
        </Checkbox>
      </Row>
      <Row display={['flex', 'none', 'none']}>
        <CheckboxMobile checked={checkbox} onCheck={setCheckbox}>
          privacyPolicy
        </CheckboxMobile>
      </Row>
      <Layout flexBasis={[20,60,60,60]}/>
    </>
  )
}
