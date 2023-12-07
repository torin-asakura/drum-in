import React           from 'react'
import { FC }          from 'react'
import { useCallback } from 'react'

import { Button }      from '@ui/button'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'
import { capitalize }  from '@ui/utils'

import { OptionProps } from './option.interface'
import { useActive }   from '../context'

const Option: FC<OptionProps> = ({ onSelect, value, label, mutuallyExclusive }) => {
  const active = useActive()
  const includes = active.includes(value)

  const remove = useCallback(
    () => onSelect(active.filter((option) => option !== value)),
    [active, value, onSelect]
  )
  const push = useCallback(() => {
    if (mutuallyExclusive) onSelect([value])
    else onSelect([...active, value])
  }, [onSelect, mutuallyExclusive, value, active])

  if (!active) {
    throw new Error('Switch: Missing <Switch> component for <Option>')
  }

  return (
    <>
      <Box display={['none', 'flex', 'flex']}>
        <Button
          variant='smokyWhiteBackground'
          size='littlePaddingMicroHeight'
          onClick={() => {
            if (includes) remove()
            else push()
          }}
          active={includes}
        >
          <Text fontWeight='medium' fontSize='medium' lineHeight='medium' whiteSpace='nowrap'>
            {capitalize(label || value)}
          </Text>
        </Button>
      </Box>
      <Box display={['flex', 'none', 'none']}>
        <Button
          variant='smokyWhiteBackground'
          size='semiLittlePaddingMicroHeight'
          onClick={() => {
            if (includes) remove()
            else push()
          }}
          active={includes}
        >
          <Text fontWeight='medium' fontSize='micro' lineHeight='primary' whiteSpace='nowrap'>
            {capitalize(label || value)}
          </Text>
        </Button>
      </Box>
    </>
  )
}
export { Option }
