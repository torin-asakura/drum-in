import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  aboutHeader: {
    id: `${name}.about_header`,
    defaultMessage: 'О преподавателе',
  },
  aboutContent: {
    id: `${name}.about_content`,
    defaultMessage:
      'С 2006г занимаюсь частным преподаванием. Получала опыт преподавания в лучших школах Москвы - в барабанной школе А.Климовича "Drumschool", в студии И.Сандлера «Музыкальная революция», в детской музыкальной студии "Квадрат Соло". В настоящее время - преподаватель Московского Колледжа Импровизационной Музыки по предмету Ритмсольфеджио.',
  },
})
