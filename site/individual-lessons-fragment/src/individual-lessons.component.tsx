import React         from 'react'
import { FC }        from 'react'
import { useIntl }   from 'react-intl'

import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Button }    from '@ui/button'
import { Text }      from '@ui/text'
import { Link }      from '@ui/link'

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
                <Link id='lessons'>
                  <Layout width={['270px', '270px', '500px']}>
                    <Text
                      variant='leadTextHeader'
                      fontSize={['small', 'small', 'large']}
                      lineHeight={['semiregular', 'semiRegular', 'large']}
                      textAlign={['center', 'center', 'start']}
                    >
                      {intl.formatMessage(messages.individualLessonsHeader)}
                    </Text>
                  </Layout>
                </Link>
                <Layout flexBasis={20} />
                <Layout>
                  <Text variant='leadTextContent' fontSize='normal' lineHeight='huge'>
                    {intl.formatMessage(messages.individualLessonsContent)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Button size='big' width='426px'>
                    <Text variant='buttonContent' fontSize='huge' lineHeight='semiRegular'>
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
                <Layout width={['270px', '270px', '500px']}>
                  <Text
                    variant='leadTextHeader'
                    fontSize={['small', 'small', 'large']}
                    lineHeight={['semiregular', 'semiRegular', 'large']}
                    textAlign={['center', 'center', 'start']}
                  >
                    {intl.formatMessage(messages.individualLessonsHeader)}
                  </Text>
                </Layout>
                <Layout flexBasis={10} flexShrink={0} />
                <Layout>
                  <Text
                    variant='leadTextContent'
                    fontSize='mini'
                    lineHeight='semiRegular'
                    fontWeight='semiNormal'
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
            <Text fotnSize='normal' lineHeight='small' variant='buttonContent'>
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
