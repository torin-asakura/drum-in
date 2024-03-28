import { FC }               from 'react'
import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedNumber }  from 'react-intl'

import { Condition }       from '@ui/condition'
import { Form }            from '@ui/form'
import { RoundedLineIcon } from '@ui/icons'
import { Column }          from '@ui/layout'
import { Layout }          from '@ui/layout'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Space }           from '@ui/text'
import { Text }            from '@ui/text'
import { ContentProps }    from './content.interfaces'

import { SelectedCourse }   from './selected-course'
import { useModalForm }     from '../data'

const ContentMobile:FC<ContentProps> = ({polyrhythmicKeysData}) => {
  const modalForm = useModalForm()

  return (
    <Row height={540}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={12} flexShrink={0} />
        <Row justifyContent='center'>
          <RoundedLineIcon width={36} height={3} />
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
            {modalForm?.title}
          </Text>
        </Box>
        <Layout flexBasis={12} flexShrink={0} />
        {modalForm?.courses?.map(({ name, description }) => (
          <SelectedCourse title={name} description={description} />
        ))}
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
              value={modalForm?.finalPriceForOneTimePaymentNumber || 0}
              style='currency' // eslint-disable-line
              currency='RUB'
              maximumFractionDigits={0}
            />
          </Text>
        </Row>
        <Layout flexBasis={50} flexShrink={0} />
        <Condition match={!!modalForm?.finalPriceForOneTimePaymentNumber}>
          <Form amount={modalForm.finalPriceForOneTimePaymentNumber} form='payment' />
        </Condition>
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { ContentMobile }
