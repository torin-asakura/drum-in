import { defineMessages } from 'react-intl'
import { name }           from '../package.json'

export default defineMessages({
  whatsUp: {
    id: `${name}.whats_up`,
    defaultMessage: 'написать в whatsapp',
  },
  linkMobile: {
    id: `${name}.link_mobile`,
    defaultMessage: '+7-926-246-47-59',
  },
  signUp: {
    id: `${name}.sign_up`,
    defaultMessage: 'записаться',
  },
})
