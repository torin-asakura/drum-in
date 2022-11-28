import React         from 'react'
import { FC }        from 'react'
import { useRouter } from 'next/router'

import { NextLink }  from '@ui/link'
import { Link }      from '@ui/link'

import { Icon }      from './icon.component'

const Logo: FC = ({ ...props }) => {
  const router = useRouter()

  if (router.route === '/') {
    return (
      // eslint-disable-next-line
      <Link href='#'>
        <Icon />
      </Link>
    )
  }

  return (
    <NextLink path='/'>
      <Icon />
    </NextLink>
  )
}
export { Logo }
