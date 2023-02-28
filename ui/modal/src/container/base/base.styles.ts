import { styleFn } from 'styled-system'

const createBaseStyles = (): styleFn =>
  ({ scroll }) => ({
    display: 'flex',
    overflowY: scroll ? 'scroll' : 'unset',
  })

export { createBaseStyles }
