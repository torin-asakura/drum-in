import React           from 'react'

import { Column }      from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'

import { OneStudent }  from './one-student'
import { useStudents } from '../../data'

const StudentsList = () => {
  const students = useStudents()?.students?.listStudents

  return (
    <Row>
      <Column width='100%'>
        {students?.map(({ name, age, specialization }) => (
          <>
            <OneStudent fullName={name} age={age} profession={specialization} />
            <Layout flexBasis={20} flexShrink={0} />
          </>
        ))}
      </Column>
    </Row>
  )
}
export { StudentsList }
