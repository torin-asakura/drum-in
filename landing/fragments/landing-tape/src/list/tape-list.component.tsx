/* eslint-disable react/jsx-no-useless-fragment */

import React                from 'react'
import { FC }               from 'react'
import { FormattedMessage } from 'react-intl'

import { Layout }           from '@ui/layout/src'
import { Box }              from '@ui/layout/src'
import { Text }             from '@ui/text/src'

import { Indent }           from './indent'
import { TapeListProps }    from './tape-list.interfaces'

export const TapeList: FC<TapeListProps> = ({ runningLineData }) => (
  <>
    {runningLineData?.content?.map((el) => (
      <Box alignItems='center'>
        <Layout>
          <Text fontSize={[14, 22, 30]} fontWeight='bold'>
            <FormattedMessage id='symbol.hashtag' />
          </Text>
          <Text
            fontSize={[16, 24, 32]}
            textTransform='uppercase'
            fontWeight='medium'
            fontFamily='secondary'
          >
            {el?.text}
          </Text>
        </Layout>
        <Indent path={runningLineData?.icon?.node.sourceUrl} />
      </Box>
    ))}
  </>
)
