import React         from 'react'
import { FC }        from 'react'

import { Link }      from '@ui/link'
import { Layout }    from '@ui/layout'
import { Text }      from '@ui/text'

import { ItemProps } from './item.interface'

const Item: FC<ItemProps> = ({ title, anchor }) => {
  return (
    <Link href={`#${anchor}`}>
      <Layout>
        <Text textTransform='uppercase' variant='navigationContent'>
          {title}
        </Text>
      </Layout>
    </Link>
  )
}

export { Item }
