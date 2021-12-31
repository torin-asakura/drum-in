import React          from 'react'
import { FC }         from 'react'

import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { ImageBlock } from '@ui/image'
import { Link }       from '@ui/link'

import { useSocials } from '../data'

const Social: FC = () => {
  const socials = useSocials()

  return (
    <Row>
      <Layout flexBasis={80} />
      {socials.map((social) => (
        <>
          <Layout width='18px' height='18px'>
            <Link href={social.content}>
              <ImageBlock src={social.url} alt={social.alt} />
            </Link>
          </Layout>
          <Layout flexBasis={50} />
        </>
      ))}
    </Row>
  )
}
export { Social }
