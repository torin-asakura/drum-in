import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/layout'
import { Button }   from '@ui/button'
import {Row}  from '@ui/layout'

const FooterMobile = () => {
  return (
    <Box width='320px' height='745px' border='1px solid black'>
      <Column width='100%'>
        <Box width='321px' height='158px' border='1px solid black'>
          <Layout flexBasis={40} flexShrink={0} />
          <Column>
            <Layout flexBasis={30} flexShrink={0} />
            <Box width='256px' height='66px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={25} flexShrink={0} />
            <Box width='150px' height='13px' border='1px solid black'>
              <Layout>
                <Text>text</Text>
              </Layout>
            </Box>
            <Layout flexBasis={30} flexShrink={0} />
          </Column>
          <Layout flexBasis={20} flexShrink={0} />
        </Box>
        <Box width='320px' height='183px' border='1px solid black'>
          <Layout>yandex map</Layout>
        </Box>
        <Box width='320px' height='400px' border='1px solid black'>
          <Layout flexBasis={40} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={30} />
            <Layout>
              <Button width='237px' height='41px' border='1px solid black'>
                <Layout>
                  <Text>sign up</Text>
                </Layout>
              </Button>
            </Layout>
            <Layout flexBasis={30} />
            <Row justifyContent='center'> 
            <Box width='172px' height='23px' border='1px solid black'>
                <Layout>
                    <Text>
                        phone number
                    </Text>
                </Layout>
            </Box>
            </Row>
            <Layout flexBasis={50} flexShrink={0}/>
            <Row judtifyContent='center'>
            <Column>
            <Box width='48px' height='48px' border='1px solid black'>
                <Layout>
                    img
                </Layout>
            </Box>
            <Layout flexBasis={50} flexShrink={0}/>
            <Box width='48px' height='48px' border='1px solid black'>
                <Layout>
                    img
                </Layout>
            </Box>
            </Column>
            <Layout flexBasis={100} flexShrink={0}/>
            <Column>
            <Box width='48px' height='48px' border='1px solid black'>
                <Layout>
                    img
                </Layout>
            </Box>
            <Layout flexBasis={50} flexShrink={0}/>
            <Box width='48px' height='48px' border='1px solid black'>
                <Layout>
                    img
                </Layout>
            </Box>
            </Column>
            </Row>
          </Column>
          <Layout flexBasis={40} flexShrink={0} />
        </Box>
      </Column>
    </Box>
  )
}

export { FooterMobile }
