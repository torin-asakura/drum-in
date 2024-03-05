import React                      from 'react'

import { TwistedArrowBottomIcon } from '@ui/icons'
import { Box }                    from '@ui/layout'
import { Column }                 from '@ui/layout'
import { Layout }                 from '@ui/layout'
import { Row }                    from '@ui/layout'
import { Text }                   from '@ui/text'

import { Tape }                   from './tape'
import { useAfterTheCourse }      from './data'

const AfterTheCourseBlock = () => {
  const afterTheCourse = useAfterTheCourse()

  return (
    <Box width='100%' justifyContent='center' position='relative'>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} />
        <Column width='100%'>
          <Layout flexBasis={[40, 65, 91]} />
          <Row>
            <Box width={['100%', 440, 520]}>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['regular', 'moderate', 'big']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                {afterTheCourse?.title}
              </Text>
            </Box>
            <Layout display={['none', 'none', 'flex']} flexBasis={36} flexShrink={0} />
            <Box
              display={{ _: 'none', tablet: 'none', laptop: 'none', wide: 'flex' }}
              style={{ transform: 'rotate(195deg) scale(1, -1)' }}
              alignItems='end'
            >
              <TwistedArrowBottomIcon width={252} height={55} />
            </Box>
            <Box width={{ _: 0, tablet: 0, laptop: 740, wide: 940 }}>
              <Tape
                firstLine={afterTheCourse?.afterTheCourse.fitstLineTape}
                secondLine={afterTheCourse?.afterTheCourse.secondLineTape}
                thirdLine={afterTheCourse?.afterTheCourse.thirdLineTape}
              />
            </Box>
          </Row>
          <Layout flexBasis={[185, 315, 445]} />
        </Column>
      </Box>
    </Box>
  )
}

export { AfterTheCourseBlock }
