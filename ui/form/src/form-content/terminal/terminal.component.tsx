import { ButtonWrapper }        from '@atls/tinkoff-payment-widget'
import { InputWrapper }         from '@atls/tinkoff-payment-widget'
import { AdditionalFieldsType } from '@atls/tinkoff-payment-widget'
import { Widget }               from '@atls/tinkoff-payment-widget'

import React                    from 'react'
import { FC }                   from 'react'
import { useState }             from 'react'
import { useIntl }              from 'react-intl'

import { ButtonSize }           from '@ui/button'
import { ButtonVariant }        from '@ui/button'
import { Input }                from '@ui/input'
import { InputSize }            from '@ui/input'
import { Box }                  from '@ui/layout'
import { Layout }               from '@ui/layout'

import { ButtonPart }           from './button-part'
import { TerminalScreen }       from './terminal.enum'
import { TerminalProps }        from './terminal.interfaces'

const Terminal: FC<TerminalProps> = ({ terminalStoreId, amount, screen, privacyPolicy }) => {
  const { formatMessage } = useIntl()
  const [resultErrorMessage, setResultErrorMessage] = useState<string>('')
  const inputProps = screen === TerminalScreen.Desktop ? {} : { size: 'small' as InputSize }
  const layoutProps = {
    flexBasis: screen === TerminalScreen.Desktop ? 28 : 16,
    flexShrink: 0,
  }
  const buttonProps = {
    size: (screen === TerminalScreen.Desktop
      ? 'withoutPaddingSemiBigHeight'
      : 'withoutPaddingSemiRegularHeight') as ButtonSize,
    variant: 'purpleBackground' as ButtonVariant,
    fill: true,
  }
  const textProps = {
    fontWeight: 'semiBold',
    fontSize: screen === TerminalScreen.Desktop ? 'medium' : 'semiMedium',
    textTransform: 'uppercase',
  }

  const storeId = typeof terminalStoreId === 'string' ? terminalStoreId : ''

  return (
    <Widget amount={amount} settings={{ storeId }} disabled={false}>
      <InputWrapper name={AdditionalFieldsType.Name}>
        {(props) => (
          <Box flexDirection='column'>
            <Input
              {...props}
              placeholder={formatMessage({
                id: 'landing_modal_forms.enter_a_name',
              })}
              {...inputProps}
            />
            <Layout {...layoutProps} />
          </Box>
        )}
      </InputWrapper>
      <InputWrapper name={AdditionalFieldsType.Email}>
        {(props) => (
          <Box flexDirection='column'>
            <Input
              {...props}
              placeholder={formatMessage({
                id: 'landing_modal_forms.enter_a_email',
              })}
              {...inputProps}
            />
            <Layout {...layoutProps} />
          </Box>
        )}
      </InputWrapper>
      <InputWrapper name={AdditionalFieldsType.Phone}>
        {(props) => (
          <Box flexDirection='column'>
            <Input
              {...props}
              placeholder={formatMessage({
                id: 'landing_modal_forms.seven',
              })}
              {...inputProps}
            />
            <Layout {...layoutProps} />
          </Box>
        )}
      </InputWrapper>
      <ButtonWrapper>
        {(props) => (
          <ButtonPart
            formatMessage={formatMessage}
            privacyPolicy={privacyPolicy}
            resultErrorMessage={resultErrorMessage}
            setResultErrorMessage={setResultErrorMessage}
            buttonProps={buttonProps}
            textProps={textProps}
            {...props}
          />
        )}
      </ButtonWrapper>
    </Widget>
  )
}

export { Terminal }
