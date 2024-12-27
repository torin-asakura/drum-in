import styled                       from '@emotion/styled'
import { RawInput }                 from '@atls-ui-parts/input'
import { useChangeValue }           from '@atls-ui-parts/input'

import React                        from 'react'
import { ForwardRefRenderFunction } from 'react'
import { useState }                 from 'react'
import { useRef }                   from 'react'
import { useEffect }                from 'react'
import { forwardRef }               from 'react'
import { layout }                   from 'styled-system'

import { useHover }                 from '@ui/utils'
import { usePopover }               from '@ui/utils'

import { InputProps }               from './input.interfaces'
import { ErrorPopoverPart }         from './popover-part'
import { baseStyles }               from './input.styles'
import { shapeStyles }              from './input.styles'
import { appearanceStyles }         from './input.styles'
import { transitionStyles }         from './input.styles'

export const InputElement = styled.div<any>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  transitionStyles,
  layout
)

const Container = styled.div(({ type }: any) => ({
  display: type === 'hidden' ? 'none' : 'flex',
  width: '100%',
  flexDirection: 'column',
}))

export const InputWithoutRef: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { size, value, type, disabled, errorText = '', onChange, onChangeNative, placeholder, ...props },
  ref
) => {
  const changeValue = useChangeValue(disabled, onChange, onChangeNative)
  const [hover, hoverProps] = useHover()
  const [focus, setFocus] = useState<boolean>(false)

  if (!ref) {
    ref = useRef(null) // eslint-disable-line
  }

  const { triggerProps, layerProps, render, setOpen } = usePopover('bottom-center', 9, 'custom')

  useEffect(() => {
    if (errorText) setOpen(true)
    else setOpen(false)
  }, [value])

  return (
    <Container
      {...triggerProps}
      type={type}
      // @ts-ignore
      onBlur={() => {
        ;(ref as any).current.blur()
        setFocus(false)
      }}
      onFocus={() => {
        ;(ref as any).current.focus()
        setFocus(true)
      }}
      {...hoverProps}
    >
      <ErrorPopoverPart render={render} layerProps={layerProps} text={errorText} />
      <InputElement
        {...props}
        size={size}
        error={errorText !== ''}
        rounding={focus || hover ? 20 : 12}
      >
        <RawInput
          ref={ref}
          type={type}
          disabled={disabled}
          value={value}
          onChange={changeValue}
          placeholder={placeholder}
          {...props}
        />
      </InputElement>
    </Container>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputWithoutRef)
