import React      from 'react'

import { Box }    from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Text }   from '@ui/layout'

const Header = () => {
  return (
    <Box width={['320px', '320px', '1440px']} height='285px' border='1px solid black'>
      <Row>
        <Layout flexBasis={20} />
        <Layout> {/* Logo */} </Layout>
        <Layout flexBasis={22} />
        <Column>
          <Layout flexBasis={66} />
          <Layout>
            <Text> {/* барабанный инструктор */}  </Text>
          </Layout>
          <Layout flexBasis={20} />
          <Layout>
            <Text>{/*  чуприкова марина */}</Text>
          </Layout>
          <Layout flexBasis={35} />
          <Layout>
            <Text>{/*  написать в whatsapp */}</Text>
          </Layout>
          <Layout flexBasis={35} />
          <Box  border='1px solid black'>
            <Row>
              <Layout flexBasis={11} />
              <Layout>
                <Text>{/*  открытие ритма */}</Text>
              </Layout>
              <Layout flexBasis={30} />
              <Layout>
                <Text>
                  {/* ударная установка */}
                </Text>
              </Layout>
              <Layout flexBasis={30}/>
              <Layout>
                <Text>
                  {/* о преподавателе */}
                </Text>
              </Layout>
              <Layout flexBasis={30}/>
              <Layout>
                <Text>
                  {/* отзывы */}
                </Text>
              </Layout>
              <Layout flrxBasis={11}/>
            </Row>
          </Box>
        </Column>
        <Box  border='1px solid black'>
          <Row>
            <Layout flexBasis={71}/>
            <Layout>
               {/* facebook */}
            </Layout>
            <Layout flexBasis={52}/>
            <Layout>
              {/* inst */}
            </Layout>
            <Layout flexBasis={52}/>
            <Layout>
              {/* whatsapp */}
            </Layout>
            <Layout flexBasis={52}/>
            <Layout>
              {/* vk */}
            </Layout>
            <Layout flexBasis={78}/>
          </Row>
        </Box>
      </Row>
    </Box>
  )
}

export { Header }
