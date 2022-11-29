import React           from 'react'
import { FC }          from 'react'

import { Background }  from '@ui/background'
import { Box }         from '@ui/layout'
import { Text }        from '@ui/text'

import { CircleProps } from './circle.interfaces'

const Circle: FC<CircleProps> = ({ firstLine, secondLine }) => (
  <Background gradient='blueWhiteGradient' borderRadius='max'>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width={180}
      height={180}
    >
      {firstLine ? (
        <Box>
          <Text
            textTransform='uppercase'
            fontFamily='DrukWideCy'
            fontWeight='bold'
            fontSize='big'
            color='text.blackAmber'
          >
            {' '}
            {firstLine}{' '}
          </Text>
        </Box>
      ) : null}
      <Box width={140} justifyContent='center'>
        <Text
          textAlign='center'
          textTransform='uppercase'
          fontFamily='DrukWideCy'
          fontWeight='bold'
          fontSize='micro'
          color='text.blackAmber'
        >
          {' '}
          {secondLine}{' '}
        </Text>
      </Box>
    </Box>
  </Background>
)

export { Circle }
