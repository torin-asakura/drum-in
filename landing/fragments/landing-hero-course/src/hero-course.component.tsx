import React          from 'react'
import { useRouter }  from 'next/router'

import { Background } from '@ui/background'

import { Content }    from './content'
import { getUi }      from './helpers'

const HeroCourse = () => {
  const router = useRouter()

  return (
    <>
      <Background
        display={['none', 'flex', 'flex']}
        flexDirection='column'
        width='100%'
        gradient={getUi(router.route).gradientDesktop}
        backgroundSize={getUi(router.route).backgroundSize}
        backgroundRepeat='no-repeat'
        backgroundPosition={getUi(router.route).backgroundPosition}
      >
        <Content id={getUi(router.route).components} />
      </Background>
      <Background
        display={['flex', 'none', 'none']}
        flexDirection='column'
        width='100%'
        gradient={getUi(router.route).gradientMobile}
        backgroundSize='100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='right center'
      >
        <Content id={getUi(router.route).components} />
      </Background>
    </>
  )
}

export { HeroCourse }
