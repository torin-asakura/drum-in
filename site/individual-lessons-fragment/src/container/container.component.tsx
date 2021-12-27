import React   from 'react'
import FC      from 'react'

import { Box } from '@ui/layout'

const Container: FC = ({ children }) => (
  <Box
    width={['320px', '320px', '100%']}
    height={['290px', '290px', '581px']}
    backgroundColor='dullBlack'
    justifyContent='center'
    zIndex={1}
  >
    {children}
  </Box>
)

export { Container }
