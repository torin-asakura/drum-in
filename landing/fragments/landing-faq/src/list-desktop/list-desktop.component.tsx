import { FC }           from 'react'
import React            from 'react'
import { useState }     from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'

import { Item }             from './item'
import { ListDesktopProps } from './list-desktop.interfaces'


const ListDesktop:FC<ListDesktopProps> = ({ faq }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Box flexWrap='wrap' display={['none', 'none', 'flex']}>
      {faq?.map((item, index) => (
        <React.Fragment key={item?.answer}>
          <Box flexDirection='column'>
            <Item
              question={item?.question || ''}
              answer={item?.answer || ''}
              positionVertical={item?.question ? 'top-start' : 'bottom-start'}
              active={active}
              setActive={setActive}
            />
            <Layout flexBasis={20} />
          </Box>
          <Layout flexBasis={28} flexShrink={0} />
          {index % 2 !== 0 ? <Layout flexBasis='100%' /> : null}
        </React.Fragment>
      ))}
    </Box>
  )
}
export { ListDesktop }
