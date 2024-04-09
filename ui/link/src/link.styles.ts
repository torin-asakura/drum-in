import { styleFn } from 'styled-system'

export const transitionStyles: styleFn = () => ({
  transition: '0.3s',
})

export const appearanceLinkStyles: styleFn = ({ theme, keep }) =>
  !keep && {
    color: theme.colors.text.smokyWhite,
    '&:hover': {
      color: theme.colors.text.smokyWhite,
    },
  }

export const shapeLinkStyles: styleFn = ({ theme }) => ({
  fontSize: theme.fontSizes.medium,
  fontFamily: theme.fonts.primary,
  whiteSpace: 'nowrap',
  textTransform: 'uppercase',
})

export const activeLinkStyles: styleFn = ({ active, theme }) =>
  active && {
    color: theme.colors.text.smokyWhite,
  }
