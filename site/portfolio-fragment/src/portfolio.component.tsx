import React                 from 'react'
import { FC }                from 'react'

import { extractUrl }        from '@globals/data'
import { Box }               from '@ui/layout'
import { Column }            from '@ui/layout'
import { Layout }            from '@ui/layout'
import { Row }               from '@ui/layout'
import { ImageBlock }        from '@ui/image'
import { Line }              from '@ui/line'

import { GenreList }         from './genre-list'
import { ContainerRelative } from './container-relative'
import { usePortfolio }      from './data'

const Portfolio: FC = () => {
  const portfolio = usePortfolio()

  return (
    <Box width='100%' height='1100px' display={['none', 'none', 'flex']} justifyContent='center'>
      <Layout width='1440px'>
        <Column width='100%'>
          <Row justifyContent='space-between'>
            <Layout flexBasis={65} flexShrink={0} />
            <Column alignItems='center'>
              <Layout flexBasis={70} />
              <Layout width='500px' flexBasis={60} justifyContent='center'>
                <ContainerRelative width='375px' height='60px'>
                  <Line height='60px' />
                </ContainerRelative>
              </Layout>
              <Layout width='505px' height='392px'>
                <ImageBlock
                  src={extractUrl(portfolio?.addons.picture)}
                  alt={portfolio?.addons.picture.altText}
                />
              </Layout>
              <Layout width='500px' flexBasis={60} justifyContent='center'>
                <ContainerRelative width='375px' height='60px'>
                  <Line height='60px' />
                </ContainerRelative>
              </Layout>
              <Layout width='505px' height='392px'>
                <ImageBlock
                  src={extractUrl(portfolio?.additionalImage.image)}
                  alt={portfolio?.additionalImage.altText}
                />
              </Layout>
              <Layout width='500px' flexBasis={60} justifyContent='center'>
                <ContainerRelative width='375px' height='60px'>
                  <Line height='60px' />
                </ContainerRelative>
              </Layout>
            </Column>
            <Layout flexBasis={160} flexShrink={0} />
            <Column>
              <Layout flexBasis='126px' />
              <Layout>
                <GenreList content={portfolio?.content} />
              </Layout>
              <Layout flexBasis={82} />
            </Column>
            <Layout flexBasis={143} flexShrink={0} />
          </Row>
          <Layout flexBasis={60} />
        </Column>
      </Layout>
    </Box>
  )
}
export { Portfolio }
