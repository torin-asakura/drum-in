import React              from 'react'
import { FC }             from 'react'
import { memo }           from 'react'
import { useState }       from 'react'

import { Consultation }   from '@landing/consultation'
import { Button }         from '@ui/button'
import { Row }            from '@ui/layout'
import { Text }           from '@ui/text'

import { CtaButtonProps } from './cta-button.interfaces'

export const CtaButton: FC<CtaButtonProps> = memo(({ title }) => {
  const [visibleModal, setVisibleModal] = useState<boolean>(false)

  return (
    <>
      <Row justifyContent='end' display={['none', 'none', 'flex']}>
        <Button
          size='withoutPaddingMicroHeight'
          variant='transparentBackground'
          onClick={() => setVisibleModal(true)}
        >
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize={['semiMedium', 'medium', 'medium']}
            lineHeight='default'
          >
            {title}
          </Text>
        </Button>
      </Row>
      <Consultation activeRender={visibleModal} setVisibleModal={setVisibleModal} />
    </>
  )
})
