import React               from 'react'
import { FC }              from 'react'

import { Link }            from '@ui/link'
import { Text }            from '@ui/text'

import { LinkSocialProps } from './link-social.interfaces'

const LinkSocial: FC<LinkSocialProps> = ({ text, path }) => (
  <Link href={path} target='_blank'>
    <Text fontFamily='secondary' fontWeight='bold' fontSize={['medium', 'regular', 'regular']}>
      {text}
    </Text>
  </Link>
)
export { LinkSocial }
