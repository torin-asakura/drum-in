import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'
import { forwardRef }       from 'react'

import { Button }           from '@ui/button'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Row }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { CardsStudent }     from './cards-student'
import { ModalWindow }      from './modal-window'
import { useStudents }      from './data'

const StudentsBlock = forwardRef(({ data }: any, ref: any) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const students = useStudents()

  return (
    <>
      <ModalWindow active={visibleModal} onClose={() => setVisibleModal(false)} />
      <Row justifyContent='center' ref={ref}>
        <Box width={['100%', '100%', 1920]}>
          <Column width='100%'>
            <Layout flexBasis={[32, 77, 120]} />
            <Box
              width='100%'
              flexWrap={['nowrap', 'nowrap', 'wrap']}
              alignItems={['start', 'start', 'center']}
              justifyContent={['start', 'start', 'space-between']}
              flexDirection={['column', 'column', 'row']}
            >
              <Box>
                <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
                <Text
                  textTransform='uppercase'
                  fontFamily='secondary'
                  fontWeight='bold'
                  fontSize={['semiBig', 'huge', 'gigantic']}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  {students?.title}
                </Text>
              </Box>
              <Layout display={['flex', 'flex', 'none']} flexBasis={[8, 12, 0]} />
              <Column width={[335, 420, 440]}>
                <Box>
                  <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
                  <Text
                    fontWeight='medium'
                    fontSize={['semiMedium', 'medium', 'regular']}
                    lineHeight={['primary', 'primary', 'medium']}
                    color='text.transparentSmokyWhite'
                  >
                    {students?.students?.description}
                  </Text>
                </Box>
                <Layout flexBasis={[16, 20, 24]} />
                <Box display={['none', 'none', 'flex']}>
                  <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
                  <Button
                    size='middlingPaddingMediumHeight'
                    variant='transparentWhiteToPurpleBackground'
                    iconSvg={<ArrowRightIcon width={24} height={24} />}
                    horizontalLocation='right'
                    onClick={() => setVisibleModal(true)}
                  >
                    <Text textTransform='uppercase' fontWeight='semiBold' fontSize='medium'>
                      <FormattedMessage id='landing_students.watch_more' />
                    </Text>
                  </Button>
                </Box>
                <Box display={['flex', 'flex', 'none']}>
                  <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
                  <Button
                    size='littlePaddingSemiMediumHeight'
                    variant='transparentWhiteToPurpleBackground'
                    iconSvg={<ArrowRightIcon width={20} height={20} />}
                    horizontalLocation='right'
                    onClick={() => setVisibleModal(true)}
                  >
                    <Text textTransform='uppercase' fontWeight='semiBold' fontSize='micro'>
                      <FormattedMessage id='landing_students.watch_more' />
                    </Text>
                  </Button>
                </Box>
              </Column>
            </Box>
            <Layout flexBasis={[32, 82, 175]} />
            <CardsStudent />
            <Layout display={['flex', 'flex', 'none']} flexBasis={[24, 34, 0]} />
          </Column>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        </Box>
      </Row>
    </>
  )
})
export { StudentsBlock }
