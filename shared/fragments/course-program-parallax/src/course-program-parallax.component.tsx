import React                                 from 'react'
import { FC }                                from 'react'

import { CourseProgramSteps }                from '@shared/course-program-steps'
import { ArrowTopDownIcon }                  from '@ui/icons'
import { ProgramIcon }                       from '@ui/icons'
import { Box }                               from '@ui/layout'
import { Layout }                            from '@ui/layout'

import { ARROW_ICON_INDENT_FROM_TOP }        from './course-program-parallax.constants'
import { COURSE_PROGRAM_STEPS_WRAPPER_SIZE } from './course-program-parallax.constants'
import { ARROW_ICON_INDENT_FROM_RIGHT }      from './course-program-parallax.constants'
import { ARROW_ICON_SIZE }                   from './course-program-parallax.constants'
import { PROGRAM_ICON_SIZE }                 from './course-program-parallax.constants'
import { INDENT_FORM_LEFT }                  from './course-program-parallax.constants'
import { SCROLL_ELEMENT_DIRECTION }          from './course-program-parallax.constants'
import { SCROLL_ELEMENT_SPEED }              from './course-program-parallax.constants'
import { SCROLL_ELEMENT_POSITION }           from './course-program-parallax.constants'
import { SCROLL_ELEMENT_TARGET }             from './course-program-parallax.constants'
import { CONTAINER_WIDTH }                   from './course-program-parallax.constants'
import { CONTAINER_HEIGHT }                  from './course-program-parallax.constants'
import { SUPPORTIVE_CONTAINER_HEIGHT }       from './course-program-parallax.constants'
import { SUPPORTIVE_CONTAINER_WIDTH }        from './course-program-parallax.constants'
import { SCROLL_CONTAINER_ID }               from './course-program-parallax.constants'
import { SCROLL_ELEMENT_ID }                 from './course-program-parallax.constants'
import { CourseProgramParallaxProps }        from './course-program-parallax.interfaces'

export const CourseProgramParallax: FC<CourseProgramParallaxProps> = ({
  stepsContent,
  containerHeight,
}) => (
  <Box
    data-scroll
    data-scroll-position='bottom'
    id={SCROLL_CONTAINER_ID}
    height={containerHeight || CONTAINER_HEIGHT}
    width={CONTAINER_WIDTH}
    backgroundColor='black'
    position='relative'
    flexShrink={0}
  >
    <Box
      data-scroll
      data-scroll-sticky
      data-scroll-target='#scroll'
      height={SUPPORTIVE_CONTAINER_HEIGHT}
      width={SUPPORTIVE_CONTAINER_WIDTH}
      position='relative'
      flexShrink={0}
    >
      <Box
        data-scroll
        data-scroll-direction={SCROLL_ELEMENT_DIRECTION}
        data-scroll-target={SCROLL_ELEMENT_TARGET}
        data-scroll-position={SCROLL_ELEMENT_POSITION}
        data-scroll-speed={SCROLL_ELEMENT_SPEED}
        id={SCROLL_ELEMENT_ID}
        alignItems='center'
        height='100%'
        width='100%'
        flexShrink={0}
      >
        <Layout width={INDENT_FORM_LEFT} flexShrink={0} />
        <Box width={PROGRAM_ICON_SIZE} flexShrink={0}>
          <ProgramIcon width='100%' height='auto' />
        </Box>
        <Box
          width={COURSE_PROGRAM_STEPS_WRAPPER_SIZE}
          position='relative'
          alignItems='center'
          flexShrink={0}
        >
          {stepsContent}
          <CourseProgramSteps containerID={SCROLL_CONTAINER_ID} elementID={SCROLL_ELEMENT_ID} />
          <Box
            position='absolute'
            right={ARROW_ICON_INDENT_FROM_RIGHT}
            top={ARROW_ICON_INDENT_FROM_TOP}
            width={ARROW_ICON_SIZE}
          >
            <ArrowTopDownIcon width='100%' height='auto' />
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)
