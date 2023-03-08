import React            from 'react'
import { useState }     from 'react'

import { Accordeon }    from '@ui/accordeon'
import { Column }       from '@ui/layout'
import { Layout }       from '@ui/layout'
import { useFaq } from "../data";

const ListMobile = () => {
  const faq = useFaq()

  return (
    <Column display={['flex', 'flex', 'none']}>
      {faq.map(({ title, faq }) => (
        <>
          <Accordeon title={title} content={faq.answer} />
          <Layout flexBasis={[16, 21, 0]} />
        </>
      ))}
    </Column>
  )
}
export { ListMobile }
