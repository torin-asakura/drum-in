import { ButtonWrapper }        from '@atls/tinkoff-payment-widget'
import { InputWrapper }         from '@atls/tinkoff-payment-widget'
import { AdditionalFieldsType } from '@atls/tinkoff-payment-widget'
import { Widget }               from '@atls/tinkoff-payment-widget'

import React                    from 'react'
import { FC }                   from 'react'
import { useIntl }              from 'react-intl'

import { Button }               from '@ui/button'
import { ButtonSize }           from '@ui/button'
import { ButtonVariant }        from '@ui/button'
import { Input }                from '@ui/input'
import { InputSize }            from '@ui/input'
import { Box }                  from '@ui/layout'
import { Layout }               from '@ui/layout'
import { Text }                 from '@ui/text'

import { TerminalScreen }       from './terminal.enum'
import { TerminalProps }        from './terminal.interfaces'

const Terminal: FC<TerminalProps> = ({ amount, disabled, screen }) => {
  const { formatMessage } = useIntl()
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

  // TODO: fix env's in runtime
  const storeId = process.env.NEXT_PUBLIC_TINKOFF_TERMINAL_ID ?? '1698844342541DEMO'

  return (
    <Widget amount={amount} settings={{ storeId }} disabled={disabled}>
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
          <Box>
            <Button {...props} {...buttonProps}>
              <Text {...textProps}>
                {formatMessage({
                  id: 'landing_modal_forms.pay',
                })}
              </Text>
            </Button>
          </Box>
        )}
      </ButtonWrapper>
    </Widget>
  )
}

export { Terminal }
