import React                  from 'react'
import { FormattedMessage }   from 'react-intl'
import { useIntl }            from 'react-intl'

import { RightDownArrowIcon } from '@ui/icons'
import { Box }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { Tape }               from './tape'

const BannerCourseBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Box flexDirection='column' width='100%' alignItems='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} />
        <Box
          width='100%'
          position='relative'
          flexDirection='column'
          alignItems={['start', 'start', 'end']}
        >
          <Layout flexBasis={[124, 142, 160]} />
          <Row>
            <Text
              textAlign={['left', 'left', 'right']}
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['moderate', 'huge', 'biggest']}
              lineHeight={['default', 'default', 'semiSmall']}
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_banner_course.opening_the_rhythm'
                defaultMessage='Открытие ритма'
              />
            </Text>
          </Row>
          <Layout flexBasis={[16, 28, 40]} />
          <Box width={['100%', '100%', 815]}>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color={[
                'text.transparentSmokyWhite',
                'text.transparentSmokyWhite',
                'text.smokyWhite',
              ]}
            >
              <FormattedMessage
                id='landing_banner_course.course_that_will_help_you_understand'
                defaultMessage='Курс, который поможет понимать,'
              />
            </Text>
          </Box>
          <Box width={['100%', '100%', 815]}>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color={[
                'text.transparentSmokyWhite',
                'text.transparentSmokyWhite',
                'text.smokyWhite',
              ]}
            >
              <FormattedMessage
                id='landing_banner_course.perform_and_write_music'
                defaultMessage='исполнять и писать музыку'
              />
            </Text>
          </Box>
          <Box display={['none', 'none', 'flex']} position='absolute' left={150} top={242}>
            <RightDownArrowIcon color='rgb(242, 242, 242)' width={300} height={200} />
          </Box>
          <Box
            display={['flex', 'flex', 'none']}
            position='absolute'
            right={0}
            bottom={[24, 64, 0]}
            style={{ transform: 'scale(-1, 1)' }}
          >
            <RightDownArrowIcon color='rgb(242, 242, 242)' width={60} height={60} />
          </Box>
          <Layout flexBasis={[44, 84, 126]} />
        </Box>
        <Layout flexBasis={[20, 30, 40]} />
      </Box>
      <Tape
        level={formatMessage({
          id: 'landing_banner_course.basis_course',
          defaultMessage: '#ОСНОВНОЙ КУРС',
        })}
      />
    </Box>
  )
}
export { BannerCourseBlock }
