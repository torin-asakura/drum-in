import { defineMessages } from 'react-intl'

import { phoneNumber }    from '@site/data'

import { name }           from '../package.json'

export default defineMessages({
  instructor: {
    id: `${name}.instructor`,
    defaultMessage: 'барабанный инструктор',
  },
  instructorName: {
    id: `${name}.instructor_name`,
    defaultMessage: 'чуприкова марина',
  },
  whatsUp: {
    id: `${name}.whats_up`,
    defaultMessage: 'написать в whatsapp',
  },
  rythm: {
    id: `${name}.rythm`,
    defaultMessage: 'открытие ритма',
  },
  drum: {
    id: `${name}.drum`,
    defaultMessage: 'ударная установка',
  },
  instructorAbout: {
    id: `${name}.instructor_about`,
    defaultMessage: 'о преподавателе',
  },
  reviews: {
    id: `${name}`,
    defaultMessage: 'отзывы',
  },
  rythmMobile: {
    id: `${name}.rythm_mobile`,
    defaultMessage: 'ритмсольфеджо',
  },

})
