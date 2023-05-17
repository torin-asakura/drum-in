import React        from 'react'
import { useState } from 'react'

import { Box }      from '@ui/layout'
import { Layout }   from '@ui/layout'

import { Item }     from './item'
import { useFaq }   from '../data'

const ListDesktop = () => {
  const [active, setActive] = useState<boolean>(false)
  const faqArray = useFaq()

  return (
    <Box flexWrap='wrap' display={['none', 'none', 'flex']}>
      {faqArray.map(({ title, faq }, index) => (
        <React.Fragment key={title.replace(' ', '')}>
          <Box flexDirection='column'>
            <Item
              question={title}
              answer={faq.answerForFaq}
              positionVertical={faq.positionForFaq ? 'top-start' : 'bottom-start'}
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
