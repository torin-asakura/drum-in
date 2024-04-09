import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedNumber }  from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Condition }        from '@ui/condition'
import { Form }             from '@ui/form'
import { CrossMenuIcon }    from '@ui/icons'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { ContentProps }     from './content.interfaces'
import { SelectedCourse }   from './selected-course'

const ContentDesktop: FC<ContentProps> = ({ polyrhythmicKeysData, onClose }) => {
  const { formatMessage } = useIntl()
  return (
    <>
      <Box
        width='100%'
        flexDirection={['column', 'row', 'row']}
        justifyContent={['start', 'space-between', 'space-between']}
        alignItems='start'
      >
        <Box width={['100%', 450, 450]}>
          <Text
            display='inline'
            fontWeight='medium'
            fontSize={['large', 'moderate', 'semiIncreased']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {formatMessage({ id: 'course.payment.buy_course' })}
            <Space />
            {`"${polyrhythmicKeysData?.title}"`}
          </Text>
        </Box>
        <Box width={['100%', 'auto', 'auto']} justifyContent='end'>
          <Button
            size='littlePaddingMediumHeight'
            variant='transparentWhiteToGrayBackground'
            onClick={onClose}
          >
            <CrossMenuIcon width={24} height={24} />
          </Button>
        </Box>
      </Box>
      <Layout flexBasis={31} flexShrink={0} />
      <SelectedCourse
        title={`${formatMessage({ id: 'landing_modal_forms.course' })} "${
          polyrhythmicKeysData?.title
        }"`}
        description={polyrhythmicKeysData?.individualCourseData?.aboutCourse || ''}
      />
      <Layout flexBasis={24} flexShrink={0} />
      <Row justifyContent='end'>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight='medium'
          color='text.smokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.amount' />
          <Space />
          <FormattedNumber
            value={polyrhythmicKeysData?.individualCourseData?.price?.monthlyPrice || 0}
            style='currency' // eslint-disable-line
            currency='RUB'
            maximumFractionDigits={0}
          />
        </Text>
      </Row>
      <Layout flexBasis={50} flexShrink={0} flexGrow={2} />
      <Condition match={!!polyrhythmicKeysData?.individualCourseData?.price?.monthlyPrice}>
        <Form
          amount={polyrhythmicKeysData?.individualCourseData?.price?.monthlyPrice || 0}
          form='payment'
        />
      </Condition>
    </>
  )
}

export { ContentDesktop }
