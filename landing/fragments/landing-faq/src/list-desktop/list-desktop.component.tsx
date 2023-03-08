import React            from 'react'
import { useState }     from 'react'

import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'

import { Item }         from './item'
import { useFaq } from "../data";

const ListDesktop = () => {
  const [active, setActive] = useState<boolean>(false)
  const faq = useFaq()

  return (
    <Box flexWrap='wrap' display={['none', 'none', 'flex']}>
      {faq.map(({ title, faq }, index) => (
        <>
          <Box flexDirection='column'>
            <Item
              question={title}
              answer={faq.answerForFaq}
              positionVertical={faq.positionForFaq === 'Выше вопроса' ? 'top-start' : 'bottom-start'}
              active={active}
              setActive={setActive}
            />
            <Layout flexBasis={20} />
          </Box>
          <Layout flexBasis={28} flexShrink={0} />
          {index % 2 !== 0 ? <Layout flexBasis='100%' /> : null}
        </>
      ))}
    </Box>
  )
}
export { ListDesktop }
