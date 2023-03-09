import React                          from 'react'
import { FC }                         from 'react'

import { Box }                        from '@ui/layout'
import { Column }                     from '@ui/layout'
import { Layout }                     from '@ui/layout'

import { ContentWithInstallments }    from './content-with-installments'
import { ContentWithoutInstallments } from './content-without-installments'
import { ContentProps }               from './content.interfaces'

const Content: FC<ContentProps> = ({ type }) => (
  <Box
    backgroundColor='background.smokyWhite'
    borderRadius='bigger'
    width={['100%', 520, '100%']}
    position='relative'
  >
    <Layout flexBasis={24} flexShrink={0} />
    <Column alignItems={['start', 'start', 'center']} width='100%'>
      {type === 'WithInstallments' ? <ContentWithInstallments /> : <ContentWithoutInstallments />}
    </Column>
    <Layout flexBasis={24} flexShrink={0} />
  </Box>
)

export { Content }
