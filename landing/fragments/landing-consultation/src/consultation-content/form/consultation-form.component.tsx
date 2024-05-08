import React                          from 'react'
import { FC }                         from 'react'
import { useState }                   from 'react'
import { useIntl }                    from 'react-intl'

import { ArrowLeftDownTailIcon }      from '@ui/icons'
import { Input }                      from '@ui/input'
import { Box }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Layout }                     from '@ui/layout'
import { useGetConsultationFormData } from '@globals/data/src'

import { Action }                     from './action'
import { ConsultationFormProps }      from './consultation-form.interfaces'

export const ConsultationForm: FC<ConsultationFormProps> = ({
  textForCheckbox,
  setVisibleModal,
}) => {
  const { consultationFormData } = useGetConsultationFormData()

  const { formatMessage } = useIntl()

  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [telegram, setTelegram] = useState<string>('')

  // @ts-ignore: Unreachable code error
  const namePlaceholder = consultationFormData?.fields?.nodes[0].label
  const phonePlaceholder = `${formatMessage({ id: 'symbol.plus' })}${
    // @ts-ignore: Unreachable code error
    consultationFormData?.fields?.nodes[1].label
  }`
  // @ts-ignore: Unreachable code error
  const telegramPlaceholder = consultationFormData?.fields?.nodes[2].label
  // @ts-ignore: Unreachable code error
  const submitButtonText = consultationFormData?.fields?.nodes[3].label

  const fields = { name, phone, telegram }

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
      <Action
        setVisibleModal={setVisibleModal}
        checkboxText={textForCheckbox}
        submitText={submitButtonText}
        fields={fields}
      />
      <Layout flexBasis={[20, 60, 60, 60]} flexShrink={0} />
    </>
  )
}
