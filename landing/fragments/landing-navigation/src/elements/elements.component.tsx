import React                     from 'react'
import { FC }                    from 'react'
import { FormattedMessage }      from 'react-intl'
import { useState }              from 'react'

import { CourseID }              from '@globals/data'
import { Consultation }          from '@landing/consultation'
import { MobileConsultation }    from '@landing/consultation'
import { Button }                from '@ui/button'
import { Column }                from '@ui/layout'
import { Layout }                from '@ui/layout'
import { Row }                   from '@ui/layout'
import { Box }                   from '@ui/layout'
import { NextLink }              from '@ui/link'
import { Text }                  from '@ui/text'

import { ElementsProps }         from './elements.interfaces'
import { IndividualCourseItems } from './individual-course-items'
import { MainCourseItem }        from './main-course-item'

const Elements: FC<ElementsProps> = ({ list, stateHover }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  const mainCourseData = list?.items?.nodes.find((el) => el.id === CourseID.OPENING_RHYTHM)

  const individualCoursesData = list?.items?.nodes.filter((el) => el.id !== CourseID.OPENING_RHYTHM)

  return (
    <Row>
      <Column width='100%'>
        <Box display={['flex', 'flex', 'none']}>
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize={['semiMedium', 'medium', 'medium']}
            lineHeight='default'
            color='gray'
          >
            {list?.title}
          </Text>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={[20, 24, 0]} />
        <MainCourseItem mainCourseData={mainCourseData} stateHover={stateHover} />
        <Layout flexBasis={16} />
        <IndividualCourseItems
          individualCoursesData={individualCoursesData}
          stateHover={stateHover}
        />
        <Layout flexBasis={[60, 50,0, 0]} />
        <Box display={['flex', 'flex', 'none']}>
          <NextLink path='/contact'>
            <Text
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
            >
              <FormattedMessage id='landing_header.contacts' />
            </Text>
          </NextLink>
        </Box>
        <Layout display={['flex', 'flex', 'none']} flexBasis={16} />
        <Box display={['none', 'flex', 'none']}>
          <Button
            size='withoutPaddingMicroHeight'
            variant='transparentBackground'
            onClick={() => setVisibleModal(true)}
          >
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
              lineHeight='default'
            >
              <FormattedMessage id='landing_header.connect' />
            </Text>
          </Button>
        </Box>
        <Box display={['flex', 'none', 'none']}>
          <Button
            size='withoutPaddingMicroHeight'
            variant='transparentBackground'
            onClick={() => setVisibleModalMobile(true)}
          >
            <Text
              textTransform='uppercase'
              fontFamily='secondary'
              fontWeight='bold'
              fontSize={['medium', 'semiModerate', 'big']}
              lineHeight='default'
            >
              <FormattedMessage id='landing_header.connect' />
            </Text>
          </Button>
        </Box>
        <Consultation activeRender={visibleModal} onClose={() => setVisibleModal(false)} />
        <MobileConsultation
          activeRender={visibleModalMobile}
          onClose={() => setVisibleModalMobile(false)}
        />
      </Column>
    </Row>
  )
}

export { Elements }
