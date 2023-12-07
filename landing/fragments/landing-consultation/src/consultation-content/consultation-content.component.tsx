import React                        from 'react'
import { FC }                       from 'react'
import { FormattedMessage }         from 'react-intl'

import { Button }                   from '@ui/button'
import { Form }                     from '@ui/form'
import { CrossMenuIcon }            from '@ui/icons'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Text }                     from '@ui/text'

import { ConsultationContentProps } from './consultation-content.interfaces'

const ConsultationContent: FC<ConsultationContentProps> = ({ onClose }) => (
  <>
    <Box
      width='100%'
      flexDirection={['column', 'row', 'row']}
      justifyContent={['start', 'space-between', 'space-between']}
      alignItems='start'
    >
      <Column width={['100%', 450, 450]}>
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['large', 'moderate', 'semiIncreased']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            <FormattedMessage id='landing_modal_forms.free_consultation_from_a_teacher' />
          </Text>
        </Box>
        <Layout flexBasis={[6, 9, 12]} flexShrink={0} />
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'semiMedium', 'medium']}
            lineHeight='medium'
            color='text.transparentSmokyWhite'
          >
            <FormattedMessage id='landing_modal_forms.fill_out_the_form_and_we_will_contact_you' />
          </Text>
        </Box>
      </Column>
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
    <Layout flexBasis={52} flexShrink={0} />
    <Form arrow />
  </>
)

export { ConsultationContent }
