import React         from 'react'
import { FC }        from 'react'
import { useIntl }   from 'react-intl'

import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Button }    from '@ui/button'
import { Text }      from '@ui/text'

import { Container } from './container'
import messages      from './messages'

const IndividualLessons: FC = () => {
  const intl = useIntl()
  return (
    <Layout width='100%'>
      <Column width='100%' alignItems='center'>
        <Container>
          <Layout width='1440px' display={['none', 'none', 'flex']}>
            <Row justifyContent='center'>
              <Layout flexBasis={138} flexShrink={0} />
              <Column width='100%'>
                <Layout flexBasis={60} />
                <Layout width='500px'>
                  <Text
                    color='white'
                    fontSize='large'
                    fontWeight='bold'
                    lineHeight='large'
                    letterSpacing='0.15em'
                  >
                    {intl.formatMessage(messages.individualLessonsHeader)}
                  </Text>
                </Layout>
                <Layout flexBasis={20} />
                <Layout>
                  <Text
                    color='white'
                    fontWeight='semiBold'
                    fontSize='normal'
                    lineHeight='huge'
                    textAlign='justify'
                  >
                    {intl.formatMessage(messages.individualLessonsContent)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Button size='big' width='426px'>
                    <Text fontWeight='bold' fontSize='huge' lineHeight='big' letterSpacing='0.15em'>
                      {intl.formatMessage(messages.signUp)}
                    </Text>
                  </Button>
                </Layout>
                <Layout flexBasis={60} />
              </Column>
              <Layout flexBasis={120} flexShrink={0} />
              <Column>
                <Layout flexBasis={60} />
                <Layout width='538px' height='500px' style={{ border: '1px solid white' }}>
                  video
                </Layout>
                <Layout flexBasis={20} />
              </Column>
              <Layout flexBasis={118} flexShrink={0} />
            </Row>
          </Layout>
          <Column alignItems='center' display={['flex', 'flex', 'none']}>
            <Box width='320px' height='290px' justifyContent='center'>
              <Layout flexBasis={20} flexShrink={0} />
              <Column>
                <Layout flexBasis={25} flexShrink={0} />
                <Layout width='270px'>
                  <Text
                    color='white'
                    fontWeight='bold'
                    fontSize='small'
                    lineHeight='semiRegular'
                    textAlign='center'
                    letterSpacing='0.15em'
                  >
                    {intl.formatMessage(messages.individualLessonsHeader)}
                  </Text>
                </Layout>
                <Layout flexBasis={10} flexShrink={0} />
                <Layout>
                  <Text
                    color='white'
                    fontSize='mini'
                    lineHeight='semiRegular'
                    fontWeight='semiNormal'
                    letterSpacing='0.15em'
                    textAlign='justify'
                  >
                    {intl.formatMessage(messages.individualLessonsContent)}
                  </Text>
                </Layout>
                <Layout flexBasis={25} flexShrink={0} />
              </Column>
              <Layout flexBasis={20} flexShrink={0} />
            </Box>
            <Layout flexBasis={60} display={['none', 'none', 'flex']} />
          </Column>
        </Container>
        <Layout flexBasis={50} display={['flex', 'flex', 'none']} />
        <Layout display={['flex', 'flex', 'none']}>
          <Button size='normal' width='240px'>
            <Text
              fontWeight='bold'
              fotnSize='normal'
              lineHeight='semiRegular'
              letterSpacing='0.15em'
            >
              {intl.formatMessage(messages.signUp)}
            </Text>
          </Button>
        </Layout>
        <Layout flexBasis={30} display={['flex', 'flex', 'none']} />
      </Column>
    </Layout>
  )
}

export { IndividualLessons }
