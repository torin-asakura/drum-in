import React                 from 'react'
import { FC }                from 'react'
import { forwardRef }        from 'react'

import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { Text }              from '@ui/text'
import { useTeacher }        from '@globals/data'

import { EducationMobile }   from './education-mobile'
import { Info }              from './info'
import { SliderBlock }       from './slider'
import { TeacherBlockProps } from './teacher.interfaces'

const TeacherBlock: FC<TeacherBlockProps> = forwardRef(({ playSong, setPlaySong }, ref: any) => {
  const { teacherData } = useTeacher()

  return (
    <Row flexWrap='wrap' justifyContent='center' ref={ref}>
      <Box width={['100%', '100%', 1920]}>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Column width='100%' alignItems={['start', 'start', 'center']}>
          <Layout flexBasis={[32, 65, 122]} />
          <Row justifyContent={['start', 'start', 'center']}>
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'moderate', 'big']}
              lineHeight='default'
              color={[
                'text.transparentSmokyWhite',
                'text.transparentSmokyWhite',
                'text.smokyWhite',
              ]}
            >
              {teacherData?.subtitle}
            </Text>
          </Row>
          <Layout flexBasis={[8, 10, 12]} />
          <Row justifyContent={['start', 'start', 'center']}>
            <Text
              textAlign={['start', 'start', 'center']}
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['moderate', 'massive', 'giant']}
              lineHeight='default'
              color='text.smokyWhite'
            >
              {teacherData?.title}
            </Text>
          </Row>
          <Layout flexBasis={[12, 32, 52]} />
          <Box width={['100%', '100%', 877]}>
            <Text
              textAlign={['start', 'start', 'center']}
              fontWeight='medium'
              fontSize={['semiMedium', 'semiRegular', 'large']}
              lineHeight='primary'
              color='text.transparentSmokyWhite'
            >
              {teacherData?.description}
            </Text>
          </Box>
          <Layout display={['flex', 'flex', 'none']} flexBasis={[12, 30, 0]} />
          <EducationMobile teacherData={teacherData} />
        </Column>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      </Box>
      <Box>
        <Column width='100%'>
          <Layout flexBasis={[24, 70, 130]} />
          <SliderBlock gallery={teacherData?.gallery} />
          <Layout flexBasis={[24, 70, 155]} />
        </Column>
      </Box>
      <Info teacherData={teacherData} playSong={playSong} setPlaySong={setPlaySong} />
    </Row>
  )
})

export { TeacherBlock }
