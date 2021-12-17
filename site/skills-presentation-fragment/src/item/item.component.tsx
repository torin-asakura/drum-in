import React          from 'react'

import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

const Item = ({ item }) => (
  <>
    <Row justifyContent='center' alignItems='center' display={['none', 'none', 'flex']}>
      <Layout width='68px' height='58px'>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={36} />
      <Layout width='320px' height='25px'>
        <Text
          textAlign='center'
          color='dullBlack'
          fontWeight='normal'
          lineHeight='semiRegular'
          fontSize='normal'
        >
          {item}
        </Text>
      </Layout>
    </Row>
    <Column justifyContent='center' alignItems='center' display={['flex', 'flex', 'none']}>
      <Layout width='68px' height='58px'>
        <ImageBlock />
      </Layout>
      <Layout flexBasis={18} />
      <Layout width={['180px', '180px', '320px']} height='25px' justifyContent='center'>
        <Text color='dullBlack' fontWeight='normal' lineHeight='semiSmall' fontSize='small'>
          {item}
        </Text>
      </Layout>
    </Column>
  </>
)

export { Item }
