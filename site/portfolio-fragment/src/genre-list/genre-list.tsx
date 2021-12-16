import React      from 'react'
import { FC }       from 'react'

import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Text }   from '@ui/text'
import { genres } from '@site/data'

const GenreList = () => (
  <Column>
    {genres.map((item) => (
      <>
        <Layout>
          <Text color='dullBlack' fontWeight='normal' fontSize='normal' lineHeight='normal'>
            {item}
          </Text>
        </Layout>
        <Layout flexBasis={40} />
      </>
    ))}
  </Column>
)

export { GenreList }
