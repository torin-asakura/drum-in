import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Link }       from '@ui/link'
import { ImageBlock } from '@ui/image'
import { Text }       from '@ui/text'

import messages       from './messages'
import { useSocials } from './data'

const Footer: FC = () => {
  const intl = useIntl()
  const socials = useSocials()

  return (
    <>
      <Box
        width='100%'
        height={252}
        display={['none', 'none', 'flex']}
        justifyContent='center'
        backgroundColor='dullBlack'
      >
        <Layout width='1440px'>
          <Row>
            <Layout flexBasis='138px' flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={60} />
              <Layout>
                <Text
                  color='white'
                  fontWeight='bold'
                  fontSize='large'
                  lineHeight='semiNormal'
                  letterSpacing='0.15em'
                >
                  {intl.formatMessage(messages.whatsUp)}
                </Text>
              </Layout>
              <Layout flexBasis={56} />
              <Row>
                {socials.map((social) => (
                  <>
                    <Link href={social?.content}>
                      <ImageBlock
                        style={{ transform: 'scale(2)' }}
                        src={social?.url}
                        alt={social?.alt}
                      />
                    </Link>
                    <Layout flexBasis={103} flexShrink={0} />
                  </>
                ))}
              </Row>
            </Column>
            <Layout flexBasis='800px' flexShrink={0} />
          </Row>
        </Layout>
      </Box>
      <Box width='320px' display={['flex', 'flex', 'none']} backgroundColor='dullBlack'>
        <Layout flexBasis={30} />
        <Column width='100%' alignItems='center'>
          <Layout flexBasis={50} />
          <Row justifyContent='center'>
            {socials.map((social) => (
              <>
                <Layout flexShrink={0}>
                  <Link href={social?.content}>
                    <ImageBlock width='48px' height='48px' src={social?.url} alt={social?.alt} />
                  </Link>
                </Layout>
                <Layout flexBasis={100} />
              </>
            ))}
          </Row>
          <Layout flexBasis={70} />
        </Column>
        <Layout flexBasis={30} />
      </Box>
    </>
  )
}

export { Footer }
