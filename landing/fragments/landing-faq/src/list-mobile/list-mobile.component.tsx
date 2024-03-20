import React         from 'react'

import { Accordion } from '@ui/accordion'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

const ListMobile = ({ faq }) => (
    <Column display={['flex', 'flex', 'none']}>
      {faq.map(({ question, answer }) => (
        <React.Fragment key={question}>
          <Accordion title={question} content={answer} />
          <Layout flexBasis={[16, 21, 0]} />
        </React.Fragment>
      ))}
    </Column>
  )

export { ListMobile }
