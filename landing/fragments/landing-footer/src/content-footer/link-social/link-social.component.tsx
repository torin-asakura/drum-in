import React               from 'react'
import { FC }              from 'react'

import { NextLink }        from '@ui/link'
import { Text }            from '@ui/text'

import { LinkSocialProps } from './link-social.interfaces'

const LinkSocial: FC<LinkSocialProps> = ({ text }) => (
  <NextLink path='/'>
    <Text fontFamily='DrukWideCy' fontWeight='bold' fontSize={['medium', 'regular', 'regular']}>
      {text}
    </Text>
  </NextLink>
)
export { LinkSocial }
