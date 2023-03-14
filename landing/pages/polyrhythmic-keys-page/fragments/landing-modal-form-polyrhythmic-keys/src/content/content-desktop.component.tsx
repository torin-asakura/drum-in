import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'
import { useIntl }          from 'react-intl'

import { Button }           from '@ui/button'
import { Form }             from '@ui/form'
import { CrossMenuIcon }    from '@ui/icons'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { ContentProps }     from './content.interfaces'
import { SelectedCourse }   from './selected-course'

const ContentDesktop: FC<ContentProps> = ({ onClose }) => {
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
            <FormattedMessage
              id='landing_modal_form_polyrhythmic_keys.buy_a_course'
              defaultMessage='Купить курс “Ключи полиритмии”'
            />
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
        title={formatMessage({
          id: 'landing_modal_form_polyrhythmic_keys.polyrhythmic_keys',
          defaultMessage: '“Ключи полиритмии”',
        })}
        description={formatMessage({
          id: 'landing_modal_form_polyrhythmic_keys.course_for_experienced_musician',
          defaultMessage:
            'Курс для опытных музыкантов, которые хотят сделать свою музыку более интересной',
        })}
      />
      <Layout flexBasis={24} flexShrink={0} />
      <Row justifyContent='end'>
        <Text
          fontWeight='medium'
          fontSize={['semiMedium', 'semiRegular', 'regular']}
          lineHeight='medium'
          color='text.smokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.amount' defaultMessage='Сумма:' />
          <Space />
          <FormattedMessage
            id='landing_modal_form_polyrhythmic_keys.eight_thousand_seven_hundred'
            defaultMessage='8 700 ₽'
          />
        </Text>
      </Row>
      <Layout flexBasis={50} flexShrink={0} flexGrow={2} />
      <Form form='payment' />
    </>
  )
}

export { ContentDesktop }
