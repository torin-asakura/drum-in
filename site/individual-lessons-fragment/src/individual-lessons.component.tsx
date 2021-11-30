import React                        from 'react'
import { FC }                       from 'react'

import { Box }                      from '@ui/layout'

import { IndividualLessonsDesktop } from './individual-lessons-desktop.component'
import { IndividualLessonsMobile }  from './individual-lessons-mobile.component'

const IndividualLessons: FC = () => (
  <Box
    width={['320px', '320px', '1440px']}
    height={['290px', '290px', '581px']}
    border='1px solid black'
  >
    <IndividualLessonsDesktop />
    <IndividualLessonsMobile />
  </Box>
)

export { IndividualLessons }
