import React                 from 'react'
import { FC }                from 'react'

import { Box }               from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Column }            from '@ui/layout'
import { Condition }         from '@ui/condition'

import { ContainerRelative } from '../container-relative'

const ImageBlock: FC<boolean> = ({ stripes }) => (
  <>
    <Condition match={stripes}>
      <Column>
        <Layout width='500px' flexBasis={60} justifyContent='center'>
          <ContainerRelative width='375px' height='60px' />
        </Layout>
        <Box
          flexShrink={0}
          width={[320, 320, 490]}
          height={[320, 320, 500]}
          border='1px solid black'
        >
          <Layout>img</Layout>
        </Box>
        <Layout width='500px' flexBasis={60} justifyContent='center'>
          <ContainerRelative width='375px' height='60px' />
        </Layout>
      </Column>
    </Condition>
    <Condition match={!stripes}>
      <Column>
        <Box
          flexShrink={0}
          width={[320, 320, 490]}
          height={[320, 320, 500]}
          border='1px solid black'
        >
          <Layout>img</Layout>
        </Box>
      </Column>
    </Condition>
  </>
)

export { ImageBlock }
