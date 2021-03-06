import React          from 'react'

import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'
import { extractUrl } from '@globals/data'

const Item = ({ item, picture }) => (
  <>
    <Row justifyContent='center' alignItems='center' display={['none', 'none', 'flex']}>
      <Layout width='68px' height='58px'>
        <ImageBlock src={extractUrl(picture)} alt={picture?.altText} />
      </Layout>
      <Layout flexBasis={36} />
      <Layout width='365px' height='25px'>
        <Text
          textAlign='center'
          color='dullBlack'
          fontWeight='normal'
          lineHeight='semiRegular'
          fontSize='normal'
          letterSpacing='0.15em'
        >
          {item}
        </Text>
      </Layout>
    </Row>
    <Column justifyContent='center' alignItems='center' display={['flex', 'flex', 'none']}>
      <Layout width='68px' height='58px'>
        <ImageBlock src={extractUrl(picture)} alt={picture?.altText} />
      </Layout>
      <Layout flexBasis={18} />
      <Layout width={['265px', '265px', '320px']} height='25px' justifyContent='center'>
        <Text
          color='dullBlack'
          fontWeight='normal'
          lineHeight='semiSmall'
          fontSize='small'
          letterSpacing='0.15em'
        >
          {item}
        </Text>
      </Layout>
    </Column>
  </>
)

export { Item }
