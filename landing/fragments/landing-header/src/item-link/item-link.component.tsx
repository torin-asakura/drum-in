import React        from 'react'
import { FC }       from 'react'
import { memo }     from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'
import { NextLink } from '@ui/link'
import { Text }     from '@ui/text'
import { useHover } from '@ui/utils'

export const ItemLink: FC<{ item: { title?: string | null; path?: string | null } | null }> = memo(
  ({ item }) => {
    const [hover, hoverProps] = useHover()

    return (
      <Box display={['none', 'none', 'flex']} {...hoverProps}>
        <NextLink path={item?.path}>
          <Text color={hover ? 'text.purple' : 'text.smokyWhite'} style={{ transition: '0.3s' }}>
            {item?.title}
          </Text>
        </NextLink>
        <Layout width={12} />
      </Box>
    )
  }
)
