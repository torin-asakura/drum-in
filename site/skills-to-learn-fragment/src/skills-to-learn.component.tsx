import React    from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/layout'

const SkillsToLearn = () => {
  return (
    <Box width='1440px' border = '1px solid black' >
      <Column width='100%'>
        <Row justifyContent='center'>
          <Column>
          <Layout flexBasis={59}/>
            <Row>
              <Box borderRadius={50} height='18px' width='18px' border='1px solid black' />
              <Layout flexBasis={20} flexShrink={0} />
              <Box width='713px' height='358px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
            </Row>
            <Layout flexBasis={39} />
            <Row>
              <Box borderRadius={50} height='18px' width='18px' border='1px solid black' />
              <Layout flexBasis={20} flexShrink={0} />
              <Box width='713px' height='358px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
            </Row>
          </Column>
          <Layout flexBasis={52} flexShrink={0} />
          <Column alignItems='center'>
            <Box height='67px' width='375px' border='1px solid black' />
            <Box width='461px' height='500px' border='1px solid black'>
              <Layout>photo</Layout>
            </Box>
            <Box height='61px' width='375px' border='1px solid black' />
          </Column>
        </Row>
        <Row justifyContent='center'>
          <Column alignItems='center'>
          <Layout flexBasis={10}/>
            <Box height='61px' width='375px' border='1px solid black' />
            <Box width='490px' height='500px' border='1px solid black'>
              <Layout>photo</Layout>
            </Box>
            <Box height='64px' width='375px' border='1px solid black' />
          </Column>
          <Layout flexBasis={138}/>
          <Column>
          <Layout flexBasis={60}/>
            <Row>
              <Box borderRadius={50} height='18px' width='18px' border='1px solid black' />
              <Layout flexBasis={20} flexShrink={0} />
              <Box width='632px' height='303px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
            </Row>
            <Layout flexBasis={18} />
            <Row>
              <Box borderRadius={50} height='18px' width='18px' border='1px solid black' />
              <Layout flexBasis={20} flexShrink={0} />
              <Box width='556px' height='367px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
            </Row>
            <Layout flexBasis={18} />
            <Row>
              <Box borderRadius={50} height='18px' width='18px' border='1px solid black' />
              <Layout flexBasis={20} flexShrink={0} />
              <Box width='625px' height='434px' border='1px solid black'>
                <Layout>
                  <Text>text</Text>
                </Layout>
              </Box>
            </Row>
            <Layout flexBasis={67}/>
          </Column>
        </Row>
      </Column>
    </Box>
  )
}

export { SkillsToLearn }
