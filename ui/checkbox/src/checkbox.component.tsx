import styled                        from '@emotion/styled'
import { ConditionalRender }         from '@atls-ui-parts/conditional-render'
import { HiddenInput }               from '@atls-ui-parts/hidden-input'

import React                         from 'react'
import { FC }                        from 'react'

import { CheckIcon }                 from '@ui/icons'
import { doNothing }                 from '@shared/utils'
import { useHover }                  from '@ui/utils'

import { CheckboxProps }             from './checkbox.interfaces'
import { containerBaseStyles }       from './checkbox.styles'
import { containerPositionStyles }   from './checkbox.styles'
import { containerFillStyles }       from './checkbox.styles'
import { boxBaseStyles }             from './checkbox.styles'
import { boxAppearanceStyles }       from './checkbox.styles'
import { boxShapeStyles }            from './checkbox.styles'
import { labelShapeStyles }          from './checkbox.styles'
import { labelAppearanceStyles }     from './checkbox.styles'
import { labelPositionStyles }       from './checkbox.styles'
import { checkmarkBaseStyles }       from './checkbox.styles'
import { checkmarkAppearanceStyles } from './checkbox.styles'
import { checkmarkCheckStyles }      from './checkbox.styles'
import { checkmarkShapeStyles }      from './checkbox.styles'

const Container = styled.div<{ labelPosition?: string; fill?: boolean }>(
  containerBaseStyles,
  containerPositionStyles,
  containerFillStyles
)
const Box = styled.div(boxBaseStyles, boxAppearanceStyles, boxShapeStyles)
const Label = styled(ConditionalRender())(
  labelShapeStyles,
  labelAppearanceStyles,
  labelPositionStyles
)
const Checkmark = styled.div<{ checked: boolean }>(
  checkmarkBaseStyles,
  checkmarkAppearanceStyles,
  checkmarkShapeStyles,
  checkmarkCheckStyles
)

export const Checkbox: FC<CheckboxProps> = ({
  children,
  checked,
  onCheck = (newState) => doNothing(),
  ...props
}) => {
  const [hover, hoverProps] = useHover()

  return (
    <Container labelPosition='end' onClick={() => onCheck(!checked)} {...hoverProps} {...props}>
      <HiddenInput
        type='checkbox'
        checked={checked}
        onChange={(event) => onCheck(event.currentTarget.checked)}
      />
      <Box checked={checked} hover={hover}>
        <Checkmark checked={checked}>
          <CheckIcon width={14} height={14} />
        </Checkmark>
      </Box>
      <Label position='end'>{children}</Label>
    </Container>
  )
}
