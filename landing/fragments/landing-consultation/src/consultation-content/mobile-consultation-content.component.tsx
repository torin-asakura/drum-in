import React                from 'react'

import { RoundedLineIcon }  from '@ui/icons'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'
import { useConsultation }  from '@globals/data/src'

import { ConsultationForm } from './form'

const MobileConsultationContent = () => {
  const { consultation } = useConsultation()

  return (
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
            {consultation?.modal?.title}
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
            {consultation?.modal?.subtitle}
          </Text>
        </Box>
        <Layout flexBasis={32} flexShrink={0} />
        <ConsultationForm textForCheckbox={consultation?.modal?.textForCheckbox} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { MobileConsultationContent }
