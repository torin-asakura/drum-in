import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { EducationIcon }       from '@ui/icons'
import { ArrowBottomTailIcon } from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'

const EducationList = () => (
  <Box position='relative' display={['none', 'none', 'flex']}>
    <Box position='absolute' top={80} left={-60} style={{ transform: 'rotate(-15deg)' }}>
      <ArrowBottomTailIcon width={100} height={83} />
    </Box>
    <Column justifyContent='end' width={300}>
      <Box>
        <Box>
          <EducationIcon width={44} height={44} />
        </Box>
        <Layout flexBasis={8} flexShrink={0} />
        <Box>
          <Text fontWeight='medium' fontSize='mild' lineHeight='medium' color='text.smokyWhite'>
            <FormattedMessage id='landing_teacher.education' defaultMessage='Образование' />
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={20} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize='regular'
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage
            id='landing_teacher.gka_name_maimonides'
            defaultMessage='ГКА им. Маймонида'
          />
        </Text>
      </Box>
      <Layout flexBasis={12} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize='regular'
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage
            id='landing_teacher.mkim_by_percussion_class'
            defaultMessage='МКИМ по классу Ударные'
          />
        </Text>
      </Box>
      <Layout flexBasis={12} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize='regular'
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage
            id='landing_teacher.drumworkshop_saulcrasti'
            defaultMessage='Drumworkshop Saulcrasti Jazz by Donald Edwards'
          />
        </Text>
      </Box>
      <Layout flexBasis={12} />
      <Box>
        <Text
          fontWeight='medium'
          fontSize='regular'
          lineHeight='medium'
          color='text.transparentSmokyWhite'
        >
          <FormattedMessage
            id='landing_teacher.begues_jazz_camp'
            defaultMessage='Begues Jazz Camp'
          />
        </Text>
      </Box>
      <Layout flexBasis={104} />
    </Column>
  </Box>
)

export { EducationList }
