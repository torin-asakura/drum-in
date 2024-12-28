import { styleFn } from 'styled-system'

export const popoverPartStyles: styleFn = ({ theme }) => ({
  fontColor: theme.colors.input.font,
  backgroundColor: theme.colors.input.background,
  border: `1px solid ${theme.colors.input.error}`,
  fontSize: 20,
  fontFamily: theme.fonts.primary,
  padding: 20,
  borderRadius: 20,
  whiteSpace: 'pre-wrap',
  zIndex: 10000,
})
