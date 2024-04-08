import React                  from 'react'
import uniqid                 from 'uniqid'
import { FC }                 from 'react'

import { Box }                from '@ui/layout'
import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Text }               from '@ui/text'

import { PrivacyPolicyProps } from './privacy-policy.interfaces'

const PrivacyPolicyBlock: FC<PrivacyPolicyProps> = ({ privacyPolicy }) => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[80, 100, 142]} flexShrink={0} />
        <Box width={['100%', '100%', 1050]}>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['medium','semiRegular', 'mild', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {privacyPolicy?.title}
          </Text>
        </Box>
        <Layout flexBasis={[20, 30, 50]} flexShrink={0} />
        <Column>
          {privacyPolicy?.content?.map((item) => (
            <React.Fragment key={uniqid()}>
              <Row>
                <Text
                  fontWeight='medium'
                  fontSize={['semiMedium', 'regular', 'large']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {item?.title}
                </Text>
              </Row>
              <Layout flexBasis={[4, 6, 8]} flexShrink={0} />
              <Row>
                <Text
                  opacity='50%'
                  fontWeight='medium'
                  fontSize={['micro', 'middling', 'medium']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {item?.description}
                </Text>
                <Layout width={[16, 100, 200]} flexShrink={0} />
              </Row>
              <Layout flexBasis={[16, 24, 40]} />
            </React.Fragment>
          ))}
        </Column>
        <Layout flexBasis={[32, 40, 150]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
)

export { PrivacyPolicyBlock }
