import React          from 'react'
import { FC }         from 'react'
import styled         from '@emotion/styled'

import { useHover }   from '@ui/utils'

import { baseStyles } from './link.styles'
import { LinkProps }  from './link.interface'

const StyledLink = styled.a(baseStyles)

const Link: FC<LinkProps> = (props) => {
  const [hover, hoverProps] = useHover()

  return <StyledLink hover={hover} {...props} {...hoverProps} />
}

export { Link }
