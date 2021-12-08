import React        from 'react'
import { FC }       from 'react'
import { useIntl }  from 'react-intl'

import { Box }      from '@ui/layout'
import { Row }      from '@ui/layout'
import { Column }   from '@ui/layout'
import { Layout }   from '@ui/layout'
import { Button }   from '@ui/button'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import messages     from './messages'

const CourseDescription: FC = () => {
  const intl = useIntl()
  return (
    <Layout width={['320px', '320px', '1440px']}>
      <Column width='100%'>
        <Box
          width={['320px', '320px', '1440px']}
          height={['290px', '290px', '722px']}
          backgroundColor='softBlack'
        >
          <Layout flexBasis={[20, 20, 137]} />
          <Row>
            <Column alignItems='center' width='100%'>
              <Layout flexBasis={[25, 25, 53]} />
              <Layout display={['none', 'none', 'flex']}>
                <Text color='white' fontWeight='normal' fontSize='big' lineHeight='regular'>
                  {intl.formatMessage(messages.onlineCourse)}{' '}
                </Text>
              </Layout>
              <Layout flexBasis={30} display={['none', 'none', 'flex']} />
              <Layout display={['none', 'none', 'flex']}>
                <Text fontSize='large' color='white' fontWeight='bold' lineHeight='regular'>
                  {' '}
                  {intl.formatMessage(messages.courseName)}{' '}
                </Text>
              </Layout>
              <Layout display={['flex', 'flex', 'none']}>
                <Text color='white'> {intl.formatMessage(messages.courseNameMobile)} </Text>
              </Layout>
              <Layout flexBasis={[30, 30, 39]} />
              <Layout width='517px' height='311px' display={['none', 'none', 'flex']}>
                <Text color='white' fontWeight='semiBold' lineHeight='large' fontSize='normal'>
                  {' '}
                  {intl.formatMessage(messages.courseDescriptionContent)}{' '}
                </Text>
              </Layout>
              <Layout width='517px' height='311px' display={['flex', 'flex', 'none']}>
                <Text color='white' fontSize='mini' fontWeight='normal' lineHeight='large'>
                  {' '}
                  {intl.formatMessage(messages.courseDescriptionMobile)}{' '}
                </Text>
              </Layout>
              <Layout flexBasis={24} flexShrink={0} display={['flex', 'flex', 'none']} />
              <Row justifyContent='center' display={['flex', 'flex', 'none']}>
                <Layout>
                  <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
                </Layout>
                <Layout flexBasis={10} flexShrink={0} />
                <Layout>
                  <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
                </Layout>
              </Row>
              <Layout flexBasis={34} flexShrink={0} display={['flex', 'flex', 'none']} />
              <Layout flexBasis={70} display={['none', 'none', 'flex']} />
              <Layout>
                <Text> {intl.formatMessage(messages.courseDescriptionLink)} </Text>
              </Layout>
              <Layout flexBasis={60} display={['none', 'none', 'flex']} />
              <Layout display={['none', 'none', 'flex']}>
                <Button size='big' width='426px'>
                  <Layout>
                    <Text>{intl.formatMessage(messages.signUp)} </Text>
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
          <Layout flexBasis={[20, 20, 118]} />
        </Box>
        <Layout flexBasis={30} display={['flex', 'flex', 'none']} />
        <Layout display={['flex', 'flex', 'none']} justifyContent='center'>
          <Button size='normal' width='240px'>
            <Layout>
              <Text>{intl.formatMessage(messages.buyCourse)} </Text>
            </Layout>
          </Button>
        </Layout>
        <Layout flexBasis={25} display={['flex', 'flex', 'none']} />
      </Column>
    </Layout>
  )
}

export { CourseDescription }
