import React                       from 'react'
import { FC }                      from 'react'

import { CourseProgramStepsProps } from './course-program-steps.interfaces'
import { CourseProgramIcon }       from './icons'
import { useCourseProgramSteps }   from './hooks'

export const CourseProgramSteps: FC<CourseProgramStepsProps> = ({ containerID, elementID }) => {
  const { progress } = useCourseProgramSteps(containerID, elementID)
  return <CourseProgramIcon progress={progress} />
}
