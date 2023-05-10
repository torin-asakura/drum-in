import React             from 'react'
import uniqid            from 'uniqid'
import { FC }            from 'react'

import { Condition }     from '@ui/condition'

import { RepeaterProps } from './repeater.interfaces'

const Repeater: FC<RepeaterProps> = ({ quantity, items, children }) => {
  if (typeof children !== 'function') throw new Error('Repeater: children must be a function')

  return (
    <>
      <Condition match={quantity === undefined}>
        {items?.map(() => (
          <React.Fragment key={uniqid()}>{children()}</React.Fragment>
        ))}
      </Condition>
      <Condition match={quantity !== undefined}>
        {[...new Array(quantity)]?.map(() => (
          <React.Fragment key={uniqid()}>{children()}</React.Fragment>
        ))}
      </Condition>
    </>
  )
}

export { Repeater }
