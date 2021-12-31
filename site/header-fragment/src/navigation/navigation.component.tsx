import React           from 'react'

import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Layout }      from '@ui/layout'

import { useNavlinks } from '../data'
import { Item }        from './item'

const Navigation = () => {
  const navlinks = useNavlinks()

  return (
    <Box
      width='995px'
      height='44px'
      flexShrink={0}
      alignItems='center'
      zIndex={2}
      display={['none', 'none', 'flex']}
      backgroundColor='semiTransparent'
    >
      <Layout flexBasis={11} flexShrink={0} />
      <Row justifyContent='center' alignItems='center'>
        {navlinks.map(({ title, content }) => (
          <>
            <Item title={title} anchor={content} />
            <Layout flexBasis={45} />
          </>
        ))}
        <Layout flexBasis={11} />
      </Row>
    </Box>
  )
}

export { Navigation }
