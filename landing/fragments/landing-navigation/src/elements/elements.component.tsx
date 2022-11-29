import React             from 'react'

import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Row }           from '@ui/layout'

import { FifthElement }  from './fifth-element'
import { FirstElement }  from './first-element'
import { FourthElement } from './fourth-element'
import { SecondElement } from './second-element'
import { SixthElement }  from './sixth-element'
import { ThirdElement }  from './third-element'

const Elements = () => {
  return (
    <Row>
      <Column width='100%'>
        <FirstElement />
        <Layout flexBasis={16} />
        <SecondElement />
        <Layout flexBasis={16} />
        <ThirdElement />
        <Layout flexBasis={16} />
        <FourthElement />
        <Layout flexBasis={16} />
        <FifthElement />
        <Layout flexBasis={16} />
        <SixthElement />
      </Column>
    </Row>
  )
}

export { Elements }
