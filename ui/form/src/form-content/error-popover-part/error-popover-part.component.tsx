import styled                from '@emotion/styled'

import React                 from 'react'

import { popoverPartStyles } from './error-popover-part.styles'

const Container = styled.div(() => popoverPartStyles)

export const ErrorPopoverPart = ({ render, layerProps, text }) =>
  render(<Container {...layerProps}>{text}</Container>)
