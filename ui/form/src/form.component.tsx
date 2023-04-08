import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { FormContent }             from './form-content'
import { FormProps }               from './form.interfaces'

const doNothing = () => {
  // do nothing
}

const sitekey = '6LeivSwlAAAAAL1abQj0DBd-w7zVtCHFHGge_Z7S'

const Form: FC<FormProps> = ({
  arrow = false,
  form = 'consultation',
  onSuccess = doNothing,
  onFailure = doNothing,
}) => (
  <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
    <FormContent arrow={arrow} form={form} onSuccess={onSuccess} onFailure={onFailure} />
  </GoogleReCaptchaProvider>
)

export { Form }
