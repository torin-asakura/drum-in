import React                   from 'react'
import { FormattedMessage }    from 'react-intl'

import { EducationIcon }       from '@ui/icons'
import { ArrowBottomTailIcon } from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'

import { useTeacher }          from '../../data'

const EducationList = () => {
  const education = useTeacher()?.teacher.education

  return (
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
        {education?.map(({ item }) => (
          <React.Fragment key={item.substring(0, 3)}>
            <Box>
              <Text
                fontWeight='medium'
                fontSize='regular'
                lineHeight='medium'
                color='text.transparentSmokyWhite'
              >
                {item}
              </Text>
            </Box>
            <Layout flexBasis={12} />
          </React.Fragment>
        ))}
        <Layout flexBasis={92} />
      </Column>
    </Box>
  )
}

export { EducationList }
