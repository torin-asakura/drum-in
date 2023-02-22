import React            from 'react'
import { useEffect }    from 'react'
import { useState }     from 'react'

import { Faq as FFaq }  from '@shared/data'
import { Accordeon }    from '@ui/accordeon'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { useMockedFaq } from '@shared/data'

const ListMobile = () => {
  const { faq: faqData } = useMockedFaq()
  const [faq, setFaq] = useState<FFaq[]>([])

  useEffect(() => {
    setFaq(faqData)
    // eslint-disable-next-line
  }, [])

  return (
    <Column display={['flex', 'flex', 'none']}>
      {faq.map(({ question, answer }) => (
        <>
          <Accordeon title={question} content={answer} />
          <Layout flexBasis={[16, 21, 0]} />
        </>
      ))}
    </Column>
  )
}
export { ListMobile }
