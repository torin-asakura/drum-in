import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { FormattedNumber }  from 'react-intl'

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
import { useModalForm }     from '../data'

const ContentDesktop: FC<ContentProps> = ({ onClose }) => {
  const modalForm = useModalForm()

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
            {modalForm?.title}
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
      {modalForm?.courses?.map(({ name, description }) => (
        <SelectedCourse title={name} description={description} />
      ))}
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
            value={modalForm?.finalPriceForOneTimePaymentNumber || 0}
            style='currency' // eslint-disable-line
            currency='RUB'
            maximumFractionDigits={0}
          />
        </Text>
      </Row>
      <Layout flexBasis={50} flexShrink={0} flexGrow={2} />
      <Condition match={!!modalForm?.finalPriceForOneTimePaymentNumber}>
        <Form amount={modalForm.finalPriceForOneTimePaymentNumber} form='payment' />
      </Condition>
    </>
  )
}

export { ContentDesktop }
