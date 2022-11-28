import styled                  from '@emotion/styled'
import { ConditionalRender }   from '@atls-ui-parts/conditional-render'

import React                   from 'react'
import { FC }                  from 'react'
import { useMemo }             from 'react'

import { Box }                 from '@ui/layout'

import { IconAttachmentProps } from './icon-attachment.interface'

const IconAttachment: FC<IconAttachmentProps> = ({
  iconSvg,
  valueRadius,
  valueWidth,
  valueHeight,
  valueBackground,
}) => {
  const Attachment = useMemo(() => styled(ConditionalRender())(), [])

  return iconSvg !== undefined ? (
    <Attachment>
      <Box
        width={valueWidth}
        height={valueHeight}
        justifyContent='center'
        alignItems='center'
        borderRadius={valueRadius || 0}
        backgroundColor={valueBackground || 'transparent'}
      >
        {iconSvg}
      </Box>
    </Attachment>
  ) : null
}

export { IconAttachment }
