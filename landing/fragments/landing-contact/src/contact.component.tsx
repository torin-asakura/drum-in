import React                   from 'react'
import uniqid                  from 'uniqid'
import { FC }                  from 'react'

import { ArrowLeftBottomIcon } from '@ui/icons'
import { ArrowTopRightIcon }   from '@ui/icons'
import { Box }                 from '@ui/layout'
import { Column }              from '@ui/layout'
import { Layout }              from '@ui/layout'
import { Row }                 from '@ui/layout'
import { Text }                from '@ui/text'

import { Card }                from './card'
import { ContactBlockProps }   from './contact.interfaces'

const ContactBlock: FC<ContactBlockProps> = ({ contactsData }) => (
  <Row justifyContent='center'>
    <Box width={['100%', '100%', 1920]}>
      <Layout flexBasis={[20, 30, 40]} />
      <Column width='100%'>
        <Layout flexBasis={[124, 140, 240]} />
        <Box>
          <Text
            textTransform='uppercase'
            fontFamily='secondary'
            fontWeight='bold'
            fontSize={{ _: 'moderate', tablet: 'huge', laptop: 'gigantic', wide: 'biggest' }}
            lineHeight='default'
            color='text.smokyWhite'
          >
            {contactsData?.title}
          </Text>
        </Box>
        <Layout display={['none', 'none', 'flex']} flexBasis={104} />
        <Box
          width='100%'
          flexDirection={['column', 'column', 'row']}
          height={['auto', 'auto', 370]}
        >
          <Layout display={['none', 'none', 'flex']} flexGrow={2} />
          <Box display={{ _: 'none', tablet: 'none', laptop: 'none', wide: 'flex' }}>
            <ArrowTopRightIcon width={150} height={143} />
          </Box>
          <Layout display={['none', 'none', 'flex']} flexGrow={2} />
          <Box display={['flex', 'none', 'none']} alignSelf='end'>
            <ArrowLeftBottomIcon width={70} height={50} />
          </Box>
          <Layout display={['flex', 'flex', 'none']} flexBasis={[25, 40, 0]} />
          {contactsData?.socials?.map((item) => (
            <React.Fragment key={uniqid()}>
              <Card
                title={item?.title || ''}
                link={item?.link || ''}
                content={item?.content || ''}
              />
              <Layout flexBasis={[12, 24,40, 118]} />
            </React.Fragment>
          ))}
        </Box>
        <Layout flexBasis={[24, 56, 89]} />
      </Column>
      <Layout flexBasis={[20, 30, 40]} flexShrink={0} />
    </Box>
  </Row>
)

export { ContactBlock }
