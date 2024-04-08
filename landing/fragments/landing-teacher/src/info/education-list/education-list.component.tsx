import React                   from 'react'
import { FC }                  from 'react'

import { TeacherDataProps }    from '@globals/data/src'
import { EducationIcon }       from '@ui/icons'
import { ArrowBottomTailIcon } from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Text }                from '@ui/text'

export interface EducationListProps {
  teacherData?: TeacherDataProps | null
}

const EducationList: FC<EducationListProps> = ({ teacherData }) => (
  <Box position='relative' display={['none', 'none', 'flex']} >
    <Box
      position='absolute'
      top={80}
      left={-80}
      display={['none', 'none', 'none', 'flex']}
      style={{ transform: 'rotate(-15deg)' }}
    >
      <ArrowBottomTailIcon width={120} height={120} />
    </Box>
    <Box
      position='absolute'
      top={60}
      left={-20}
      display={['none', 'none', 'flex', 'none']}
      style={{ transform: 'rotate(-15deg)' }}
    >
      <ArrowBottomTailIcon width={70} height={70} />
    </Box>
    <Column justifyContent={['end']} width={300}>
      <Layout flexBasis={100}/>
      <Box>
        <Box display={['none', 'none', 'none', 'flex']}>
          <EducationIcon width={44} height={44} />
        </Box>
        <Box display={['none', 'none', 'flex', 'none']}>
          <EducationIcon width={32} height={32} />
        </Box>
        <Layout flexBasis={8} flexShrink={0} />
        <Box>
          <Text fontWeight='medium' fontSize={['large','large','large','mild']} lineHeight='medium' color='text.smokyWhite'>
            {teacherData?.education?.title}
          </Text>
        </Box>
      </Box>
      <Layout flexBasis={[12,12,12,20]} />
      {teacherData?.education?.list?.map((item) => (
        <React.Fragment key={item?.element?.substring(0, 3)}>
          <Box>
            <Text
              fontWeight='medium'
              fontSize={['semiMedium','semiMedium','semiMedium','regular']}
              lineHeight='medium'
              color='text.transparentSmokyWhite'
            >
              {item?.element}
            </Text>
          </Box>
          <Layout flexBasis={[6,6,6,12]} />
        </React.Fragment>
      ))}
      <Layout flexBasis={40} />
    </Column>
  </Box>
)

export { EducationList }
