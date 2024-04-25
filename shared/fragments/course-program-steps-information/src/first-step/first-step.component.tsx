import React              from 'react'
import { FC }             from 'react'

import { BullhornIcon }   from '@ui/icons/src'
import { Column }         from '@ui/layout/src'
import { Layout }         from '@ui/layout/src'
import { Box }            from '@ui/layout/src'
import { Text }           from '@ui/text/src'

import { FirstStepProps } from './first-step.interfaces'

export const FirstStep: FC<FirstStepProps> = ({ description, title }) => (
  <>
    <Box width={{ _: 0, tablet: 0, laptop: 73, wide: 80 }}>
      <BullhornIcon width='100%' height='auto' />
    </Box>
    <Layout flexBasis={20} />
    <Column alignItems='end'>
      <Box>
        <Text
          whiteSpace='nowrap'
          textTransform='uppercase'
          fontFamily='secondary'
          fontWeight='bold'
          fontSize={{
            _: 'semiModerate',
            tablet: 'semiModerate',
            laptop: 'semiModerate',
            wide: 'moderate',
          }}
          lineHeight='default'
          color='text.smokyWhite'
        >
          {title}
        </Text>
      </Box>
      <Box>
        <Text
          fontWeight='medium'
          fontSize={{
            _: 'regular',
            tablet: 'regular',
            laptop: 'regular',
            wide: 'large',
          }}
          lineHeight='primary'
          color='text.smokyWhite'
        >
          {description}
        </Text>
      </Box>
    </Column>
  </>
)
