import React                     from 'react'
import { FC }                    from 'react'

import { Layout }                from '@ui/layout'
import { Column }                from '@ui/layout'
import { Text }                  from '@ui/text'

import { EducationContentProps } from './education-content.interface'

const EducationContent: FC<EducationContentProps> = ({ content }) => {
  return (
    <Column>
      {content?.split('\n').map((item) => (
        <>
          <Layout>
            <Text
              color='dullBlack'
              fontSize={['regular', 'regular', 'normal']}
              fontWeight='normal'
              lineHeight='normal'
              textAlign='justify'
            >
              {item}
            </Text>
          </Layout>
          <Layout flexBasis={25} />
        </>
      ))}
    </Column>
  )
}

export { EducationContent }
