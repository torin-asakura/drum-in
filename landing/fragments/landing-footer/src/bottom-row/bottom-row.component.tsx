import React              from 'react'
import { FC }             from 'react'

import { Box }            from '@ui/layout'
import { Layout }         from '@ui/layout'
import { NextLink }       from '@ui/link'
import { Link }           from '@ui/link'
import { Text }           from '@ui/text'

import { BottomRowProps } from './bottom-row.interfaces'

const BottomRow: FC<BottomRowProps> = ({ footer }) => (
  <Box
    width='100%'
    flexDirection={['column', 'column', 'row']}
    alignItems={['center', 'center', 'end']}
    justifyContent='space-between'
  >
    <Box>
      <NextLink path={footer?.privacyPolicy?.path}>
        <Text
          textTransform='none'
          fontWeight='medium'
          fontSize={['micro', 'medium', 'regular']}
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          {footer?.privacyPolicy?.title}
        </Text>
      </NextLink>
    </Box>
    <Layout flexBasis={12} display={['flex', 'flex', 'none']} />
    <Box>
      <Link href={`mailto:${footer?.email}`} target='_blank'>
        <Text fontFamily='secondary' fontWeight='bold' fontSize={['medium', 'large', 'moderate']}>
          {footer?.email}
        </Text>
      </Link>
    </Box>
  </Box>
)

export { BottomRow }
