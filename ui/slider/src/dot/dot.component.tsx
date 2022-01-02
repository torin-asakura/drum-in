import React             from 'react'
import styled            from '@emotion/styled'

import { Box }           from '@ui/layout'
import { useHover }      from '@ui/utils'

import { baseDotStyles } from './dot.styles'

const StyledDot = styled(Box)<{ hover: boolean; active: boolean }>(baseDotStyles)

const Dot = (props) => {
  const [hover, hoverProps] = useHover()

  return <StyledDot hover={hover} {...hoverProps} {...props} />
}

export { Dot }
