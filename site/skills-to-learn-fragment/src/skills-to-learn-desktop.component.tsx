import React      from 'react'

import { Box }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'
import { Row }    from '@ui/layout'
import { Text }   from '@ui/text'

const SkillsToLearnDesktop = () => (
  <Row justifyContent='flex-end' display={['none', 'none', 'flex']}>
    <Layout flexBasis={50} flexShrink={0} />
    <Column alignItems='center' display={['none', 'none', 'flex']} width='100%'>
      <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout flexBasis={[100, 100, 15]} flexShrink={0} />
        <Box
          borderRadius={50}
          height={['11px', '11px', '18px']}
          width={['11px', '11px', '18px']}
          border='1px solid black'
        />
        <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
        <Box
          width={['280px', '280px', '670px']}
          height={['472px', '472px', '358px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} />
      </Row>
      <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout flexBasis={15} flexShrink={0} />
        <Box
          borderRadius={50}
          height={['11px', '11px', '18px']}
          width={['11px', '11px', '18px']}
          border='1px solid black'
        />
        <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
        <Box
          width={['280px', '280px', '670px']}
          height={['472px', '472px', '358px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
      </Row>
      <Layout flexBasis={50} flexShrink={0} />
      <Box height='67px' width='375px' border='1px solid black' />
      <Box width='461px' height='500px' border='1px solid black'>
        <Layout>photo</Layout>
      </Box>
      <Box height='61px' width='375px' border='1px solid black' />
    </Column>
    <Layout flexBasis={52} flexShrink={0} />
    <Column alignItems='center' display={['none', 'none', 'flex']} width='100%'>
      <Box height='67px' width='375px' border='1px solid black' />
      <Box width='461px' height='500px' border='1px solid black'>
        <Layout>photo</Layout>
      </Box>

      <Box height='61px' width='375px' border='1px solid black' />
      <Layout flexBasis={[11, 11, 275]} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Box
          borderRadius={50}
          height={['11px', '11px', '18px']}
          width={['11px', '11px', '18px']}
          border='1px solid black'
        />
        <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
        <Box
          width={['280px', '280px', '670px']}
          height={['472px', '472px', '358px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
      </Row>
      <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Box
          borderRadius={50}
          height={['11px', '11px', '18px']}
          width={['11px', '11px', '18px']}
          border='1px solid black'
        />
        <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
        <Box
          width={['280px', '280px', '670px']}
          height={['472px', '472px', '358px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
      </Row>
      <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
      <Row justifyContent='center'>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
        <Box
          borderRadius={50}
          height={['11px', '11px', '18px']}
          width={['11px', '11px', '18px']}
          border='1px solid black'
        />
        <Layout flexBasis={[11, 11, 20]} flexShrink={0} />
        <Box
          width={['280px', '280px', '670px']}
          height={['472px', '472px', '358px']}
          border='1px solid black'
        >
          <Layout>
            <Text>text</Text>
          </Layout>
        </Box>
        <Layout flexBasis={15} flexShrink={0} display={['flex', 'flex', 'none']} />
      </Row>
    </Column>
  </Row>
)

export { SkillsToLearnDesktop }
