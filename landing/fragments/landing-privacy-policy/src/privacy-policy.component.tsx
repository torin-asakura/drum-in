import React                from 'react'
import uniqid               from 'uniqid'

import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { usePrivacyPolicy } from './data'

const PrivacyPolicyBlock = () => {
  const privacyPolicy = usePrivacyPolicy()

  return (
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
              fontSize={['regular', 'mild', 'big']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {privacyPolicy?.title}
            </Text>
          </Box>
          <Layout flexBasis={[20, 30, 50]} flexShrink={0} />
          <Column>
            {privacyPolicy?.privacyPolicy?.text?.split('<br />\r').map((item) => (
              <React.Fragment key={uniqid()}>
                <Row>
                  <Text
                    fontWeight='medium'
                    fontSize={['semiMedium', 'regular', 'large']}
                    lineHeight='primary'
                    color='text.smokyWhite'
                  >
                    {item}
                  </Text>
                </Row>
                <Layout flexBasis={[7, 10, 15]} flexShrink={0} />
              </React.Fragment>
            ))}
          </Column>
          <Layout flexBasis={[32, 40, 150]} flexShrink={0} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
    </Row>
  )
}

export { PrivacyPolicyBlock }
