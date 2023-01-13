import React             from 'react'
import { useRouter }     from 'next/router'
import { forwardRef }    from 'react'

import { Background }    from '@ui/background'

import { ContentFooter } from './content-footer'
import { FooterProps }   from './footer.interfaces'
import { getBg }         from './helpers'

const FooterBlock = forwardRef<HTMLDivElement, FooterProps>((
  { background = true, buttonUp = true },
  ref: any
) => {
  const router = useRouter()

  return (
    <>
      <Background
        display={['none', 'none', 'flex']}
        width='100%'
        gradient={background ? getBg(router.route).gradientDesktop : 'transparent'}
        backgroundSize='80% 100%'
        backgroundRepeat='no-repeat'
        backgroundPosition='left bottom'
        ref={ref}
      >
        <ContentFooter buttonUp={buttonUp} />
      </Background>
      <Background
        display={['flex', 'flex', 'none']}
        width='100%'
        gradient={background ? getBg(router.route).gradientMobile : 'transparent'}
        backgroundSize='100% 80%'
        backgroundRepeat='no-repeat'
        backgroundPosition='center bottom'
        ref={ref}
      >
        <ContentFooter buttonUp={buttonUp} />
      </Background>
    </>
  )
})
export { FooterBlock }
