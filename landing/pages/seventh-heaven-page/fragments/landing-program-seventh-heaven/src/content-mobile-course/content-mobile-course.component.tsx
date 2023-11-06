import React                from 'react'
import uniqid               from 'uniqid'
import { FormattedMessage } from 'react-intl'

import { LightningIcon }    from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { ProgressBar }      from '@ui/progress-bar'
import { Space }            from '@ui/text'
import { Text }             from '@ui/text'

import { useProgram }       from '../data'

const ContentMobileCourse = ({ scrollId = 'scroll-mobile' }) => {
  const program = useProgram()

  return (
    <Box
      display='block'
      position='relative'
      id={scrollId}
      data-scroll-position='bottom'
      width={[335, 446, 0]}
      height={[1005, 1005, 0]}
    >
      <Box position='relative' flexDirection='column' zIndex={4}>
        <Layout flexBasis={[163, 162, 0]} />
        <Row>
          <Layout flexBasis={[60, 80, 0]} />
          <Column alignItems='end'>
            <Box>
              <Text
                whiteSpace='nowrap'
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['micro', 'medium', 'medium']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                {program?.numberVideoTutorials}
              </Text>
            </Box>
            <Layout flexBasis={[8, 12, 12]} flexShrink={0} />
            <Box>
              <Text
                fontWeight='medium'
                fontSize={['micro', 'medium', 'medium']}
                lineHeight='primary'
                color='text.smokyWhite'
              >
                {program?.numberOfMonths}
              </Text>
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[92, 70, 0]} />
        <Row>
          <Layout flexBasis={[90, 125, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {program?.secondListOfTopics?.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Box>
        </Row>
        <Layout flexBasis={[90, 65, 0]} />
        <Row>
          <Layout flexBasis={[60, 73, 0]} />
          <Box flexDirection='column' height={[68, 100, 0]}>
            {program?.firstListOfTopics?.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Box>
        </Row>
        <Layout flexBasis={[125, 100, 0]} />
        <Row>
          <Layout flexBasis={[80, 130, 0]} />
          <Box alignItems='center'>
            <Box width={[70, 85, 0]}>
              <LightningIcon width='100%' height='auto' />
            </Box>
            <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
            <Box>
              <Text
                textTransform='uppercase'
                fontFamily='secondary'
                fontWeight='bold'
                fontSize={['medium', 'regular', 'regular']}
                lineHeight='default'
                color='text.smokyWhite'
              >
                {program?.benefit}
              </Text>
            </Box>
          </Box>
        </Row>
        <Layout flexBasis={[128, 115, 0]} />
        <Row>
          <Layout flexBasis={[60, 100, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {program?.thirdListOfTopics?.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' defaultMessage='•' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Box>
        </Row>
        <Layout flexBasis={[77, 107, 0]} />
      </Box>
      <Box position='absolute' top={0}>
        <ProgressBar scrollId={scrollId} />
      </Box>
    </Box>
  )
}

export { ContentMobileCourse }
