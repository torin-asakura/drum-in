import { FaqDataProps } from '@globals/data/src'
import { FC }           from 'react'
import React            from 'react'

import { Accordion } from '@ui/accordion'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'

export interface ListMobileProps {

  faq?:FaqDataProps |null
}

const ListMobile:FC<ListMobileProps> = ({ faq }) => (
  <Column display={['flex', 'flex', 'none']}>
    {faq?.map((item) => (
      <React.Fragment key={item?.question}>
        <Accordion title={item?.question} content={item?.answer} />
        <Layout flexBasis={[16, 21, 0]} />
      </React.Fragment>
    ))}
  </Column>
)

export { ListMobile }
