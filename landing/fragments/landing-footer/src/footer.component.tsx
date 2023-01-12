import React             from 'react'
import { useRouter }     from 'next/router'
import { forwardRef }    from 'react'

import { Background }    from '@ui/background'

import { ContentFooter } from './content-footer'
import { getBg }         from './helpers'

const FooterBlock = forwardRef(({ data }: any, ref: any) => {
  const router = useRouter()

  return (
    <>
      <Background
        display={['none', 'none', 'flex']}
        width='100%'
        gradient={getBg(router.route).gradientDesktop}
        backgroundSize='80% 100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='left bottom'
        ref={ref}
      >
        <ContentFooter />
      </Background>
      <Background
        display={['flex', 'flex', 'none']}
        width='100%'
        gradient={getBg(router.route).gradientMobile}
        backgroundSize='100% 80%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center bottom'
        ref={ref}
      >
        <ContentFooter />
      </Background>
    </>
  )
})
export { FooterBlock }
