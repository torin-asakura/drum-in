import React       from 'react'
import { useIntl } from 'react-intl'

import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Row }     from '@ui/layout'

import { Item }    from './item'

const ListDesktop = () => {
  const { formatMessage } = useIntl()

  return (
    <Column display={['none', 'none', 'flex']}>
      <Row>
        <Item
          question={formatMessage({
            id: 'landing_faq.who_is_suitable_for_studying_at_school',
            defaultMessage: 'Кому подойдет обучение в школе?',
          })}
          answer={formatMessage({
            id: 'landing_faq.the_school_is_program_is_suitable_for',
            defaultMessage:
              'Программа школы подойдет музыкантам, которые хотят усовершенствовать своё мастерство, а также вокалистам, композиторам, диджеям и педагогам.',
          })}
          positionVertical={68}
          positionHorizontal={473}
          width={533}
        />
        <Layout flexBasis={28} flexShrink={0} />
        <Item
          question={formatMessage({
            id: 'landing_faq.how_quickly_will_i_achieve_results',
            defaultMessage: 'Как быстро я достигну результатов?',
          })}
          answer={formatMessage({
            id: 'landing_faq.first_results_will_be_noticeable_in_a_month',
            defaultMessage:
              'Первые результаты станут заметны уже через месяц. При регулярном выполнении видео-заданий к концу каждой программы будет заметное улучшение по слуху, координации и понимании ритмической организации музыкального текста',
          })}
          positionVertical={72}
          positionHorizontal={473}
          width={550}
        />
      </Row>
      <Layout flexBasis={20} />
      <Row>
        <Item
          question={formatMessage({
            id: 'landing_faq.at_what_level_should_i_start_training',
            defaultMessage: 'С каким уровнем стоит начать обучение?',
          })}
          answer={formatMessage({
            id: 'landing_faq.if_you_have_been_doing_music_for_several_years',
            defaultMessage:
              'Если вы уже несколько лет занимаетесь музыкой и уже столкнулись с трудностями во владении временем и телом.',
          })}
          positionVertical={68}
          positionHorizontal={533}
          width={608}
        />
        <Layout flexBasis={28} flexShrink={0} />
        <Item
          question={formatMessage({
            id: 'landing_faq.in_what_format_does_the_training_take_place',
            defaultMessage: 'В каком формате проходит обучение?',
          })}
          answer={formatMessage({
            id: 'landing_faq.training_takes_place_completely_online',
            defaultMessage:
              'Обучение проходит полностью онлайн. Каждую неделю вы связываетесь с преподавателем в Zoom, где проходят вебинары, и проверяете задания в Telegram. Сами видео-задания в свою очередь нахоядтся на YouTube.',
          })}
          positionVertical={-264}
          positionHorizontal={475}
          width={572}
        />
      </Row>
      <Layout flexBasis={20} />
      <Row>
        <Item
          question={formatMessage({
            id: 'landing_faq.are_there_any_age_restrictions',
            defaultMessage: 'Есть ли возрастные ограничения?',
          })}
          answer={formatMessage({
            id: 'landing_faq.drum_instructor_works_for_everyone_who_wants_to_become_a_musician',
            defaultMessage:
              'Drum Instructor работает для всех, кто хочет стать музыкантом, вне зависимости от возраста. Ведь музыкальное обучение зависит только от вашего упорства и желания, а в остальном поможет преподаватель.',
          })}
          positionVertical={-264}
          positionHorizontal={444}
          width={526}
        />
        <Layout flexBasis={28} flexShrink={0} />
        <Item
          question={formatMessage({
            id: 'landing_faq.what_does_a_student_need_to_learn',
            defaultMessage: 'Что нужно ученику для обучения?',
          })}
          answer={formatMessage({
            id: 'landing_faq.drum_instructor_works_for_everyone_who_wants_to_become_a_musician',
            defaultMessage:
              'Drum Instructor работает для всех, кто хочет стать музыкантом, вне зависимости от возраста. Ведь музыкальное обучение зависит только от вашего упорства и желания, а в остальном поможет преподаватель.',
          })}
          positionVertical={-264}
          positionHorizontal={448}
          width={528}
        />
      </Row>
      <Layout flexBasis={20} />
      <Row>
        <Item
          question={formatMessage({
            id: 'landing_faq.how_much_time_will_i_need_to_devote_to_learning',
            defaultMessage: 'Сколько времени мне нужно будет уделять обучению?',
          })}
          answer={formatMessage({
            id: 'landing_faq.drum_instructor_works_for_everyone_who_wants_to_become_a_musician',
            defaultMessage:
              'Drum Instructor работает для всех, кто хочет стать музыкантом, вне зависимости от возраста. Ведь музыкальное обучение зависит только от вашего упорства и желания, а в остальном поможет преподаватель.',
          })}
          positionVertical={-264}
          positionHorizontal={672}
          width={755}
        />
        <Layout flexBasis={28} flexShrink={0} />
        <Item
          question={formatMessage({
            id: 'landing_faq.how_can_i_pay_for_training',
            defaultMessage: 'Как можно оплатить обучение?',
          })}
          answer={formatMessage({
            id: 'landing_faq.drum_instructor_works_for_everyone_who_wants_to_become_a_musician',
            defaultMessage:
              'Drum Instructor работает для всех, кто хочет стать музыкантом, вне зависимости от возраста. Ведь музыкальное обучение зависит только от вашего упорства и желания, а в остальном поможет преподаватель.',
          })}
          positionVertical={-264}
          positionHorizontal={328}
          width={500}
        />
      </Row>
    </Column>
  )
}
export { ListDesktop }
