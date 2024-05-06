import { useConsultation } from '@globals/data/src'
import React               from 'react'
import { FC }              from 'react'

import { RoundedLineIcon }          from '@ui/icons'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Row }                      from '@ui/layout'
import { Text }                     from '@ui/text'

import { ConsultationContentProps } from './consultation-content.interfaces'
import { ConsultationForm }         from './form'

const MobileConsultationContent: FC<ConsultationContentProps> = ({
  setVisibleModal,
}) => {

  const {consultationData} = useConsultation()


  return(
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
            {consultationData?.modal?.title}
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
            {consultationData?.modal?.subtitle}
          </Text>
        </Box>
        <Layout flexBasis={32} flexShrink={0} />
        <ConsultationForm
          setVisibleModal={setVisibleModal}
          textForCheckbox={consultationData?.modal?.textForCheckbox}
        />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  )
}

export { MobileConsultationContent }
