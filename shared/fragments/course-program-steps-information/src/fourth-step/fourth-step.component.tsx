import React               from 'react'
import { FC }              from 'react'

import { LightningIcon }   from '@ui/icons/src'
import { Layout }          from '@ui/layout/src'
import { Box }             from '@ui/layout/src'
import { Text }            from '@ui/text/src'

import { FourthStepProps } from './fourth-step.interfaces'

export const FourthStep: FC<FourthStepProps> = ({ title }) => (
  <>
    <Box width={{ _: 0, tablet: 0, laptop: 110, wide: 120 }}>
      <LightningIcon width='100%' height='auto' />
    </Box>
    <Layout flexBasis={16} />
    <Box>
      <Text
        textTransform='uppercase'
        fontFamily='secondary'
        fontWeight='bold'
        fontSize={{
          _: 'small',
          tablet: 'small',
          laptop: 'small',
          wide: 'moderate',
        }}
        lineHeight='default'
        color='text.smokyWhite'
      >
        {title}
      </Text>
    </Box>
  </>
)
