import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const Footer: FC = () => {
  return (
    <Box width={['320px', '320px', '1440px']} height={['730px', '730px', '570px']}>
      <Column width='100%' display={['none', 'none', 'flex']}>
        <Row>
          <Box width='720px' height='255px' border='1px solid black'>
            <Row>
              <Layout flexBasis={138} />
              <Column width='100%'>
                <Layout flexBasis={52} />
                <Box width='349px' height='23px' border='1px solid black'>
                  <Layout>
                    <Text>address</Text>
                  </Layout>
                </Box>
                <Layout flexBasis={60} />
                <Box width='469px' height='70px' border='1px solid black'>
                  <Layout>
                    <Text>text</Text>
                  </Layout>
                </Box>
                <Layout flexBasis={52} />
              </Column>
              <Layout flexBasis={119} />
            </Row>
          </Box>
          <Box width='720px' height='255px' border='1px solid black'>
            yandex map
          </Box>
        </Row>
        <Layout flexBasis={60} />
        <Box width='1440px' height='252px' border='1px solid black'>
          <Row>
            <Layout flexBasis='138px' flexShrink={0} />
            <Column>
              <Layout flexBasis={60} />
              <Box width='502px' height='23px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
              <Layout flexBasis={56} />
              <Row>
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
                <Layout flexBasis={103} flexShrink={0} />
                <Box height='48px' width='48px' border='1px solid black'>
                  <Layout>icon</Layout>
                </Box>
              </Row>
            </Column>
            <Layout flexBasis='800px' flexShrink={0} />
          </Row>
        </Box>
      </Column>
      <Column width='100%' display={['flex', 'flex', 'none']}>
        <Box border='1px solid black' width='320' height='160px'>
          <Row>
            <Layout flexBasis={40} />
            <Column width='100%'>
              <Layout flexBasis={25} />
              <Box border='1px solid black'>
                <Layout>
                  <Text>address header</Text>
                </Layout>
              </Box>
              <Layout flexBasis={25} />
              <Box border='1px solid black'>
                <Layout>
                  <Text>address</Text>
                </Layout>
              </Box>
              <Layout flexBasis={25} />
            </Column>
            <Layout flexBasis={20} />
          </Row>
        </Box>
        <Box width='320px' height='180px' border='1px solid black'>
          <Layout>yandex map</Layout>
        </Box>
        <Box width='320px' height='400px' border='1px solid black'>
         
          <Row justifyContent='center'>
          <Layout flexBasis={30}/>
          <Column width='100%' alignItems='center'> 
          <Layout flexBasis={30}/>
            <Layout>
              <Button width='237px' height='40px' border='1px solid black' >
                <Layout>
                  <Text>sign up</Text>
                </Layout>
              </Button>
            </Layout>
            <Layout flexBasis={30}/>
            <Box border='1px solid black'>
              <Layout>
                <Text>
                  phone number
                </Text>
              </Layout>
            </Box>
            <Layout flexBasis={50}/>
            <Row justifyContent='center'>
              <Box width='48px' height='48px' border='1px solid black'>
                  <Layout>
                    icon
                  </Layout>
              </Box>
              <Layout flexBasis={100} flexShrink={0}/>
              <Box width='48px' height='48px' border='1px solid black'>
                  <Layout>
                    icon
                  </Layout>
              </Box>
            </Row>
            <Layout flexBasis={100} flexShrink={0}/>
            <Row justifyContent='center'>
              <Box width='48px' height='48px' border='1px solid black'>
                  <Layout>
                    icon
                  </Layout>
              </Box>
              <Layout flexBasis={100} flexShrink={0}/>
              <Box width='48px' height='48px' border='1px solid black'>
                  <Layout>
                    icon
                  </Layout>
              </Box>
            </Row>
          </Column>
          <Layout flexBasis={30}/>
          </Row>
        </Box>
      </Column>
    </Box>
  )
}

export { Footer }
