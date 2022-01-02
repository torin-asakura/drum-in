import React        from 'react'
import { FC }       from 'react'
import styled       from '@emotion/styled'

import { useHover } from '@ui/utils'
import { Box }      from '@ui/layout'

const ArrowRight: FC = () => {
  const [hover, hoverProps] = useHover()

  const StyledArrow = styled(Box)<{ hover: boolean }>(({ theme, hover }) => ({
    width: 0,
    height: 0,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    borderLeft: `20px solid ${hover ? theme.colors.button.primary.hover : theme.colors.dullRed}`,
  }))

  return <StyledArrow hover={hover as boolean} {...hoverProps} />
}

export { ArrowRight }
