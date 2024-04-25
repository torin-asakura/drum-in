import React                      from 'react'
import uniqid                     from 'uniqid'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'

import { Box }                    from '@ui/layout/src'
import { Layout }                 from '@ui/layout/src'
import { Column }                 from '@ui/layout/src'
import { Space }                  from '@ui/text/src'
import { Text }                   from '@ui/text/src'
import { splitAndSliceFirstItem } from '@shared/utils/src'

import { FifthStepProps }         from './fifth-step.interfaces'

export const FifthStep: FC<FifthStepProps> = ({ description }) => (
  <Column>
    <Layout flexBasis={20} flexShrink={0} />
    {splitAndSliceFirstItem(description)?.map((element) => (
      <Box key={uniqid()}>
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
          <FormattedMessage id='landing_program.dot' />
          <Space />
          {element}
        </Text>
      </Box>
    ))}
  </Column>
)
