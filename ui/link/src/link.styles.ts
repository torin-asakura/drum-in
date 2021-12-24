import { styleFn } from 'styled-system'

export const baseStyles: styleFn = ({ hover }) => ({
  textDecoration: hover ? 'underline' : 'none',
  textDecorationColor: 'black',
  cursor: 'pointer',
})

export const appearanceStyles: styleFn = ({ hover }) => ({
  color: hover ? 'red' : 'black',
})
