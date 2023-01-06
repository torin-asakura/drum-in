import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { SkillsList }       from './skills-list'

const SkillsBlock = () => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%'>
        <Layout flexBasis={[24, 60, 89]} />
        <Box display={['flex', 'flex', 'none']}>
          <Text
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'moderate']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage
              id='landing_skills.during_the_course_you_will_master'
              defaultMessage='На курсе вы освоите'
            />
          </Text>
        </Box>
        <Layout flexBasis={[8, 12, 0]} display={['flex', 'flex', 'none']} />
        <Box width={[235, 340, 0]} display={['flex', 'flex', 'none']}>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'regular']}
            lineHeight='primary'
            color='text.transparentSmokyWhite'
          >
            <FormattedMessage
              id='landing_skills.rhythms_of_different_musical_styles'
              defaultMessage='Ритмы разных музыкальных стилей и разных стран мира'
            />
          </Text>
        </Box>
        <Layout flexBasis={[16, 22, 0]} display={['flex', 'flex', 'none']} />
        <Box
          width={{ _: '100%', tablet: 360, laptop: 1204, wide: '100%' }}
          height={[200, 250, 750]}
          backgroundColor='background.blackAmber'
          border={['normalSmokyWhite', 'mediumBoldSmokyWhite', 'veryBoldSmokyWhite']}
          borderRadius={['medium', 'larger', 'huge']}
          alignSelf={['start', 'start', 'center']}
          overflow='hidden'
        >
          <Column width='100%'>
            <Layout flexBasis={92} display={['none', 'none', 'flex']} />
            <Row display={['none', 'none', 'flex']} justifyContent='center'>
              <Text
                textTransform='uppercase'
                fontFamily='DrukWideCy'
                fontWeight='bold'
                fontSize='big'
                lineHeight='default'
                color='text.smokyWhite'
              >
                <FormattedMessage
                  id='landing_skills.during_the_course_you_will_master'
                  defaultMessage='На курсе вы освоите'
                />
              </Text>
            </Row>
            <Layout flexBasis={24} display={['none', 'none', 'flex']} />
            <Box alignSelf='center' width={400} display={['none', 'none', 'flex']}>
              <Text
                textAlign='center'
                fontWeight='medium'
                fontSize='large'
                lineHeight='primary'
                color='text.gray'
              >
                <FormattedMessage
                  id='landing_skills.rhythms_of_different_musical_styles'
                  defaultMessage='Ритмы разных музыкальных стилей и разных стран мира'
                />
              </Text>
            </Box>
            <SkillsList />
          </Column>
        </Box>
        <Layout flexBasis={[24, 72, 120]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} />
    </Box>
  </Row>
)

export { SkillsBlock }
