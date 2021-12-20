import React          from 'react'
import { useIntl }    from 'react-intl'

import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import messages       from '../messages'

const MobileText = () => {
  const textMobileTop = [messages.instructor, messages.instructorName]
  const textMobileBottom = [
    messages.drum,
    messages.rythmMobile,
    messages.instructorAbout,
    messages.reviews,
  ]
  const phoneNumber = '+7-926-246-47-59'
  const intl = useIntl()
  return (
    <Layout
      justifyContent='center'
      width='300px'
      overflow='visible'
      style={{ zIndex: 1 }}
      flexShrink={0}
    >
      <Column width='100%' alignItems='center'>
        <Layout flexBasis={30} />
        {textMobileTop.map((item) => (
          <>
            <Layout>
              <Text
                whiteSpace='nowrap'
                color='dullBlack'
                fontSize='small'
                fontWeight='bold'
                lineHeight='semiNormal'
              >
                {intl.formatMessage(item)}
              </Text>
            </Layout>
            <Layout flexBasis={14} />
          </>
        ))}
        <Layout>
          <Text
            whiteSpace='nowrap'
            color='dullBlack'
            fontSize='small'
            fontWeight='bold'
            lineHeight='semiNormal'
          >
            {phoneNumber}
          </Text>
        </Layout>
        <Layout flexBasis={14} />
        <Layout width='80px' height='80px'>
          <ImageBlock />
        </Layout>
        <Layout flexBasis={14} />
        {textMobileBottom.map((item) => (
          <>
            <Layout>
              <Text
                whiteSpace='nowrap'
                color='dullBlack'
                fontSize='small'
                lineHeight='semiSmall'
                fontWeight='normal'
              >
                {intl.formatMessage(item)}
              </Text>
            </Layout>
            <Layout flexBasis={14} flexShrink={0} />
          </>
        ))}
      </Column>
    </Layout>
  )
}

export { MobileText }
