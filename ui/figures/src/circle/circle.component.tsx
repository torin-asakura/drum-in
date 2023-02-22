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
      width={[102, 139, 180]}
      height={[102, 139, 180]}
    >
      {firstLine ? (
        <Box>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['semiModerate', 'semiIncreased', 'big']}
            color='text.blackAmber'
          >
            {firstLine}
          </Text>
        </Box>
      ) : null}
      <Box width={[90, 120, 140]} justifyContent='center'>
        <Text
          textAlign='center'
          textTransform='uppercase'
          fontFamily='secondary'
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

export { Circle }
