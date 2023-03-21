import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { SelectedCourse }   from '../selected-course'
import { useModalForm }      from '../../data'

const ContentOneTimePayment = () => {
  const modalForm = useModalForm()

  return (
    <>
      {modalForm?.courses?.map(({ description, name, price }) => (
        <>
          <SelectedCourse title={name} description={description} price={price} />
          <Layout flexBasis={[8, 10, 12]} flexShrink={0} />
        </>
      ))}
      <Layout flexBasis={[0, 6, 12]} flexShrink={0} />
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
      <Layout flexBasis={[32, 50, 67]} flexShrink={0} />
    </>
  )
}
export { ContentOneTimePayment }
