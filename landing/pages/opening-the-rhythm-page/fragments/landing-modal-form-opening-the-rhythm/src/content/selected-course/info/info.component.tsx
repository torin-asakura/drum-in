import React                           from 'react'
import { FC }                          from 'react'
import { useState }                    from 'react'

import { InvertedExclamationMarkIcon } from '@ui/icons'
import { TriangleIcon }                from '@ui/icons'
import { Column }                      from '@ui/layout'
import { Layout }                      from '@ui/layout'
import { Box }                         from '@ui/layout'
import { Row }                         from '@ui/layout'
import { Text }                        from '@ui/text'
import { usePopover }                  from '@ui/utils'

import { MotionBox }                   from '../styles'
import { InfoProps }                   from './info.interfaces'

const Info: FC<InfoProps> = ({ description }) => {
  const { triggerProps, layerProps, isOpen, render } = usePopover('bottom-center', 20, 'hover')
  const [visible, setVisible] = useState<boolean>(false)

  return (
    <>
      <Box
        {...triggerProps}
        display={['none', 'none', 'flex']}
        flexShrink={0}
        zIndex={100}
        width={20}
        height={20}
        alignItems='center'
        justifyContent='center'
        borderRadius='micro'
        backgroundColor={isOpen ? 'background.smokyWhite' : 'background.transparentWhite'}
        style={{ transition: '0.2s', cursor: 'pointer' }}
      >
        <InvertedExclamationMarkIcon
          color={isOpen ? 'rgb(15,12,12)' : 'rgb(242,242,242)'}
          width={3}
          height={10}
        />
      </Box>
      {render(
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          zIndex={951}
          {...layerProps}
        >
          <Box
            width={335}
            position='relative'
            borderRadius='medium'
            backgroundColor='background.smokyWhite'
          >
            <Box position='absolute' top={-18} left={159}>
              <TriangleIcon width={27} height={30} />
            </Box>
            <Layout flexBasis={20} flexShrink={0} />
            <Column width='100%'>
              <Layout flexBasis={20} flexShrink={0} />
              <Row>
                <Text fontWeight='medium' fontSize='medium' lineHeight='medium' color='text.gray'>
                  {description}
                </Text>
              </Row>
              <Layout flexBasis={20} flexShrink={0} />
            </Column>
            <Layout flexBasis={20} flexShrink={0} />
          </Box>
        </MotionBox>
      )}
      <Layout flexBasis={[8, 16, 20]} flexShrink={0} />
      <Box
        display={['flex', 'flex', 'none']}
        flexShrink={0}
        width={16}
        height={16}
        alignItems='center'
        justifyContent='center'
        borderRadius='semiMicro'
        backgroundColor={visible ? 'background.smokyWhite' : 'background.transparentWhite'}
        onClick={() => {
          setVisible(true)
          setTimeout(() => {
            setVisible(false)
          }, 4000)
        }}
        style={{ transition: '0.2s' }}
      >
        <InvertedExclamationMarkIcon
          color={visible ? 'rgb(15,12,12)' : 'rgb(242,242,242)'}
          width={2}
          height={9}
        />
      </Box>
      <Box
        opacity={visible ? 1 : 0}
        zIndex={visible ? 10 : -1}
        width='100%'
        position='fixed'
        bottom={12}
        left={0}
        style={{ transition: '0.3s' }}
      >
        <Layout flexBasis={[12, 24, 0]} flexShrink={0} />
        <Box
          width='100%'
          borderRadius='medium'
          backgroundColor='background.smokyWhite'
          boxShadow=''
        >
          <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
          <Column width='100%'>
            <Layout flexBasis={[16, 20, 0]} flexShrink={0} />
            <Row>
              <Box
                flexShrink={0}
                width={16}
                height={16}
                alignItems='center'
                justifyContent='center'
                borderRadius='semiMicro'
                backgroundColor='background.blackAmber'
              >
                <InvertedExclamationMarkIcon color='rgb(242,242,242)' width={2} height={9} />
              </Box>
              <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
              <Box>
                <Text
                  fontWeight='medium'
                  fontSize={['micro', 'semiMedium', 'medium']}
                  lineHeight={['primary', 'primary', 'medium']}
                  color='text.gray'
                >
                  {description}
                </Text>
              </Box>
            </Row>
            <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
          </Column>
          <Layout flexBasis={[12, 16, 0]} flexShrink={0} />
        </Box>
        <Layout flexBasis={[12, 24, 0]} flexShrink={0} />
      </Box>
    </>
  )
}

export { Info }
