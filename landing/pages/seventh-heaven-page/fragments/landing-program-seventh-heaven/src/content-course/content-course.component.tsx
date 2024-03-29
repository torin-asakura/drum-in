import React                from 'react'
import uniqid               from 'uniqid'
import { FormattedMessage } from 'react-intl'

import { BullhornIcon }     from '@ui/icons'
import { LightningIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { useProgram }       from '../data'

const ContentCourse = () => {
  const program = useProgram()

  return (
    <Column
      flexShrink={0}
      width={{ _: 0, tablet: 0, laptop: 2190, wide: 2430 }}
      justifyContent='center'
    >
      <Row flexShrink={0} alignItems='end'>
        <Box flexDirection='column' flexShrink={0}>
          <Box>
            <Box width={{ _: 0, tablet: 0, laptop: 73, wide: 83 }}>
              <BullhornIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={{ _: 0, tablet: 0, laptop: 20, wide: 27 }} flexShrink={0} />
            <Column alignItems='end'>
              <Box>
                <Text
                  whiteSpace='nowrap'
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={{
                    _: 'semiModerate',
                    tablet: 'semiModerate',
                    laptop: 'semiModerate',
                    wide: 'moderate',
                  }}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  {program?.numberVideoTutorials}
                </Text>
              </Box>
              <Layout flexBasis={{ _: 0, tablet: 0, laptop: 12, wide: 16 }} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={{
                    _: 'regular',
                    tablet: 'regular',
                    laptop: 'regular',
                    wide: 'large',
                  }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {program?.numberOfMonths}
                </Text>
              </Box>
            </Column>
          </Box>
          <Layout flexBasis={93} flexShrink={0} />
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 335, wide: 442 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 395, wide: 470 }} flexShrink={0}>
          {program?.secondListOfTopics?.split(';')?.map((element) => (
            <Box key={uniqid()}>
              <Text
                fontWeight='medium'
                fontSize={{
                  _: 'regular',
                  tablet: 'regular',
                  laptop: 'regular',
                  wide: 'large',
                }}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program.dot' />
                <Space />
                {element}
              </Text>
            </Box>
          ))}
        </Column>
      </Row>
      <Layout flexBasis={{ _: 0, tablet: 0, laptop: 130, wide: 153 }} flexShrink={0} />
      <Row flexShrink={0}>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 425, wide: 545 }} flexShrink={0} />
        <Box
          width={{ _: 0, tablet: 0, laptop: 440, wide: 504 }}
          flexShrink={0}
          flexDirection='column'
        >
          <Layout flexBasis={83} flexShrink={0} />
          <Column>
            {program?.firstListOfTopics?.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={{
                    _: 'regular',
                    tablet: 'regular',
                    laptop: 'regular',
                    wide: 'large',
                  }}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Column>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 350, wide: 375 }} flexShrink={0} />
        <Box flexShrink={0} flexDirection='column'>
          <Layout flexBasis={73} flexShrink={0} />
          <Box alignItems='center'>
            <Box width={{ _: 0, tablet: 0, laptop: 110, wide: 120 }}>
              <LightningIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={16} flexShrink={0} />
            <Box>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={{
                  _: 'small',
                  tablet: 'small',
                  laptop: 'small',
                  wide: 'moderate',
                }}
                lineHeight='default'
                color='text.smokyWhite'
              >
                {program?.benefit}
              </Text>
            </Box>
          </Box>
        </Box>
        <Layout flexBasis={{ _: 0, tablet: 0, laptop: 255, wide: 420 }} flexShrink={0} />
        <Column width={{ _: 0, tablet: 0, laptop: 280, wide: 340 }} flexShrink={0}>
          {program?.thirdListOfTopics?.split(';').map((element) => (
            <Box key={uniqid()}>
              <Text
                fontWeight='medium'
                fontSize={{
                  _: 'regular',
                  tablet: 'regular',
                  laptop: 'regular',
                  wide: 'large',
                }}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                <FormattedMessage id='landing_program.dot' />
                <Space />
                {element}
              </Text>
            </Box>
          ))}
        </Column>
      </Row>
    </Column>
  )
}

export { ContentCourse }
