import React                from 'react'
import { FormattedMessage } from 'react-intl'

import { Form }             from '@ui/form'
import { RoundedLineIcon }  from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

const MobileConsultationContent = () => (
  <Row height={472}>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={12} flexShrink={0} />
      <Row justifyContent='center'>
        <RoundedLineIcon width={36} height={3} />
      </Row>
      <Layout flexBasis={32} flexShrink={0} />
      <Box width={300}>
        <Text fontWeight='medium' fontSize='large' lineHeight='default' color='text.smokyWhite'>
          <FormattedMessage id='landing_modal_forms.free_consultation_from_a_teacher' />
        </Text>
      </Box>
      <Layout flexBasis={12} flexShrink={0} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize='micro'
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage id='landing_modal_forms.we_will_contact_you_as_soon_as_possible' />
        </Text>
      </Box>
      <Layout flexBasis={32} flexShrink={0} />
      <Form />
    </Column>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
  </Row>
)

export { MobileConsultationContent }
