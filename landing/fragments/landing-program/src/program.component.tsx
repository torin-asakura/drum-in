import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { DesktopList }      from './desktop-list'
import { MobileList }       from './mobile-list'

const ProgramBlock = () => (
  <Row justifyContent='center' flexWrap='wrap'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%' alignItems={['start', 'start', 'center']}>
        <Layout flexBasis={[32, 75, 120]} />
        <Box>
          <Text
            textTransform='uppercase'
            textAlign={['left', 'left', 'center']}
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['regular', 'semiExtra', 'gigantic']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage
              id='landing_program.course_composition'
              defaultMessage='Состав курса'
            />
          </Text>
        </Box>
        <Layout flexBasis={[8, 16, 24]} />
        <Box>
          <Text
            width={['100%', 450, 595]}
            textAlign={['left', 'left', 'center']}
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'large']}
            lineHeight='primary'
            color='text.transparentSmokyWhite'
          >
            <FormattedMessage
              id='landing_program.you_can_complete_any_level"'
              defaultMessage='Вы можете пройти любой уровень как отдельный курс, в зависимости от вашей подготовки'
            />
          </Text>
        </Box>
        <Layout flexBasis={[36, 58, 80]} />
        <DesktopList />
        <Layout display={['none', 'none', 'flex']} flexBasis={[32, 75, 80]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} />
    </Box>
    <Column>
      <MobileList />
      <Layout display={['flex', 'flex', 'none']} flexBasis={[32, 75, 80]} />
    </Column>
  </Row>
)

export { ProgramBlock }
