import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Text }   from '@ui/text'
import { Button } from '@ui/button'

const IndividualLessons: FC = () => {
  return (
    <Box width={['320px','320px','1440px']} height={['290px','290px','581px']} border='1px solid black'>
      <Row justifyContent='center' display={['none','none','flex']}>
        <Layout flexBasis={138} flexShrink={0} />
        <Column width='100%'>
          <Layout flexBasis={60} />
          <Box width='570px' height='105px' border='1px solid black'>
            <Layout>
              <Text>individual lessons</Text>
            </Layout>
          </Box>
          <Layout />
          <Layout flexBasis={20} />
          <Box width='570px' height='313px' border='1px solid black'>
            <Layout>
              <Text>individual lessons description</Text>
            </Layout>
          </Box>
          <Layout flexBasis={20} />
          <Layout>
            <Button width='426px' height='70px' border='1px solid black'>
              <Layout>
                <Text>sign up</Text>
              </Layout>
            </Button>
          </Layout>
          <Layout flexBasis={60} />
        </Column>
        <Layout flexBasis={120} flexShrink={0} />
        <Column>
          <Layout flexBasis={60} />
          <Box width='538px' height='500px' border='1px solid black'>
            <Layout>video</Layout>
          </Box>
          <Layout flexBasis={20} />
        </Column>
        <Layout flexBasis={77} />
      </Row>
      <Column width='100%' alignItems='center' display={['flex','flex','none']}>
        <Box border='1px solid black' width='320px' height='290px'>
        <Layout flexBasis={20} flexSHrink={0}/>
          <Column width='100%'>
          <Layout flexBasis={25} flexSHrink={0}/>
            <Box border='1px solid black' >
              <Layout>
                <Text>
                    header
                </Text>
              </Layout>
            </Box>
            <Layout flexBasis={30} flexShrink={0}/>
            <Box border='1px solid black' >
              <Layout>
                <Text>
                    main text
                </Text>
              </Layout>
            </Box>
            <Layout flexBasis={180} flexShrink={0}/>
            <Row justifyContent='center' display={['flex', 'flex', 'none']}>
              <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
              <Layout width='26px' height='6px'>
                <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
                <Layout flexBasis={10} flexShrink={0} />
                <Box width='3px' height='3px' border='1px solid black' borderRadius={50} />
              </Layout>
              <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
            </Row>
          <Layout flexBasis={25} flexSHrink={0}/>
          </Column>
          <Layout flexBasis={20} flexSHrink={0}/>
          </Box>
          <Layout flexBasis={55} flexShrink={0}/>
          <Layout>
            <Button width='237px' height='41px' border='1px solid black'>
              <Layout>
                <Text>
                  Buy
                </Text>
              </Layout>
            </Button>
          </Layout>
      </Column>
    </Box>
  )
}

export { IndividualLessons }
