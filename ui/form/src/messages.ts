import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  yourName: {
    id: `${name}.your_name`,
    defaultMessage: 'Ваше имя',
  },
  signUp: {
    id: `${name}.sign_up`,
    defaultMessage: 'Записаться',
  },
  numberTemplate: {
    id: `${name}.number_template`,
    defaultMessage: '+ 7 --- -- --',
  },
})
