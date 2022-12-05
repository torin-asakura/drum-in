import React              from 'react'
import { FC }             from 'react'

import { Background }     from '@ui/background'
import { Box }            from '@ui/layout'
import { Text }           from '@ui/text'

import { RectangleProps } from './rectangle.interfaces'

const Rectangle: FC<RectangleProps> = ({ color, firstLine, secondLine, rotate }) => (
  <Background gradient={color} borderRadius='medium' style={{ transform: `rotate(${rotate}deg)` }}>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width={[203, 275, 357]}
      height={[57, 78, 100]}
    >
      <Box>
        <Text
          textTransform='uppercase'
          fontFamily='DrukWideCy'
          fontWeight='bold'
          fontSize={['semiModerate', 'semiIncreased', 'big']}
          color='text.smokyWhite'
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
          color='text.smokyWhite'
        >
          {secondLine}
        </Text>
      </Box>
    </Box>
  </Background>
)

export { Rectangle }
