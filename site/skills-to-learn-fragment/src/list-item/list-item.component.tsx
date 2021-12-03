import React    from 'react'
import { FC }     from 'react'

import { Layout } from '@ui/layout'
import { Box }    from '@ui/layout'

import { Item } from '../text-block'

const ListItem: FC = () => (
  <Layout>
    <Box
      height={['11px', '11px', '18px']}
      width={['11px', '11px', '18px']}
      border='1px solid black'
      borderRadius={50}
    />
  </Layout>
)

export { ListItem }
