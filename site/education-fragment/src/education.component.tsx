import React                from 'react'
import { FC }               from 'react'
import { useIntl }          from 'react-intl'

import { extractUrl }       from '@globals/data'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'
import { ImageBlock }       from '@ui/image'

import messages             from './messages'
import { EducationContent } from './education-content'
import { Experience }       from './experience'
import { useEducation }     from './data'

const Education: FC = () => {
  const intl = useIntl()
  const education = useEducation()

  return (
    <Box width={['320px', '320px', '100%']} justifyContent='center'>
      <Layout width='1440px' display={['none', 'none', 'flex']}>
        <Column width='100%'>
          <Layout flexBasis={60} flexShrink={0} />
          <Row>
            <Layout flexBasis={138} flexShrink={0} />
            <Column width='100%'>
              <Layout>
                <Text color='dullBlack' lineHeight='normal' fontSize='big' fontWeight='semiBold'>
                  {education?.title}
                </Text>
              </Layout>
              <Layout flexBasis={50} />
              <EducationContent content={education?.content} />
            </Column>
            <Layout flexBasis={118} flexShrink={0} />
            <Layout width='538px' height='364px' flexShrink={0}>
              <ImageBlock
                src={extractUrl(education?.addons.picture)}
                alt={education?.addons.picture.altText}
              />
            </Layout>
            <Layout flexBasis={74} flexShrink={0} />
          </Row>
          <Layout flexBasis={65} />
        </Column>
      </Layout>
      <Column width='100%' display={['flex', 'flex', 'none']}>
        <Layout flexBasis={25} flexShrink={0} />
        <Row>
          <Layout flexBasis={44} flexShrink={0} />
          <Column width='100%'>
            <Layout>
              <Text color='dullBlack' lineHeight='normal' fontWeight='semiBold' fontSize='regular'>
                {education?.title}
              </Text>
            </Layout>
            <Layout flexBasis={12} />
            <EducationContent content={education?.content} />
            <Layout flexBasis={20} />
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout>
          <ImageBlock
            src={extractUrl(education?.addons.picture)}
            alt={education?.addons.picture.altText}
          />
        </Layout>
        <Layout flexBasis={30} />
        <Row justifyContent='center'>
          <Layout flexBasis={44} flexShrink={0} />
          <Column>
            <Experience />
          </Column>
          <Layout flexBasis={44} flexShrink={0} />
        </Row>
        <Layout flexBasis={15} />
        <Row>
          <Layout flexBasis={40} />
          <Layout>
            <Text color='dullRed' fontWeight='semiBold' lineHeight='normal' fontSize='regular'>
              {intl.formatMessage(messages.link)}
            </Text>
          </Layout>
        </Row>
        <Layout flexBasis={25} flexShrink={0} />
      </Column>
    </Box>
  )
}

export { Education }
