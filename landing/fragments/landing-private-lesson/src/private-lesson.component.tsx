import React                  from 'react'
import { FormattedMessage }   from 'react-intl'
import { forwardRef }         from 'react'

import { RightDownArrowIcon } from '@ui/icons'
import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Space }              from '@ui/text'
import { Text }               from '@ui/text'

import { LeftColumn }         from './left-column'
import { RightColumn }        from './right-column'

const PrivateLessonBlock = forwardRef(({ data }: any, ref: any) => (
  <Row justifyContent='center' ref={ref}>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[24, 60, 90]} />
        <Box width={['100%', 700, 0]} display={['flex', 'flex', 'none']}>
          <Text
            display='inline'
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize={['regular', 'moderate', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage id='landing_private_lesson.private' defaultMessage='Индивидуальное' />
            <Space />
            <FormattedMessage id='landing_private_lesson.lesson' defaultMessage='Занятие' />
          </Text>
        </Box>
        <Layout flexBasis={[24, 34, 0]} display={['flex', 'flex', 'none']} />
        <Box backgroundColor='background.smokyWhite' borderRadius={['extra', 'extra', 'bigger']}>
          <Column width='100%'>
            <Layout flexBasis={[40, 46, 52]} />
            <Row>
              <Layout flexBasis={[24, 38, 52]} flexShrink={0} />
              <Row flexWrap={['wrap', 'wrap', 'nowrap']}>
                <LeftColumn />
                <Layout flexBasis={0} flexGrow={3} display={['none', 'none', 'flex']} />
                <Box display={['none', 'none', 'flex']} alignItems='center' height='100%'>
                  <RightDownArrowIcon width={105} height={130} />
                </Box>
                <Layout display={['none', 'none', 'flex']} flexBasis={20} flexShrink={2} />
                <RightColumn />
              </Row>
              <Layout flexBasis={[24, 38, 52]} flexShrink={0} />
            </Row>
            <Layout flexBasis={[23, 40, 52]} />
          </Column>
        </Box>
        <Layout flexBasis={[24, 60, 90]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
))
export { PrivateLessonBlock }
