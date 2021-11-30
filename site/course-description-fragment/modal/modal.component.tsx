import React          from 'react'
import { FC }         from 'react'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { Input }      from '@ui/input'
import { Button }     from '@ui/button'
import { ModalProps } from './modal.interface'

const Modal: FC<ModalProps> = ({ show }) => (
  <Box display={show} width='611px' height='461px' border='1px solid black'>
    <Layout flexBasis={92} />
    <Column>
      <Layout flexBasis={64} />
      <Layout>
        <Input />
      </Layout>
      <Layout flexBasis={64} />
      <Layout>
        <Input />
      </Layout>
      <Layout flexBasis={64} />
      <Button border='1px solid black' width='426px' height='70px'>
        <Layout>
          <Text>sign up</Text>
        </Layout>
      </Button>
      <Layout flexBasis={64} />
    </Column>
    <Layout flexBasis={92} />
  </Box>
)

export { Modal }
