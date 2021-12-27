import React       from 'react'
import { FC }      from 'react'
import { useIntl } from 'react-intl'

import { Column }  from '@ui/layout'
import { Layout }  from '@ui/layout'
import { Text }    from '@ui/text'

import messages    from '../messages'

const CourseContent: FC = () => {
  const intl = useIntl()
  return (
    <Layout>
      <Column alignItems={['center', 'center', 'flex-start']}>
        <Layout display={['flex', 'flex', 'none']}>
          <Text fontSize='small' lineHeight='semiRegular' variant='leadTextHeader'>
            {intl.formatMessage(messages.courseNameMobile)}
          </Text>
        </Layout>
        <Layout display={['none', 'none', 'flex']}>
          <Text fontSize='large' variant='leadTextHeader' lineHeight='semiNormal'>
            {intl.formatMessage(messages.courseName)}
          </Text>
        </Layout>
        <Layout flexBasis={[30, 30, 39]} />
        <Layout display={['flex', 'flex', 'none']}>
          <Text variant='leadTextContent' fontSize='mini' lineHeight='semiRegular'>
            {intl.formatMessage(messages.courseDescriptionMobile)}
          </Text>
        </Layout>
        <Layout display={['none', 'none', 'flex']}>
          <Text variant='leadTextContent' fontSize='normal' lineHeight='large'>
            {intl.formatMessage(messages.courseDescriptionContent)}
          </Text>
        </Layout>
        <Layout flexBasis={[30, 30, 39]} />
      </Column>
    </Layout>
  )
}

export { CourseContent }
