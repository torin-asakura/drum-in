import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  onlineCourse: {
    id: `${name}.online_course`,
    defaultMessage: 'он-лайн курс',
  },
  courseName: {
    id: `${name}.course_name`,
    defaultMessage: 'открытие ритма',
  },
  courseDescriptionContent: {
    id: `${name}.course_description_content`,
    defaultMessage:
      'Вы занимаетесь МУЗЫКОЙ и хотите делать это более ПРОФЕССИОНАЛЬНО? ПРИСОЕДИНЯЙТЕСЬ! РИТМ - одна из ГЛАВНЫХ составляющих музыки наряду со звуковысотностью и звукоизвлечением.  Для профессионального исполнения ВАЖНО брать нужные ноты в НУЖНЫЙ МОМЕНТ времени. РИТМИЧНОСТЬ - это не врожденный навык. В курсе представлен КОМПЛЕКС упражнений, позволяющих его развить.',
  },
  courseDescriptionLink: {
    id: `${name}.course_description_link`,
    defaultMessage: 'описание курса в pdf',
  },
  signUp: {
    id: `${name}.sign_up`,
    defaultMessage: 'записаться',
  },
  courseNameMobile: {
    id: `${name}.course_name_mobile`,
    defaultMessage: 'ритмсольфеджио',
  },
  buyCourse: {
    id: `${name}.buy_course`,
    defaultMessage: 'купить курс',
  },
  courseDescriptionMobile: {
    id: `${name}.course_description_mobile`,
    defaultMessage:
      'Предлагаю пройти мой авторский курс по ритму. Более 6 лет по нему занимаются студенты-музыканты первого курса МКИМ всех специальностей. Для занятий потребуется только доступ в интернет. Весь курс сопровождается онлайн поддержкой автора и подлежит корректировке для конкретных задач.',
  },
  yourName: {
    id: `${name}.your_name`,
    defaultMessage: 'Ваше имя',
  },
  numberTemplate: {
    id: `${name}.number_template`,
    defaultMessage: '+ 7 --- -- --',
  },
})
