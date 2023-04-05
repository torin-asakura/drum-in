import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { SelectedCourse }   from '../selected-course'
import { useModalForm }     from '../../data'

const ContentOneTimePayment = () => {
  const modalForm = useModalForm()

  return (
    <>
      {modalForm?.courses?.map(({ name, description }) => (
        <SelectedCourse title={name} description={description} />
      ))}
      <Layout flexBasis={[8, 16, 24]} flexShrink={0} />
      <Row justifyContent='end'>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight='medium'
          color='text.smokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.amount' defaultMessage='Сумма:' />
          <Space />
          {modalForm?.finalPriceForOneTimePayment}
        </Text>
      </Row>
      <Layout flexBasis={[35, 30, 40]} flexShrink={0} flexGrow={3} />
    </>
  )
}

export { ContentOneTimePayment }
