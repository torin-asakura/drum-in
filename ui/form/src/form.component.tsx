import React         from 'react'
import { useState }  from 'react'
import { useRef }    from 'react'
import { useEffect } from 'react'
import { useIntl }   from 'react-intl'
import Modal         from 'react-modal'
import axios         from 'axios'

import { Box }       from '@ui/layout'
import { Layout }    from '@ui/layout'
import { Row }       from '@ui/layout'
import { Column }    from '@ui/layout'
import { Text }      from '@ui/text'
import { Input }     from '@ui/input'
import { Button }    from '@ui/button'

import messages      from './messages'
import { TOKEN }     from './form.constants'
import { CHAT_LIST } from './form.constants'

const Form = ({ children }) => {
  const intl = useIntl()
  const [opened, setOpened] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const ref = useRef(null)

  const open = () => setOpened(true)
  const close = () => setOpened(false)
  const sendMessage = () => {
    if (name && phone) {
      for (const chat of CHAT_LIST) {
        axios.get(
          'https://api.telegram.org/bot' +
            TOKEN +
            '/sendMessage?chat_id=' +
            chat +
            '&text=' +
            encodeURI(`Имя: ${name}\nТелефон: ${phone}`)
        )
      }
    }
  }

  useEffect(() => {
    const handler = (event) => {
      if (opened && event.target.contains(ref?.current)) {
        close()
      }
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [opened])

  const styles = {
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      border: 'none',
      padding: 15,
      margin: 0,
      inset: 0,
    },
    overlay: {
      zIndex: 9999,
      backgroundColor: 'rgba(0,0,0,0.7)',
      padding: 0,
      margin: 0,
    },
  }

  return (
    <>
      <Modal isOpen={opened} onRequestClose={close} style={styles}>
        <Box
          ref={ref}
          width={['100%', '100%', '611px']}
          height={['auto', 'auto', '461px']}
          backgroundColor='softBlack'
        >
          <Layout flexBasis={[10, 10, 92]} />
          <Column width='100%'>
            <Layout flexBasis={[30, 30, 64]} />
            <Row>
              <Row display={['none', 'none', 'flex']}>
                <Input
                  value={name}
                  onChange={setName}
                  placeholder={intl.formatMessage(messages.yourName)}
                />
              </Row>
              <Row display={['flex', 'flex', 'none']}>
                <Input
                  size='small'
                  value={name}
                  onChange={setName}
                  placeholder={intl.formatMessage(messages.yourName)}
                />
              </Row>
            </Row>
            <Layout flexBasis={[30, 30, 64]} />
            <Row>
              <Row display={['none', 'none', 'flex']}>
                <Input
                  value={phone}
                  onChange={setPhone}
                  placeholder={intl.formatMessage(messages.yourName)}
                />
              </Row>
              <Row display={['flex', 'flex', 'none']}>
                <Input
                  size='small'
                  value={phone}
                  onChange={setPhone}
                  placeholder={intl.formatMessage(messages.yourName)}
                />
              </Row>
            </Row>
            <Layout flexBasis={[30, 30, 64]} />
            <Row>
              <Row display={['none', 'none', 'flex']}>
                <Button size='big' width='100%' onClick={sendMessage}>
                  <Layout>
                    <Text fontWeight='normal' fontSize='huge' lineHeight='big'>
                      {intl.formatMessage(messages.signUp)}
                    </Text>
                  </Layout>
                </Button>
              </Row>
              <Row display={['flex', 'flex', 'none']}>
                <Button size='normal' width='100%' onClick={sendMessage}>
                  <Layout>
                    <Text fontWeight='normal' fontSize='normal' lineHeight='big'>
                      {intl.formatMessage(messages.signUp)}
                    </Text>
                  </Layout>
                </Button>
              </Row>
            </Row>
            <Layout flexBasis={[30, 30, 64]} />
          </Column>
          <Layout flexBasis={[10, 10, 92]} />
        </Box>
      </Modal>
      {children(open)}
    </>
  )
}

export { Form }
