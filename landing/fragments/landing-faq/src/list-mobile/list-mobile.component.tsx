import React         from 'react'

import { Accordion } from '@ui/accordion'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

import { useFaq }    from '../data'

const ListMobile = () => {
  const faqArray = useFaq()

  return (
    <Column display={['flex', 'flex', 'none']}>
      {faqArray.map(({ title, faq }, index) => (
        <React.Fragment key={`1${index}`}>
          <Accordion title={title} content={faq.answerForFaq} />
          <Layout flexBasis={[16, 21, 0]} />
        </React.Fragment>
      ))}
    </Column>
  )
}
export { ListMobile }
