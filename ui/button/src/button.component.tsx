import React                from 'react'
import styled               from '@emotion/styled'
import { FC }               from 'react'
import { layout }           from 'styled-system'
import { space }            from 'styled-system'

import { baseStyles }       from './button.styles'
import { shapeStyles }      from './button.styles'
import { appearanceStyles } from './button.styles'
import { ButtonProps }      from './button.interface'

export const Button = styled.button<ButtonProps>(
  baseStyles,
  shapeStyles,
  appearanceStyles,
  layout,
  space
)
