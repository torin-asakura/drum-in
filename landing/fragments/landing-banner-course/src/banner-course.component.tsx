import React                           from 'react'
import { useRouter }                   from 'next/router'
import { useEffect }                   from 'react'
import { useState }                    from 'react'

import { CoursePages as CCoursePages } from '@shared/data'
import { RightDownArrowIcon }          from '@ui/icons'
import { Box }                         from '@ui/layout'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { useMockedCoursePages }        from '@shared/data'

import { BannerCourseProps }           from './banner-course.interfaces'
import { Tape }                        from './tape'

const BannerCourseBlock = () => {
  const router = useRouter()

  const { coursePages: coursePagesData } = useMockedCoursePages()
  const [coursePages, setCoursePages] = useState<CCoursePages[]>([])

  useEffect(() => {
    setCoursePages(coursePagesData)
    // eslint-disable-next-line
  }, [])

  let texts: BannerCourseProps = {
    titleBanner: '',
    descBanner: '',
    tapePhrase: '',
  }

  for (let i = 0; coursePages.length >= i; i += 1) {
    if (coursePages[i] !== undefined && coursePages[i].pathPage === router.route) {
      texts = {
        titleBanner: coursePages[i].titleBanner,
        descBanner: coursePages[i].descBanner,
        tapePhrase: coursePages[i].tapePhrase,
      }
    }
  }

  return (
    <Box flexDirection='column' width='100%'>
      <Row justifyContent='center'>
        <Box width={['100%', '100%', 1920]}>
          <Layout flexBasis={[20, 30, 40]} />
          <Column width='100%'>
            <Layout flexBasis={[124, 142, 160]} />
            <Box position='relative'>
              <Column width='100%' alignItems={['start', 'start', 'end']}>
                <Box width={{ _: '100%', tablet: '100%', laptop: '100%', wide: 1790 }}>
                  <Text
                    textAlign={['left', 'left', 'right']}
                    textTransform='uppercase'
                    fontFamily='secondary'
                    fontWeight='bold'
                    fontSize={{
                      _: 'moderate',
                      tablet: 'semiHuge',
                      laptop: 'gigantic',
                      wide: 'biggest',
                    }}
                    lineHeight={['default', 'default', 'semiSmall']}
                    color='text.smokyWhite'
                  >
                    {texts.titleBanner}
                  </Text>
                </Box>
                <Layout flexBasis={[16, 28, 40]} />
                <Box width={['100%', '100%', 815]}>
                  <Box width={[282, 428, 460]}>
                    <Text
                      fontWeight='medium'
                      fontSize={['semiMedium', 'semiRegular', 'large']}
                      lineHeight='primary'
                      color={[
                        'text.transparentSmokyWhite',
                        'text.transparentSmokyWhite',
                        'text.smokyWhite',
                      ]}
                    >
                      {texts.descBanner}
                    </Text>
                  </Box>
                </Box>
              </Column>
              <Box display={['none', 'none', 'flex']} position='absolute' left={150} top={82}>
                <RightDownArrowIcon color='rgb(242, 242, 242)' width={300} height={200} />
              </Box>
              <Box
                display={['flex', 'flex', 'none']}
                position='absolute'
                right={0}
                bottom={-20}
                style={{ transform: 'scale(-1, 1)' }}
              >
                <RightDownArrowIcon color='rgb(242, 242, 242)' width={60} height={60} />
              </Box>
            </Box>
            <Layout flexBasis={[44, 84, 126]} />
          </Column>
          <Layout flexBasis={[20, 30, 40]} />
        </Box>
      </Row>
      <Tape level={texts.tapePhrase} />
    </Box>
  )
}
export { BannerCourseBlock }
