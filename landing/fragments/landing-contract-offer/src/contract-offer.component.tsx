import React                       from 'react'
import uniqid                      from 'uniqid'
import { FC }                      from 'react'

import { Box }                     from '@ui/layout'
import { Column }                  from '@ui/layout'
import { Layout }                  from '@ui/layout'
import { Row }                     from '@ui/layout'
import { Text }                    from '@ui/text'

import { ContractOfferBlockProps } from './contract-offer.interfaces'

const ContractOfferBlock: FC<ContractOfferBlockProps> = ({ contractOfferData }) => (
  <Row justifyContent='center'>
    <Box width='100%'>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[80, 100, 142]} flexShrink={0} />
        <Box width={[200, 250, 1000]}>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['regular', 'mild', 'big']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {contractOfferData?.title}
          </Text>
        </Box>
        <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
        <Box width={[250, 250, 1000]}>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'large']}
            lineHeight='primary'
            color='text.smokyWhite'
          >
            {contractOfferData?.subtitle}
          </Text>
        </Box>
        <Layout flexBasis={[20, 30, 50]} flexShrink={0} />
        <Column>
          {contractOfferData?.points?.map((item) => (
            <React.Fragment key={uniqid()}>
              <Row>
                <Text
                  fontWeight='medium'
                  fontSize={['semiMedium', 'regular', 'large']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {item?.title}
                </Text>
              </Row>
              <Layout flexBasis={[6, 8, 8]} flexShrink={0} />
              <Row display={item?.subtitle ? 'flex' : 'none'}>
                <Layout flexBasis={[6, 8, 10]} flexShrink={0} />
                <Text
                  opacity='80%'
                  fontWeight='medium'
                  fontSize={['semiMedium', 'regular', 'regular']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {item?.subtitle}
                </Text>
              </Row>
              <Layout flexBasis={[4, 6, 6]} flexShrink={0} />
              <Row>
                <Layout flexBasis={item?.subtitle ? [12, 16, 20] : 0} flexShrink={0} />
                <Text
                  opacity='60%'
                  fontWeight='medium'
                  fontSize={['micro', 'middling', 'semiRegular']}
                  lineHeight='primary'
                  color='text.smokyWhite'
                >
                  {item?.description}
                </Text>
              </Row>
              <Layout flexBasis={[7, 10, 30]} flexShrink={0} />
            </React.Fragment>
          ))}
        </Column>
        <Layout flexBasis={[32, 40, 150]} flexShrink={0} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
    <Row justifyContent='end'>
      <Column>
        <Layout flexBasis={[80, 100, 142]} flexShrink={0} />
        <Box>
          <Text
            fontWeight='medium'
            fontSize={['semiMedium', 'regular', 'large']}
            lineHeight='primary'
            color='text.smokyWhite'
          >
            {contractOfferData?.creationYear}
          </Text>
        </Box>
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Row>
  </Row>
)

export { ContractOfferBlock }
