import React                 from 'react'
import { FC }                from 'react'

import { Column }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Layout }            from '@ui/layout'

import { OneStudent }        from './one-student'
import { StudentsListProps } from './students-list.interfaces'

const StudentsList: FC<StudentsListProps> = ({ list }) => (
  <Row>
    <Column width='100%'>
      {list?.map((student) => (
        <>
          <OneStudent
            fullName={student?.title || ''}
            age={student?.firstBadge || ''}
            profession={student?.secondBadge || ''}
          />
          <Layout flexBasis={20} flexShrink={0} />
        </>
      ))}
    </Column>
  </Row>
)

export { StudentsList }
