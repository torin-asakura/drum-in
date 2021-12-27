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
import { Link }          from '@ui/link'

import messages          from './messages'
import { CourseContent } from './course-description-content'

const CourseDescription: FC = () => {
  const intl = useIntl()
  return (
    <Layout width={['320px', '320px', '100%']}>
      <Column width='100%'>
        <Box
          width={['320px', '320px', '100%']}
          height={['290px', '290px', '722px']}
          backgroundColor='softBlack'
          justifyContent='center'
          zIndex={1}
        >
          <Layout width={['320px', '320px', '1440px']}>
            <Layout flexBasis={[20, 20, 137]} />
            <Row>
              <Column width='100%'>
                <Layout flexBasis={[25, 25, 53]} flexShrink={0} />
                <Link id='course'>
                  <Layout display={['none', 'none', 'flex']}>
                    <Text
                      fontSize='big'
                      color='white'
                      fontWeight='normal'
                      lineHeight='regular'
                      letterSpacing='0.15em'
                    >
                      {intl.formatMessage(messages.onlineCourse)}
                    </Text>
                  </Layout>
                  )
                </Link>
                <Layout flexBasis={[0, 0, 20]} flexShrink={0} />
                <Layout>
                  <CourseContent />
                </Layout>
                <Layout flexBasis={34} flexShrink={0} display={['flex', 'flex', 'none']} />
                <Layout display={['none', 'none', 'flex']}>
                  <Text
                    style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    color='dullRed'
                    fontWeight='bold'
                    fontSize='huge'
                    lineHeight='big'
                    letterSpacing='0.15em'
                  >
                    {intl.formatMessage(messages.courseDescriptionLink)}
                  </Text>
                </Layout>
                <Layout flexBasis={40} flexShrink={0} display={['none', 'none', 'flex']} />
                <Layout display={['none', 'none', 'flex']}>
                  <Button size='big' width='426px'>
                    <Layout>
                      <Text lineHeight='big' fontSize='huge' variant='buttonContent'>
                        {intl.formatMessage(messages.signUp)}
                      </Text>
                    </Layout>
                  </Button>
                </Layout>
                <Layout flexBasis={60} flexShrink={0} display={['none', 'none', 'flex']} />
              </Column>
              <Layout flexBasis={150} flexShrink={0} display={['none', 'none', 'flex']} />
              <Column>
                <Layout flexBasis={65} />
                <Layout width='494px' height='596px' display={['none', 'none', 'flex']}>
                  <ImageBlock />
                </Layout>
              </Column>
            </Row>
            <Layout flexBasis={[20, 20, 118]} flexShrink={0} />
          </Layout>
        </Box>
        <Layout flexBasis={30} display={['flex', 'flex', 'none']} />
        <Layout display={['flex', 'flex', 'none']} justifyContent='center'>
          <Button size='normal' width='240px'>
            <Layout>
              <Text variant='buttonContent' fontSize='normal' lineHeight='semiRegular'>
                {intl.formatMessage(messages.buyCourse)}
              </Text>
            </Layout>
          </Button>
        </Layout>
        <Layout flexBasis={25} display={['flex', 'flex', 'none']} />
      </Column>
    </Layout>
  )
}

export { CourseDescription }
