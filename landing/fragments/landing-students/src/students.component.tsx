import React                from 'react'
import { FormattedMessage } from 'react-intl'
import { useState }         from 'react'

import { Button }           from '@ui/button'
import { ArrowRightIcon }   from '@ui/icons'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Row }              from '@ui/layout'
import { Text }             from '@ui/text'

import { CardsStudent }     from './cards-student'
import { ModalWindow }      from './modal-window'

const StudentsBlock = () => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <>
      <ModalWindow active={visibleModal} onClose={() => setVisibleModal(false)} />
      <Row justifyContent='center'>
        <Box width={['100%', '100%', 1920]}>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={[32, 77, 120]} />
            <Row alignItems='center' justifyContent='space-between' flexWrap='wrap'>
              <Box>
                <Text
                  textTransform='uppercase'
                  fontFamily='DrukWideCy'
                  fontWeight='bold'
                  fontSize={['semiBig', 'huge', 'gigantic']}
                  lineHeight='default'
                  color='text.smokyWhite'
                >
                  <FormattedMessage id='landing_students.students' defaultMessage='Ученики' />
                </Text>
              </Box>
              <Column width={['100%', '100%', 440]}>
                <Box>
                  <Text
                    fontWeight='medium'
                    fontSize={['semiMedium', 'medium', 'regular']}
                    lineHeight={['primary', 'primary', 'medium']}
                    color='text.transparentSmokyWhite'
                  >
                    <FormattedMessage
                      id='landing_students.more_than_five_hundred_students'
                      defaultMessage='Обучение в нашей школе прошли уже более 500 учеников разного возраста, уровня и специальности.'
                    />
                  </Text>
                </Box>
                <Layout flexBasis={[16, 20, 24]} />
                <Box>
                  <Button
                    size='middlingPaddingMediumHeight'
                    variant='transparentWhiteToPurpleBackground'
                    iconSvg={<ArrowRightIcon width={24} height={24} />}
                    horizontalLocation='right'
                    onClick={() => setVisibleModal(true)}
                  >
                    <Text textTransform='uppercase' fontWeight='semiBold' fontSize='medium'>
                      <FormattedMessage
                        id='landing_students.watch_more'
                        defaultMessage='Смотреть еще'
                      />
                    </Text>
                  </Button>
                </Box>
              </Column>
            </Row>
            <Layout flexBasis={[32, 82, 175]} />
            <CardsStudent />
          </Column>
          <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        </Box>
      </Row>
    </>
  )
}
export { StudentsBlock }
