import React             from 'react'
import { FC }            from 'react'
import { useIntl }       from 'react-intl'

import { Box }           from '@ui/layout'
import { Row }           from '@ui/layout'
import { Column }        from '@ui/layout'
import { Layout }        from '@ui/layout'
import { Button }        from '@ui/button'
import { Text }          from '@ui/text'
import { ImageBlock }    from '@ui/image'
import { Form }          from '@ui/form'
import { extractUrl }    from '@globals/data'

import messages          from './messages'
import { CourseContent } from './course-description-content'
import { useFragment }   from './data'

const CourseDescription: FC = () => {
  const intl = useIntl()
  const fragment = useFragment()

  return (
    <Layout width={['320px', '320px', '100%']}>
      <Column width='100%'>
        <Box
          width={['320px', '320px', '100%']}
          height='auto'
          backgroundColor='softBlack'
          justifyContent='center'
          zIndex={1}
        >
          <Layout width={['320px', '320px', '1440px']}>
            <Layout flexBasis={[20, 20, 137]} />
            <Row>
              <Column width='100%'>
                <Layout flexBasis={[25, 25, 53]} flexShrink={0} />
                <Layout id='course' display={['none', 'none', 'flex']}>
                  <Text
                    fontSize='big'
                    color='white'
                    fontWeight='normal'
                    lineHeight='regular'
                    letterSpacing='0.15em'
                    textTransform='uppercase'
                  >
                    {fragment?.addons.prefix}
                  </Text>
                </Layout>
                <Layout flexBasis={[0, 0, 20]} flexShrink={0} />
                <Layout>
                  <CourseContent fragment={fragment} />
                </Layout>
                <Layout flexBasis={40} flexShrink={0} display={['none', 'none', 'flex']} />
                <Layout display={['none', 'none', 'flex']}>
                  <Form>
                    {(open) => (
                      <Button size='big' width='426px' onClick={open}>
                        <Layout>
                          <Text lineHeight='big' fontSize='huge' variant='buttonContent'>
                            {intl.formatMessage(messages.signUp)}
                          </Text>
                        </Layout>
                      </Button>
                    )}
                  </Form>
                </Layout>
                <Layout flexBasis={60} flexShrink={0} display={['none', 'none', 'flex']} />
              </Column>
              <Layout flexBasis={150} flexShrink={0} display={['none', 'none', 'flex']} />
              <Column>
                <Layout flexBasis={65} />
                <Layout width='494px' height='596px' display={['none', 'none', 'flex']}>
                  <ImageBlock
                    src={extractUrl(fragment?.addons.picture)}
                    alt={fragment?.addons.picture.altText}
                  />
                </Layout>
              </Column>
            </Row>
            <Layout flexBasis={[20, 20, 118]} flexShrink={0} />
          </Layout>
        </Box>
        <Layout flexBasis={30} display={['flex', 'flex', 'none']} />
        <Layout display={['flex', 'flex', 'none']} justifyContent='center'>
          <Form>
            {(open) => (
              <Button size='normal' width='240px' onClick={open}>
                <Layout>
                  <Text variant='buttonContent' fontSize='normal' lineHeight='semiRegular'>
                    {intl.formatMessage(messages.buyCourse)}
                  </Text>
                </Layout>
              </Button>
            )}
          </Form>
        </Layout>
        <Layout flexBasis={25} display={['flex', 'flex', 'none']} />
      </Column>
    </Layout>
  )
}

export { CourseDescription }
