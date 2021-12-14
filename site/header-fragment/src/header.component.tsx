import React          from 'react'
import { FC }         from 'react'
import { useIntl }    from 'react-intl'

import { Box }        from '@ui/layout'
import { Layout }     from '@ui/layout'
import { Row }        from '@ui/layout'
import { Column }     from '@ui/layout'
import { Text }       from '@ui/text'
import { ImageBlock } from '@ui/image'

import { Navigation } from './navigation'
import messages       from './messages'

const Header: FC = () => {
  const intl = useIntl()
  return (
    <Box
      width={['320px', '320px', '100%']}
      height={['355px', '355px', '285px']}
    >
      
    </Box>
  )
}

export { Header }
