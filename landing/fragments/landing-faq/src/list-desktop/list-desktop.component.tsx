import React        from 'react'
import { useState } from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'

import { Item }     from './item'

const ListDesktop = ({ faq }) => {
  const [active, setActive] = useState<boolean>(false)

  return (
    <Box flexWrap='wrap' display={['none', 'none', 'flex']}>
      {faq?.map(({ question, answer }, index) => (
        <React.Fragment key={answer}>
          <Box flexDirection='column'>
            <Item
              question={question}
              answer={answer}
              positionVertical={question ? 'top-start' : 'bottom-start'}
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
