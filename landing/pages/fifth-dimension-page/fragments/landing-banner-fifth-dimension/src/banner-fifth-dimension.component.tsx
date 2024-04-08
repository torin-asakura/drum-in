import React                         from 'react'
import { FC }                        from 'react'

import { RightDownArrowIcon }        from '@ui/icons'
import { Box }                       from '@ui/layout'
import { Column }                    from '@ui/layout'
import { Layout }                    from '@ui/layout'
import { Row }                       from '@ui/layout'
import { Text }                      from '@ui/text'
import { formatContent }             from '@shared/utils'

import { BannerFifthDimensionProps } from './banner-fifth-dimension.interfaces'
import { Tape }                      from './tape'

const BannerFifthDimensionBlock: FC<BannerFifthDimensionProps> = ({ fifthDimensionData }) => {
  const description = formatContent(fifthDimensionData?.content)
  const runningLine = `#${fifthDimensionData?.individualCourseData?.hero?.runningLine}`

  return (
    <Box flexDirection='column' width='100%'>
      <Row justifyContent='center'>
        <Box width={['100%', '100%', '100%',1920]}>
          <Layout flexBasis={[20, 30, 40]} />
          <Column width='100%'>
            <Layout flexBasis={[124, 142, 160]} />
            <Box position='relative'>
              <Column width='100%' alignItems={['start', 'start', 'end']}>
                <Box width={{ _: '100%', tablet: '100%', laptop: '100%', wide: '100%' }}>
                  <Text
                    textAlign={['left', 'left', 'right']}
                    textTransform='uppercase'
                    fontFamily='secondary'
                    fontWeight='bold'
                    fontSize={{
                      _: 'moderate',
                      tablet: 'semiHuge',
                      laptop: 'gigantic',
                      wide: 'biggest',
                    }}
                    lineHeight={['default', 'default', 'semiSmall']}
                    color='text.smokyWhite'
                  >
                    {fifthDimensionData?.title}
                  </Text>
                </Box>
                <Layout flexBasis={[16, 28, 40]} />
                <Box width={['100%', '100%', 815]}>
                  <Box width={[282, 428, 460]}>
                    <Text
                      fontWeight='medium'
                      fontSize={['semiMedium', 'semiRegular', 'large']}
                      lineHeight='primary'
                      color={[
                        'text.transparentSmokyWhite',
                        'text.transparentSmokyWhite',
                        'text.smokyWhite',
                      ]}
                    >
                      {description}
                    </Text>
                  </Box>
                </Box>
              </Column>
              <Box fill display={['none', 'none', 'none','flex']} position='absolute' >
                <Layout flexBasis={170}/>
                <Column>
                <Layout flexBasis={90}/>
                <RightDownArrowIcon color='rgb(242, 242, 242)' width={300} height={200} />
                </Column>
                <Layout flexBasis={1300} flexShrink={0}/>

              </Box>
              <Box
                display={['flex', 'flex', 'none']}
                position='absolute'
                right={0}
                bottom={-20}
                style={{ transform: 'scale(-1, 1)' }}
              >
                <RightDownArrowIcon color='rgb(242, 242, 242)' width={60} height={60} />
              </Box>
            </Box>
            <Layout flexBasis={[44, 84, 126]} />
          </Column>
          <Layout flexBasis={[20, 30, 40]} />
        </Box>
      </Row>
      <Tape level={runningLine} />
    </Box>
  )
}

export { BannerFifthDimensionBlock }
