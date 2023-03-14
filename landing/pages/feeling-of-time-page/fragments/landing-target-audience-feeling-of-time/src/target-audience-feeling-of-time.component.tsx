import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { ItemCard }         from './item'

const TargetAudienceFeelingOfTimeBlock = () => {
  const { formatMessage } = useIntl()

  return (
    <Row justifyContent='center'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={[32, 46, 60]} />
          <Box width={['100%', 550, 750]}>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['regular', 'moderate', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              <FormattedMessage
                id='landing_target_audience.this_course_is_for_you_if_you'
                defaultMessage='Этот курс для вас, если вы'
              />
            </Text>
          </Box>
          <Layout flexBasis={[24, 44, 64]} />
          <Box
            width='100%'
            position='relative'
            height={{ _: 309, tablet: 550, laptop: 912, wide: 694 }}
          >
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.first',
                defaultMessage: '01',
              })}
              text={formatMessage({
                id: 'landing_target_audience_feeling_of_time.just_starting_your_musical_journey',
                defaultMessage: 'Только начинаете свой музыкальный путь',
              })}
              positionHorizontal={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              positionVertical={{ _: 0, tablet: 0, laptop: 0, wide: 0 }}
              zIndex={3}
            />
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.second',
                defaultMessage: '02',
              })}
              text={formatMessage({
                id: 'landing_target_audience_feeling_of_time.do_you_feel_a_lack_of_understanding',
                defaultMessage: 'Ощущаете непонимание музыкального времени',
              })}
              positionHorizontal={{ _: 45, tablet: 100, laptop: 0, wide: 313 }}
              positionVertical={{ _: 100, tablet: 175, laptop: 309, wide: 196 }}
              zIndex={2}
            />
            <ItemCard
              number={formatMessage({
                id: 'landing_target_audience.third',
                defaultMessage: '03',
              })}
              text={formatMessage({
                id: 'landing_target_audience_feeling_of_time.are_you_experiencing_difficulties',
                defaultMessage: 'Испытываете сложности при удержании темпа и снятии партий',
              })}
              positionHorizontal={{ _: 89, tablet: 225, laptop: 0, wide: 626 }}
              positionVertical={{ _: 200, tablet: 350, laptop: 618, wide: 400 }}
              zIndex={1}
            />
          </Box>
          <Layout flexBasis={[32, 77, 120]} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { TargetAudienceFeelingOfTimeBlock }
