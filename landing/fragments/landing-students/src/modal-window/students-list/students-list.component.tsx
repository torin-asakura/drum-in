import React          from 'react'
import { useIntl }    from 'react-intl'

import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'

import { OneStudent } from './one-student'

const StudentsList = () => {
  const { formatMessage } = useIntl()

  return (
    <Row>
      <Column width='100%'>
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.elizaveta_musaelyan',
            defaultMessage: 'Елизавета Мусаелян',
          })}
          age={formatMessage({
            id: 'landing_students.thirty_two_years_old',
            defaultMessage: '32 года',
          })}
          profession={formatMessage({
            id: 'landing_students.saxophonist',
            defaultMessage: 'Саксофонистка',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.maya_gorat',
            defaultMessage: 'Майа Горят',
          })}
          age={formatMessage({
            id: 'landing_students.thirty_one_years_old',
            defaultMessage: '31 год',
          })}
          profession={formatMessage({
            id: 'landing_students.violinist',
            defaultMessage: 'Скрипачка',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.alexey_lazarev',
            defaultMessage: 'Алексей Лазарев',
          })}
          age={formatMessage({
            id: 'landing_students.forty_years',
            defaultMessage: '40 лет',
          })}
          profession={formatMessage({
            id: 'landing_students.drummer',
            defaultMessage: 'Барабанщик',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.anfisa_shelekhina',
            defaultMessage: 'Анфиса Шелехина',
          })}
          age={formatMessage({
            id: 'landing_students.twenty_eight_years_old',
            defaultMessage: '28 лет',
          })}
          profession={formatMessage({
            id: 'landing_students.composer',
            defaultMessage: 'Композитор',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.yana_kombarova',
            defaultMessage: 'Яна Комбарова',
          })}
          age={formatMessage({
            id: 'landing_students.thirty_six_years_old',
            defaultMessage: '36 лет',
          })}
          profession={formatMessage({
            id: 'landing_students.guitarist',
            defaultMessage: 'Гитаристка',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.masha_horosha',
            defaultMessage: 'Маша Хороша',
          })}
          age={formatMessage({
            id: 'landing_students.thirty_eight_years_old',
            defaultMessage: '38 лет',
          })}
          profession={formatMessage({
            id: 'landing_students.vocalist',
            defaultMessage: 'Вокалистка',
          })}
        />
        <Layout flexBasis={20} flexShrink={0} />
        <OneStudent
          fullName={formatMessage({
            id: 'landing_students.nadezhda_leushina',
            defaultMessage: 'Надежда Леушина',
          })}
          age={formatMessage({
            id: 'landing_students.twenty_eight_years_old',
            defaultMessage: '28 лет',
          })}
          profession={formatMessage({
            id: 'landing_students.guitarist',
            defaultMessage: 'Гитаристка',
          })}
        />
      </Column>
    </Row>
  )
}
export { StudentsList }
