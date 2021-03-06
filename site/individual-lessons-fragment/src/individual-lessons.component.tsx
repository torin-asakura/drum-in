import React           from 'react'
import { FC }          from 'react'
import { useIntl }     from 'react-intl'

import { extractUrl }  from '@globals/data'
import { Box }         from '@ui/layout'
import { Row }         from '@ui/layout'
import { Column }      from '@ui/layout'
import { Layout }      from '@ui/layout'
import { Button }      from '@ui/button'
import { Text }        from '@ui/text'
import { ImageBlock }  from '@ui/image'
import { Form }        from '@ui/form'

import { Container }   from './container'
import messages        from './messages'
import { useFragment } from './data'

const IndividualLessons: FC = () => {
  const intl = useIntl()
  const fragment = useFragment()

  return (
    <Layout width='100%' id='drum-kit'>
      <Column width='100%' alignItems='center'>
        <Container>
          <Layout width='1440px' display={['none', 'none', 'flex']}>
            <Row justifyContent='center'>
              <Layout flexBasis={138} flexShrink={0} />
              <Column width='100%'>
                <Layout flexBasis={60} />
                <Layout id='lessons' width={['270px', '270px', '500px']}>
                  <Text
                    variant='leadTextHeader'
                    fontSize={['small', 'small', 'large']}
                    lineHeight={['semiregular', 'semiRegular', 'large']}
                    textAlign={['center', 'center', 'start']}
                  >
                    {fragment?.title}
                  </Text>
                </Layout>
                <Layout flexBasis={20} />
                <Layout>
                  <Text variant='leadTextContent' fontSize='normal' lineHeight='huge'>
                    {fragment?.content}
                  </Text>
                </Layout>
                <Layout flexBasis={40} />
                <Layout>
                  <Form>
                    {(open) => (
                      <Button size='big' width='426px' onClick={open}>
                        <Text variant='buttonContent' fontSize='huge' lineHeight='semiRegular'>
                          {intl.formatMessage(messages.signUp)}
                        </Text>
                      </Button>
                    )}
                  </Form>
                </Layout>
                <Layout flexBasis={60} />
              </Column>
              <Layout flexBasis={120} flexShrink={0} />
              <Column>
                <Layout flexBasis={60} />
                <Layout width='538px' height='500px'>
                  <ImageBlock
                    src={extractUrl(fragment?.addons.picture)}
                    alt={fragment?.addons.altText}
                  />
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
                    {fragment?.title}
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
                    {fragment?.content}
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
          <Form>
            {(open) => (
              <Button size='normal' width='240px' onClick={open}>
                <Text fontSize='normal' lineHeight='small' variant='buttonContent'>
                  {intl.formatMessage(messages.signUp)}
                </Text>
              </Button>
            )}
          </Form>
        </Layout>
        <Layout flexBasis={30} display={['flex', 'flex', 'none']} />
      </Column>
    </Layout>
  )
}

export { IndividualLessons }
