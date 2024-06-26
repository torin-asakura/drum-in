import React                  from 'react'
import { FC }                 from 'react'
import { useState }           from 'react'

import { Consultation }       from '@landing/consultation'
import { MobileConsultation } from '@landing/consultation'
import { Button }             from '@ui/button'
import { Row }                from '@ui/layout'
import { Box }                from '@ui/layout'
import { Text }               from '@ui/text'

import { ButtonsProps }       from './buttons.interfaces'

const Buttons: FC<ButtonsProps> = ({ privateLessonData }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const [visibleModalMobile, setVisibleModalMobile] = useState<boolean>(false)

  return (
    <>
      <Box
        display={['none', 'flex', 'flex', 'flex']}
        order={[7, 7, 0]}
        maxWidth={[514]}
        width={['100%', '100%', '100%']}
      >
        <Button
          size='withoutPaddingBigHeight'
          variant='purpleBackground'
          fill
          onClick={() => setVisibleModal(true)}
        >
          <Text
            fontWeight='semiBold'
            fontSize={['micro', 'semiRegular', 'large']}
            textTransform='uppercase'
          >
            {privateLessonData?.cta?.button}
          </Text>
        </Button>
      </Box>
      <Row display={['flex', 'none', 'none']} order={7}>
        <Button
          size='withoutPaddingMediumHeight'
          variant='purpleBackground'
          fill
          onClick={() => setVisibleModalMobile(true)}
        >
          <Text fontWeight='semiBold' fontSize='micro' textTransform='uppercase'>
            {privateLessonData?.cta?.button}
          </Text>
        </Button>
      </Row>
      <Consultation activeRender={visibleModal} setVisibleModal={setVisibleModal} />
      <MobileConsultation
        activeRender={visibleModalMobile}
        setVisibleModal={setVisibleModalMobile}
      />
    </>
  )
}
export { Buttons }
