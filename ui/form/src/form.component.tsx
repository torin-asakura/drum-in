import React                       from 'react'
import { FC }                      from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import { FormContent }             from './form-content'
import { FormProps }               from './form.interfaces'

const sitekey = '6LeivSwlAAAAAL1abQj0DBd-w7zVtCHFHGge_Z7S'

const Form: FC<FormProps> = ({
  amount,
storeId
}) => (
  <GoogleReCaptchaProvider reCaptchaKey={sitekey}>
    <FormContent
      amount={amount}
      storeId={storeId}
    />
  </GoogleReCaptchaProvider>
)

export { Form }
