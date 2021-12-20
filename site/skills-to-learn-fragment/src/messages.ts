import { defineMessages } from 'react-intl'

import { name }           from '../package.json'

export default defineMessages({
  courseTime: {
    id: `${name}.course_time`,
    defaultMessage:
      'Прохождение курса рассчитано на 10 месяцев и включает в себя комплекс уроков и упражнений, а также творческих заданий, направленных на знакомство с длительностями, их воспроизведение и умение слышать в музыке, тренировку чувства ритма, акцентировки, полиритмии. Для музыкантов любого уровня и просто интересующихся музыкой.',
  },
  askQuestion: {
    id: `${name}.ask_question`,
    defaultMessage: 'ЗАДАТЬ ВОПРОС',
  },
})
