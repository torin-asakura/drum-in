import React                      from 'react'
import uniqid                     from 'uniqid'
import { FC }                     from 'react'
import { FormattedMessage }       from 'react-intl'

import { Box }                    from '@ui/layout/src'
import { Column }                 from '@ui/layout/src'
import { Space }                  from '@ui/text/src'
import { Text }                   from '@ui/text/src'
import { splitAndSliceFirstItem } from '@shared/utils/src'

import { ThirdStepProps }         from './third-step.interfaces'

export const ThirdStep: FC<ThirdStepProps> = ({ description }) => (
  <Column>
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
