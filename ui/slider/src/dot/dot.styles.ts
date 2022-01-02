import { styleFn } from 'styled-system'

export const baseDotStyles: styleFn = ({ theme, hover, active }) => ({
  width: 10,
  height: 10,
  borderRadius: theme.radii.circle,
  backgroundColor: theme.colors[active ? 'dullRed' : (hover && 'black') || 'transparentBlack'],
  cursor: 'pointer',
})
