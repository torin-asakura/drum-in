import { useForm }          from '@atls/tinkoff-payment-widget'

import React                from 'react'

import { Button }           from '@ui/button'
import { Text }             from '@ui/text'
import { usePopover }       from '@ui/utils'

import { ErrorPopoverPart } from '../../error-popover-part'

export const ButtonPart = ({
  formatMessage,
  privacyPolicy,
  resultErrorMessage,
  setResultErrorMessage,
  buttonProps,
  textProps,
  ...props
}) => {
  const { isValidate, fieldsState, errors } = useForm()

  const { triggerProps, layerProps, render, setOpen } = usePopover('bottom-center', 8)

  const submitButtonClickHandler = (e) => {
    if (!(fieldsState.email && fieldsState.phone && isValidate && privacyPolicy)) {
      e.preventDefault()
      const actionErrorMessage: Array<string> = []

      if (errors.email) {
        actionErrorMessage.push(formatMessage({ id: 'landing_modal_forms.not_valid_email' }))
      }

      if (!fieldsState.email) {
        actionErrorMessage.push(formatMessage({ id: 'landing_modal_forms.empty_email' }))
      }

      if (errors.phone) {
        actionErrorMessage.push(formatMessage({ id: 'landing_modal_forms.not_valid_phone' }))
      }

      if (!fieldsState.phone) {
        actionErrorMessage.push(
          formatMessage({
            id: 'landing_modal_forms.empty_phone',
          })
        )
      }

      if (!privacyPolicy) {
        actionErrorMessage.push(
          formatMessage({
            id: 'landing_modal_forms.privacy_policy_error',
          })
        )
      }

      setResultErrorMessage(actionErrorMessage.join('\n'))

      setOpen(true)
    }
  }

  return (
    <>
      <Button
        {...triggerProps}
        {...props}
        {...buttonProps}
        onClick={(e) => submitButtonClickHandler(e)}
      >
        <Text {...textProps}>
          {formatMessage({
            id: 'landing_modal_forms.pay',
          })}
        </Text>
      </Button>
      <ErrorPopoverPart render={render} layerProps={layerProps} text={resultErrorMessage} />
    </>
  )
}
