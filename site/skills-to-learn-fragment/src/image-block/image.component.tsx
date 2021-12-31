import React                   from 'react'
import { FC }                  from 'react'

import { Box }                 from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Column }              from '@ui/layout'
import { Condition }           from '@ui/condition'
import { ImageBlock as Image } from '@ui/image'

import { ContainerRelative }   from '../container-relative'
import { ImageBlockProps }     from './image-block.interface'

const ImageBlock: FC<ImageBlockProps> = ({ stripes, src, alt }) => (
  <>
    <Condition match={stripes}>
      <Column>
        <Layout width='500px' flexBasis={60} justifyContent='center'>
          <ContainerRelative width='375px' height='60px' />
        </Layout>
        <Box flexShrink={0} width={[320, 320, 490]} height={[320, 320, 500]}>
          <Image src={src} alt={alt} />
        </Box>
        <Layout width='500px' flexBasis={60} justifyContent='center'>
          <ContainerRelative width='375px' height='60px' />
        </Layout>
      </Column>
    </Condition>
    <Condition match={!stripes}>
      <Column>
        <Box flexShrink={0} width={[320, 320, 490]} height={[320, 320, 500]}>
          <Image src={src} alt={alt} />
        </Box>
      </Column>
    </Condition>
  </>
)

export { ImageBlock }
