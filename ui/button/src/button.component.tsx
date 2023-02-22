import styled               from '@emotion/styled'
import { Content }          from '@atls-ui-parts/button'

import React                from 'react'
import { FC }               from 'react'
import { forwardRef }       from 'react'
import { useState }         from 'react'

import { useHover }         from '@ui/utils'

import { ButtonProps }      from './button.interfaces'
import { IconAttachment }   from './icon-attachment'
import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { contentStyles }    from './button.styles'
import { fillStyles }       from './button.styles'
import { appearanceStyles } from './styles'

export const ButtonElement = styled('button')(
  baseStyles,
  contentStyles,
  shapeStyles,
  appearanceStyles,
  fillStyles
)

export const Button: FC<ButtonProps> = forwardRef(({ children, active, ...props }, ref) => {
  const [hover, hoverProps] = useHover()
  const [pressed, setPressed] = useState<boolean>(false)

  if (props.horizontalLocation === 'right') {
    return (
      <ButtonElement
        hover={hover}
        pressed={pressed || active}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        {...hoverProps}
        {...props}
        ref={ref}
      >
        <Content divider={8}>{children}</Content>
        <IconAttachment
          iconSvg={props.iconSvg}
          valueRadius={props.valueRadius}
          valueWidth={props.valueWidth}
          valueHeight={props.valueHeight}
          valueBackground={props.valueBackground}
        />
      </ButtonElement>
    )
  }
  if (props.horizontalLocation === 'left') {
    return (
      <ButtonElement
        hover={hover}
        pressed={pressed || active}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        {...hoverProps}
        {...props}
        ref={ref}
      >
        <IconAttachment
          iconSvg={props.iconSvg}
          valueRadius={props.valueRadius}
          valueWidth={props.valueWidth}
          valueHeight={props.valueHeight}
          valueBackground={props.valueBackground}
        />
        <Content divider={8}>{children}</Content>
      </ButtonElement>
    )
  }
  return (
    <ButtonElement
      hover={hover}
      pressed={pressed || active}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      {...hoverProps}
      {...props}
      ref={ref}
    >
      <Content divider={8}>{children}</Content>
    </ButtonElement>
  )
})
