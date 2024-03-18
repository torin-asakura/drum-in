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

const ContentMobileCourse = ({ scrollId = 'scroll-mobile' }) => {
  const mock = ''
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
        <Layout flexBasis={[165, 163, 0]} />
        <Row>
          <Layout flexBasis={[55, 80, 0]} />
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
                {mock}
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
                {mock}
              </Text>
            </Box>
          </Column>
        </Row>
        <Layout flexBasis={[82, 55, 0]} />
        <Row>
          <Layout flexBasis={[90, 140, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {mock.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Box>
        </Row>
        <Layout flexBasis={[98, 80, 0]} />
        <Row>
          <Layout flexBasis={[60, 80, 0]} />
          <Box flexDirection='column' height={[68, 100, 0]}>
            {mock.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' />
                  <Space />
                  {element}
                </Text>
              </Box>
            ))}
          </Box>
        </Row>
        <Layout flexBasis={[130, 100, 0]} />
        <Row>
          <Layout flexBasis={[85, 130, 0]} />
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
                {mock}
              </Text>
            </Box>
          </Box>
        </Row>
        <Layout flexBasis={[115, 100, 0]} />
        <Row>
          <Layout flexBasis={[63, 100, 0]} />
          <Box flexDirection='column' height={[85, 110, 0]}>
            {mock.split(';').map((element) => (
              <Box key={uniqid()}>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'medium', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_program.dot' />
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
