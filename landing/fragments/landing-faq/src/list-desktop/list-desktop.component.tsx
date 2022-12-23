import React            from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'

import { Faq as FFaq }  from '@shared/data'
import { Box }          from '@ui/layout'
import { Layout }       from '@ui/layout'
import { useMockedFaq } from '@shared/data'

import { Item }         from './item'

const ListDesktop = () => {
  const [active, setActive] = useState<boolean>(false)

  const { faq: faqData } = useMockedFaq()
  const [faq, setFaq] = useState<FFaq[]>([])

  useEffect(() => {
    setFaq(faqData)
    // eslint-disable-next-line
  }, [])

  return (
    <Box flexWrap='wrap' display={['none', 'none', 'flex']}>
      {faq.map(({ question, answer, positionVertical }, index) => (
        <>
          <Box flexDirection='column'>
            <Item
              question={question}
              answer={answer}
              positionVertical={positionVertical}
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
