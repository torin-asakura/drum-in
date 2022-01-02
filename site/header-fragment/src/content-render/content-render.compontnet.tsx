import React                  from 'react'
import { FC }                 from 'react'

import { Column }             from '@ui/layout'
import { Row }                from '@ui/layout'
import { Layout }             from '@ui/layout'
import { Text }               from '@ui/text'
import { Condition }          from '@ui/condition'

import { ContentRenderProps } from './content-render.interface'
import { NAME }               from '../data'

const ContentRender: FC<ContentRenderProps> = ({ array }) => {
  return (
    <Column width='100%' alignItems={['center', 'center', 'flex-start']}>
      {array.map((item) => (
        <>
          <Row justifyContent='flex-start'>
            <Layout flexBasis={15} />
            <Layout
              width={['260px', '260px', '750px']}
              justifyContent={['center', 'center', 'flex-start']}
            >
              <Text
                color={['dullBlack', 'dullBlack', item?.title === NAME ? 'dullRed' : 'dullBlack']}
                fontSize={['small', 'small', 'large']}
                fontWeight='bold'
                lineHeight={['semiSmall', 'semiSmall', 'semiNormal']}
                letterSpacing='0.15em'
              >
                {item.content}
              </Text>
            </Layout>
          </Row>
          <Condition match={item === array[array.length - 1 - 1]}>
            <Layout flexBasis={[14, 14, 35]} />
          </Condition>
          <Condition match={item !== array[array.length - 1 - 1]}>
            <Layout flexBasis={[14, 14, 20]} />
          </Condition>
        </>
      ))}
    </Column>
  )
}

export { ContentRender }
