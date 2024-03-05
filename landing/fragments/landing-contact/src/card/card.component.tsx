import React         from 'react'
import { FC }        from 'react'

import { Box }       from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Link }      from '@ui/link'
import { Text }      from '@ui/text'

import { CardProps } from './card.interfaces'

const Card: FC<CardProps> = ({ title, link, domainName, href }) => (
  <Link href={href} target='_blank'>
    <Box
      width={['100%', 450, 352]}
      height={[127, 160, 300]}
      border={['normalSmokyWhite', 'normalSmokyWhite', 'mediumBoldSmokyWhite']}
      borderRadius={['medium', 'big', 'bigger']}
      backgroundColor='background.blackAmber'
      alignSelf={['start', 'start', 'end']}
      flexShrink={0}
    >
      <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
      <Column width='100%'>
        <Layout flexBasis={[20, 26, 32]} />
        <Row>
          <Text
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={['medium', 'large', 'moderate']}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {title}
          </Text>
        </Row>
        <Layout flexGrow={2} />
        <Box
          width='100%'
          flexDirection={['row', 'row', 'column']}
          justifyContent={['end', 'end', 'start']}
        >
          {domainName ? (
            <Box>
              <Text
                textTransform='lowercase'
                fontWeight='medium'
                fontSize={['large', 'small', 'mild']}
                lineHeight='extra'
                color='text.smokyWhite'
              >
                {domainName}
              </Text>
            </Box>
          ) : null}
          <Box>
            <Text
              textTransform='lowercase'
              fontWeight='medium'
              fontSize={['large', 'small', 'mild']}
              lineHeight='extra'
              color='text.smokyWhite'
            >
              {link}
            </Text>
          </Box>
        </Box>
        <Layout flexBasis={[20, 26, 32]} />
      </Column>
      <Layout flexBasis={[20, 26, 32]} flexShrink={0} />
    </Box>
  </Link>
)
export { Card }
