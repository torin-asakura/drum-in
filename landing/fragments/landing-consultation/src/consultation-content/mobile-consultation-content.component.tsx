import React                        from 'react'
import { FC }                       from 'react'

import { RoundedLineIcon }          from '@ui/icons'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'

import { ConsultationContentProps } from './consultation-content.interfaces'
import { ConsultationForm }         from './form'

const MobileConsultationContent: FC<ConsultationContentProps> = ({
  consultationFormData,
  consultationData,
  setVisibleModal,
}) => (
  <Row height={472}>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    <Column width='100%'>
      <Layout flexBasis={12} flexShrink={0} />
      <Row justifyContent='center'>
        <Box
          onClick={() => setVisibleModal(false)}
          height={6}
          width={50}
          justifyContent='center'
          alignItems='center'
        >
          <RoundedLineIcon width={36} height={3} />
        </Box>
      </Row>
      <Layout flexBasis={32} flexShrink={0} />
      <Box width={300}>
        <Text fontWeight='medium' fontSize='large' lineHeight='default' color='text.smokyWhite'>
          {consultationData?.title}
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
          {consultationData?.subtitle}
        </Text>
      </Box>
      <Layout flexBasis={32} flexShrink={0} />
      <ConsultationForm
        consultationFormData={consultationFormData}
        setVisibleModal={setVisibleModal}
        textForCheckbox={consultationData?.textForCheckbox}
      />
    </Column>
    <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
  </Row>
)

export { MobileConsultationContent }
