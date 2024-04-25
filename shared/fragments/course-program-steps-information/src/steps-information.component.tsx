import React                        from 'react'
import { FC }                       from 'react'

import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Column }                   from '@ui/layout'

import { FifthStep }                from './fifth-step'
import { FirstStep }                from './first-step'
import { FourthStep }               from './fourth-step'
import { SecondStep }               from './second-step'
import { FIFTH_STEP_INDEX }         from './steps-information.constants'
import { FOURTH_STEP_INDEX }        from './steps-information.constants'
import { SECOND_STEP_INDEX }        from './steps-information.constants'
import { THIRD_STEP_INDEX }         from './steps-information.constants'
import { FIRST_STEP_INDEX }         from './steps-information.constants'
import { FIFTH_STEP_INDENT_LEFT }   from './steps-information.constants'
import { FIFTH_STEP_INDENT_TOP }    from './steps-information.constants'
import { FOURTH_STEP_INDENT_TOP }   from './steps-information.constants'
import { FOURTH_STEP_INDENT_LEFT }  from './steps-information.constants'
import { THIRD_STEP_INDENT_BOTTOM } from './steps-information.constants'
import { THIRD_STEP_INDENT_LEFT }   from './steps-information.constants'
import { FIRST_STEP_INDENT_LEFT }   from './steps-information.constants'
import { FIRST_STEP_INDENT_BOTTOM } from './steps-information.constants'
import { SECOND_STEP_INDENT_LEFT }  from './steps-information.constants'
import { SECOND_STEP_INDENT_TOP }   from './steps-information.constants'
import { CONTAINER_LEFT_INDENT }    from './steps-information.constants'
import { CONTAINER_HEIGHT }         from './steps-information.constants'
import { LAYER_HEIGHT }             from './steps-information.constants'
import { LAYER_WIDTH }              from './steps-information.constants'
import { StepsInformationProps }    from './steps-information.interfaces'
import { ThirdStep }                from './third-step'

export const StepsInformation: FC<StepsInformationProps> = ({ stepsData }) => (
  <Box position='absolute' height={CONTAINER_HEIGHT} left={CONTAINER_LEFT_INDENT}>
    <Box position='relative'>
      <Column>
        <Box width={LAYER_WIDTH} height={LAYER_HEIGHT} position='relative' flexShrink={0}>
          <Box position='absolute' left={FIRST_STEP_INDENT_LEFT} bottom={FIRST_STEP_INDENT_BOTTOM}>
            <FirstStep
              title={stepsData?.[FIRST_STEP_INDEX]?.title}
              description={stepsData?.[0]?.description}
            />
          </Box>
          <Box position='absolute' left={THIRD_STEP_INDENT_LEFT} bottom={THIRD_STEP_INDENT_BOTTOM}>
            <ThirdStep
              title={stepsData?.[THIRD_STEP_INDEX]?.title}
              description={stepsData?.[2]?.description}
            />
          </Box>
        </Box>

        <Layout flexGrow={1} />

        <Box width={LAYER_WIDTH} height={LAYER_HEIGHT} position='relative'>
          <Box position='absolute' left={SECOND_STEP_INDENT_LEFT} top={SECOND_STEP_INDENT_TOP}>
            <SecondStep
              title={stepsData?.[SECOND_STEP_INDEX]?.title}
              description={stepsData?.[1]?.description}
            />
          </Box>
          <Box
            position='absolute'
            left={FOURTH_STEP_INDENT_LEFT}
            top={FOURTH_STEP_INDENT_TOP}
            alignItems='center'
          >
            <FourthStep
              title={stepsData?.[FOURTH_STEP_INDEX]?.title}
              description={stepsData?.[3]?.description}
            />
          </Box>
          <Box
            position='absolute'
            left={FIFTH_STEP_INDENT_LEFT}
            top={FIFTH_STEP_INDENT_TOP}
            alignItems='center'
          >
            <FifthStep
              title={stepsData?.[FIFTH_STEP_INDEX]?.title}
              description={stepsData?.[4]?.description}
            />
          </Box>
        </Box>
      </Column>
    </Box>
  </Box>
)
