import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedNumber }  from 'react-intl'
import { useIntl }          from 'react-intl'

import { Condition }        from '@ui/condition'
import { Form }             from '@ui/form'
import { RoundedLineIcon }  from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { ContentProps }     from './content.interfaces'
import { SelectedCourse }   from './selected-course'

const ContentMobile: FC<ContentProps> = ({paymentSettingsData, polyrhythmicKeysData,paymentSettingsData, onClose }) => {
  const { formatMessage } = useIntl()

  return (
    <Row height={540}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={12} flexShrink={0} />
        <Row justifyContent='center'>
          <Box onClick={onClose} height={6} width={50} justifyContent='center' alignItems='center'>
            <RoundedLineIcon width={36} height={3} />
          </Box>
        </Row>
        <Layout flexBasis={32} flexShrink={0} />
        <Box width={300}>
          <Text
            fontWeight='medium'
            fontSize='large'
            lineHeight='default'
            color='text.smokyWhite'
            display='inline'
          >
            {formatMessage({ id: 'course.payment.buy_course' })}
            <Space />
            {`"${polyrhythmicKeysData?.title}"`}
          </Text>
        </Box>
        <Layout flexBasis={12} flexShrink={0} />
        <SelectedCourse
          title={`${formatMessage({ id: 'landing_modal_forms.course' })} "${
            polyrhythmicKeysData?.title
          }"`}
          description={polyrhythmicKeysData?.individualCourseData?.aboutCourse || ''}
        />
        <Layout flexBasis={18} flexShrink={0} />
        <Row justifyContent='end'>
          <Text
            fontWeight='medium'
            fontSize='semiMedium'
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
        <Layout flexBasis={50} flexShrink={0} />
        <Condition match={!!polyrhythmicKeysData?.individualCourseData?.price?.monthlyPrice}>
          <Form
            amount={polyrhythmicKeysData?.individualCourseData?.price?.monthlyPrice || 0}
            storeId={paymentSettingsData?.storeID}
          />
        </Condition>
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { ContentMobile }
