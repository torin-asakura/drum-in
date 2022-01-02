import React              from 'react'
import { FC }             from 'react'

import { Column }         from '@ui/layout'
import { Layout }         from '@ui/layout'
import { Text }           from '@ui/text'

import { GenreListProps } from './genre-list.inteface'

const GenreList: FC<GenreListProps> = ({ content }) => {
  return (
    <Column>
      {content?.split('\n').map((item) => (
        <>
          <Layout>
            <Text
              color='dullBlack'
              fontWeight='normal'
              fontSize='normal'
              lineHeight='normal'
              textAlign='justify'
            >
              {item}
            </Text>
          </Layout>
          <Layout flexBasis={40} />
        </>
      ))}
    </Column>
  )
}

export { GenreList }
