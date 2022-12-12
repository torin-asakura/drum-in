import React                  from 'react'

import { PrivateLessonBlock } from '@landing/private-lesson-fragment'
import { TeacherBlock }       from '@landing/teacher-fragment'
import { Background }         from '@ui/background'

const Middle = () => (
  <>
    <Background
      display={['none', 'none', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueCirclesImage'
      backgroundSize='contain'
      backgroundRepeat='no-repeat'
      backgroundPosition='center center'
    >
      <TeacherBlock />
      <PrivateLessonBlock />
    </Background>
    <Background
      display={['flex', 'flex', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueCirclesSmallImage'
      backgroundSize='100% auto'
      backgroundRepeat='no-repeat'
      backgroundPosition='center top'
    >
      <TeacherBlock />
      <PrivateLessonBlock />
    </Background>
  </>
)

export { Middle }
