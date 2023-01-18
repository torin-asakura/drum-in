import React           from 'react'
import { FC }          from 'react'

import { Button }      from '@ui/button'
import { capitalize }  from '@ui/utils'

import { OptionProps } from './option.interface'
import { useActive }   from '../context'

const Option: FC<OptionProps> = ({ onSelect, value, mutuallyExclusive, onUpdate }) => {
  const active = useActive()
  const includes = active.includes(value)

  const remove = () => onSelect(active.filter((option) => option !== value))
  const push = () => {
    if (mutuallyExclusive) onSelect([value])
    else onSelect([...active, value])
  }

  if (!active) {
    throw new Error('Switch: Missing <Switch> component for <Option>')
  }

  if (mutuallyExclusive && includes && active.length > 1) {
    remove()
  }

  if (onUpdate) onUpdate(active, push, remove)

  return (
    <Button
      variant='darkToPurpleBackground'
      onClick={() => {
        if (includes) remove()
        else push()
      }}
      active={includes}
    >
      {capitalize(value)}
    </Button>
  )
}
export { Option }
