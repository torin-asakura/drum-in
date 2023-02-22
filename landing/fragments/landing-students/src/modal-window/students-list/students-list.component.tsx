import React                               from 'react'
import { useEffect }                       from 'react'
import { useState }                        from 'react'

import { StudentsModal as SStudentsModal } from '@shared/data'
import { Column }                          from '@ui/layout'
import { Row }                             from '@ui/layout'
import { Layout }                          from '@ui/layout'
import { useMockedStudentsModal }          from '@shared/data'

import { OneStudent }                      from './one-student'

const StudentsList = () => {
  const { studentsModal: studentsModalData } = useMockedStudentsModal()
  const [studentsModal, setStudentsModal] = useState<SStudentsModal[]>([])

  useEffect(() => {
    setStudentsModal(studentsModalData)
    // eslint-disable-next-line
  }, [])

  return (
    <Row>
      <Column width='100%'>
        {studentsModal.map(({ fullName, age, profession }) => (
          <>
            <OneStudent fullName={fullName} age={age} profession={profession} />
            <Layout flexBasis={20} flexShrink={0} />
          </>
        ))}
      </Column>
    </Row>
  )
}
export { StudentsList }
