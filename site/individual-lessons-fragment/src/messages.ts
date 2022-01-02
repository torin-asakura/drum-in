import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  individualLessonsHeader: {
    id: `${name}.individual_lessons_header`,
    defaultMessage: 'ИНДИВИДУАЛЬНЫЕ УРОКИ ИГРЫ НА БАРАБАНАХ',
  },
  individualLessonsContent: {
    id: `${name}.individual_lessons_content`,
    defaultMessage:
      'Более 14 лет я преподаю основы игры на барабанах для начинающих и продолжающих своё обучение. Занятия проводятся на студии. Также есть возможность заниматься он-лайн при наличии у учащегося палок, инструмента или тренировочного пэда. Продолжительность занятия 60 мин. Рекомендованная частота занятий - 2 раза в неделю.',
  },
  signUp: {
    id: `${name}.sign_up`,
    defaultMessage: 'ЗАПИСАТЬСЯ',
  },
})
