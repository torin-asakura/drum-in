import React                        from 'react'
import { FC }                       from 'react'

import { Button }                   from '@ui/button'
import { CrossMenuIcon }            from '@ui/icons'
import { Column }                   from '@ui/layout'
import { Layout }                   from '@ui/layout'
import { Box }                      from '@ui/layout'
import { Text }                     from '@ui/text'
import { useConsultation }          from '@globals/data'

import { ConsultationContentProps } from './consultation-content.interfaces'
import { ConsultationForm }         from './form'

const ConsultationContent: FC<ConsultationContentProps> = ({ setVisibleModal }) => {
  const { consultation } = useConsultation()

  return (
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
              {consultation?.modal?.title}
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
              {consultation?.modal?.subtitle}
            </Text>
          </Box>
        </Column>
        <Box width={['100%', 'auto', 'auto']} justifyContent='end'>
          <Button
            size='littlePaddingMediumHeight'
            variant='transparentWhiteToGrayBackground'
            onClick={() => setVisibleModal(false)}
          >
            <CrossMenuIcon width={24} height={24} />
          </Button>
        </Box>
      </Box>
      <Layout flexBasis={52} flexShrink={0} />
      <ConsultationForm
        setVisibleModal={setVisibleModal}
        textForCheckbox={consultation?.modal?.textForCheckbox}
      />
    </>
  )
}

export { ConsultationContent }
