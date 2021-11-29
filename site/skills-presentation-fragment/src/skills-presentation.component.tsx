import React      from 'react'
import { FC }     from 'react'

import { Box }    from '@ui/layout'
import { Row }    from '@ui/layout'
import { Column } from '@ui/layout'
import { Layout } from '@ui/layout'

const SkillsPresentation: FC = () => {
  return (
    <Box width='1440px' height='585px' border='1px solid black'>
      <Column width='100%'>
        <Layout flexBasis={65} />
        <Row>
          <Column>
            <Layout flexBasis={262} />
            <Box width='115px' height='60px' border='1px solid black' />
          </Column>
          <Layout flexBasis={45} flexShrink={0} />
          <Column justifyContent='center' width='100%'>
            <Row>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
            <Layout flexBasis={62} />
            <Row>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
            <Layout flexBasis={62} />
            <Row>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
          </Column>
          <Column justifyContent='center' width='100%'>
            <Row justifyContent='flex-end'>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
            <Layout flexBasis={62} />
            <Row justifyContent='flex-end'>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
            <Layout flexBasis={62} />
            <Row justifyContent='flex-end'>
              <Box width='68px' height='58px' border='1px solid black'>
                <Layout>img</Layout>
              </Box>
              <Layout flexBasis={36} />
              <Box width='320px' border='1px solid black'>
                <Layout>text</Layout>
              </Box>
            </Row>
          </Column>
          <Layout flexBasis={200} flexShrink={0} />
        </Row>
        <Layout flexBasis={68} />
        <Row justifyContent='center'>
          <Box width='68px' height='58px' border='1px solid black'>
            <Layout>img</Layout>
          </Box>
          <Layout flexBasis={36} />
          <Box width='320px' border='1px solid black'>
            <Layout>text</Layout>
          </Box>
        </Row>
      </Column>
    </Box>
  )
}

export { SkillsPresentation }
