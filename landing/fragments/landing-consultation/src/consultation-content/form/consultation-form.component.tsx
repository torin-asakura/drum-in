import React                          from 'react'
import { FC }                         from 'react'
import { useState }                   from 'react'
import { useIntl }                    from 'react-intl'

import { ArrowLeftDownTailIcon }      from '@ui/icons'
import { Input }                      from '@ui/input'
import { Box }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Row }                        from '@ui/layout'
import { Layout }                     from '@ui/layout'
import { useGetConsultationFormData } from '@globals/data/src/hooks/forms'

import { Action }                     from './action'
import { ConsultationFormProps }      from './consultation-form.interfaces'

export const ConsultationForm: FC<ConsultationFormProps> = ({ textForCheckbox }) => {
  const { formatMessage } = useIntl()
  const { formData } = useGetConsultationFormData()

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')

  // TODO: why nodes defined as type never

  const namePlaceholder = formData?.fields?.nodes?.[0]?.label
  const phonePlaceholder = `${formatMessage({ id: 'symbol.plus' })}${
    formData?.fields?.nodes?.[1]?.label
  }`
  const telegramPlaceholder = formData?.fields?.nodes?.[2]?.label
  const submitButtonText = formData?.fields?.nodes?.[3]?.label

  const fields = { name: name, phone: phone, telegram: telegram }

  {
    /*
     *  TODO:
     *   - validation
     *   - error messages
     *   - action after successful submit
     */
  }

  return (
    <>
      <Column height='auto' display={['none', 'flex', 'flex']}>
        <Box>
          <Input value={name} onChange={(value) => setName(value)} placeholder={namePlaceholder} />
        </Box>
        <Layout flexBasis={28} />
        <Box>
          <Input
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder={phonePlaceholder}
          />
        </Box>
        <Layout flexBasis={28} />
        <Box>
          <Input
            value={telegram}
            onChange={(value) => setTelegram(value)}
            placeholder={telegramPlaceholder}
          />
        </Box>
      </Column>
      <Column height='auto' display={['flex', 'none', 'none']}>
        <Box>
          <Input
            value={name}
            onChange={(value) => setName(value)}
            placeholder={namePlaceholder}
            size='small'
          />
        </Box>
        <Layout flexBasis={16} />
        <Box>
          <Input
            value={phone}
            onChange={(value) => setPhone(value)}
            placeholder={phonePlaceholder}
            size='small'
          />
        </Box>
        <Layout flexBasis={16} />
        <Box>
          <Input
            value={telegram}
            onChange={(value) => setTelegram(value)}
            placeholder={telegramPlaceholder}
            size='small'
          />
        </Box>
      </Column>
      <Layout flexBasis={[32, 36, 36]} flexShrink={0} />
      <Box fill display={['none', 'flex', 'flex']}>
        <Layout flexBasis={20} flexGrow={1} />
        <Box style={{ transform: 'rotate(45deg)' }}>
          <ArrowLeftDownTailIcon width={102} height={103} />
        </Box>
        <Layout flexBasis={110} />
      </Box>
      <Layout flexBasis={50} flexGrow={1} />
      <Action checkboxText={textForCheckbox} submitText={submitButtonText} fields={fields} />
      <Layout flexBasis={[20, 60, 60, 60]} flexShrink={0} />
    </>
  )
}
