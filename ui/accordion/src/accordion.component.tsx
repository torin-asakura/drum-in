import React                from 'react'
import { FC }               from 'react'
import { useAnimation }     from 'framer-motion'
import { useState }         from 'react'

import { Condition }        from '@ui/condition'
import { Drawer }           from '@ui/drawer'
import { ArrowBottomIcon }  from '@ui/icons'
import { Row }              from '@ui/layout'
import { Box }              from '@ui/layout'
import { Column }           from '@ui/layout'
import { Layout }           from '@ui/layout'
import { Text }             from '@ui/text'

import { AccordionProps }   from './accordion.interface'
import { ContentContainer } from './content-container'
import { TriggerContainer } from './trigger-container'

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const controls = useAnimation()

  if (active) {
    controls.start({ height: 'min-content' })
  }

  if (!active) {
    controls.start({ height: 0, overflow: 'hidden' })
  }

  return (
    <>
      <Drawer active={visible} onClose={() => setVisible(false)} />
      <Box
        width='100%'
        backgroundColor='background.smokyWhite'
        borderRadius={['medium', 'big', 'big']}
      >
        <Layout flexBasis={[16, 21, 0]} flexShrink={0} />
        <Column width='100%'>
          <Condition match>
            <TriggerContainer onClick={() => setActive(!active)}>
              <Column width='100%'>
                <Layout flexBasis={[13, 18, 0]} />
                <Row>
                  <Box>
                    <Text
                      fontSize={['medium', 'regular', 'regular']}
                      lineHeight='medium'
                      color='text.blackAmber'
                    >
                      {title}
                    </Text>
                  </Box>
                  <Layout flexBasis={[12, 15, 0]} flexShrink={0} flexGrow={3} />
                  <Box>
                    <ArrowBottomIcon color='rgb(15,12,12)' width={24} height={24} />
                  </Box>
                </Row>
                <Layout flexBasis={[13, 18, 0]} />
              </Column>
            </TriggerContainer>
            <ContentContainer animate={controls} transition={{ duration: 0.2 }}>
              <Column width='100%'>
                <Layout flexBasis={[9, 14, 0]} flexShrink={0} />
                <Row>
                  <Text
                    fontSize={['micro', 'medium', 'medium']}
                    color='text.blackAmber'
                    lineHeight='primary'
                  >
                    {content}
                  </Text>
                </Row>
                <Layout flexBasis={[12, 17, 0]} flexShrink={0} />
              </Column>
            </ContentContainer>
          </Condition>
        </Column>
        <Layout flexBasis={[16, 21, 0]} flexShrink={0} />
      </Box>
    </>
  )
}

export { Accordion }
