import React           from 'react'
import { FC }          from 'react'

import { Background }  from '@ui/background'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { SquareProps } from './square.interfaces'

const Square: FC<SquareProps> = ({ firstLine, secondLine, rotate }) => (
  <Background
    gradient='grayWhiteGradient'
    borderRadius={['big', 'extra', 'bigger']}
    style={{ transform: `rotate(${rotate}deg)` }}
  >
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width={[102, 139, 180]}
      height={[102, 139, 180]}
    >
      <Box>
        <Text
          textTransform='uppercase'
          fontFamily='DrukWideCy'
          fontWeight='bold'
          fontSize={['semiModerate', 'semiIncreased', 'big']}
          color='text.blackAmber'
        >
          {firstLine}
        </Text>
      </Box>
      <Box>
        <Text
          textTransform='uppercase'
          fontFamily='DrukWideCy'
          fontWeight='bold'
          fontSize={['semiTiny', 'tiny', 'micro']}
          color='text.blackAmber'
        >
          {secondLine}
        </Text>
      </Box>
    </Box>
  </Background>
)

export { Square }
