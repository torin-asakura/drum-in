import { ArrowTopIcon }   from '@ui/icons'
import React              from 'react'
import { SetStateAction } from 'react'
import { Dispatch }       from 'react'
import { FC }             from 'react'
import { memo }           from 'react'

import { Button }          from '@ui/button'
import { ArrowBottomIcon } from '@ui/icons'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { useHover }        from '@ui/utils'

export const DrawerButton: FC<{
  title?: string | null
  visibleDrawer:boolean
  setVisibleDrawer: Dispatch<SetStateAction<boolean>>
}> = memo(({ title,visibleDrawer, setVisibleDrawer }) => {
  const [hover, hoverProps] = useHover()

  const icon = visibleDrawer?
    <ArrowTopIcon width={16} height={16} color='rgb(154,101,242)' /> :
    <ArrowBottomIcon width={16} height={16} color={hover ? 'rgb(154,101,242)' : ''} />


  return (
    <Box display={['none', 'none', 'flex']} flexShrink={0} width={83} {...hoverProps}>
      <Button
        size='withoutPaddingMicroHeight'
        variant='transparentBackground'
        iconSvg={icon}
        horizontalLocation='left'
        onClick={() => setVisibleDrawer(!visibleDrawer)}
        fill
      >
        <Row justifyContent='end'>
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='medium'
            lineHeight='default'
            color={visibleDrawer? 'rgb(154,101,242)':''}
          >
            {title}
          </Text>
        </Row>
      </Button>
    </Box>
  )
})
