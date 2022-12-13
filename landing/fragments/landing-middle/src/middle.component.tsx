import React                    from 'react'

import { LearningProcessBlock } from '@landing/learning-process-fragment'
import { PrivateLessonBlock }   from '@landing/private-lesson-fragment'
import { TeacherBlock }         from '@landing/teacher-fragment'
import { Background }           from '@ui/background'

const Middle = () => (
  <>
    <Background
      display={['none', 'none', 'flex']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueCirclesImage'
      backgroundSize='1800px'
      backgroundRepeat='no-repeat'
      backgroundPosition='center 75%'
    >
      <TeacherBlock />
      <PrivateLessonBlock />
      <LearningProcessBlock />
    </Background>
    <Background
      display={['flex', 'flex', 'none']}
      flexDirection='column'
      width='100%'
      gradient='purpleBlueCirclesSmallImage'
      backgroundSize='100% auto'
      backgroundRepeat='no-repeat'
      backgroundPosition='center center'
    >
      <LearningProcessBlock />
      <TeacherBlock />
      <PrivateLessonBlock />
    </Background>
  </>
)

export { Middle }
