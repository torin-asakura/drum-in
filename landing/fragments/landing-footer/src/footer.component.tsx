import React             from 'react'

import { Background }    from '@ui/background'

import { ContentFooter } from './content-footer'

const FooterBlock = () => (
  <>
    <Background
      display={['none', 'none', 'flex']}
      width='100%'
      gradient='purpleBlueSemicircleImage'
      backgroundSize='80% 100%'
      backgroundRepeat='no-repeat'
      backgroundPosition='left bottom'
    >
      <ContentFooter />
    </Background>
    <Background
      display={['flex', 'flex', 'none']}
      width='100%'
      gradient='purpleBlueTwoSemicirclesSmallImage'
      backgroundSize='100% 80%'
      backgroundRepeat='no-repeat'
      backgroundPosition='center bottom'
    >
      <ContentFooter />
    </Background>
  </>
)
export { FooterBlock }
