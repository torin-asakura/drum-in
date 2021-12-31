import React                  from 'react'
import { FC }                 from 'react'

import { Column }             from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'

import { CourseContentProps } from './course-content.interface'

const CourseContent: FC<CourseContentProps> = ({ fragment }) => {
  return (
    <Layout>
      <Column alignItems={['center', 'center', 'flex-start']}>
        <Layout>
          <Text
            fontSize={['small', 'small', 'large']}
            variant='leadTextHeader'
            lineHeight={['semiRegular', 'semiRegular', 'semiNormal']}
          >
            {fragment?.title}
          </Text>
        </Layout>
        <Layout flexBasis={[30, 30, 39]} />
        <Layout>
          <Text
            variant='leadTextContent'
            fontSize={['mini', 'mini', 'normal']}
            lineHeight={['semiRegular', 'semiRegular', 'large']}
          >
            {fragment?.content}
          </Text>
        </Layout>
        <Layout flexBasis={[30, 30, 39]} />
      </Column>
    </Layout>
  )
}

export { CourseContent }
