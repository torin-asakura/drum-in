import React               from 'react'
import { SetStateAction }  from 'react'
import { Dispatch }        from 'react'
import { FC }              from 'react'
import { memo }            from 'react'

import { Button }          from '@ui/button'
import { ArrowBottomIcon } from '@ui/icons'
import { Box }             from '@ui/layout'
import { Row }             from '@ui/layout'
import { Text }            from '@ui/text'
import { useHover }        from '@ui/utils'

export const DropdownListButton: FC<{
  title?: string | null
  setVisibleNav: Dispatch<SetStateAction<boolean>>
}> = memo(({ title, setVisibleNav }) => {
  const [hover, hoverProps] = useHover()

  return (
    <Box display={['none', 'none', 'flex']} flexShrink={0} width={83} {...hoverProps}>
      <Button
        size='withoutPaddingMicroHeight'
        variant='transparentBackground'
        iconSvg={<ArrowBottomIcon width={16} height={16} color={hover ? 'rgb(154,101,242)' : ''} />}
        horizontalLocation='left'
        onClick={() => setVisibleNav(true)}
        fill
      >
        <Row justifyContent='end'>
          <Text
            textTransform='uppercase'
            fontWeight='semiBold'
            fontSize='medium'
            lineHeight='default'
          >
            {title}
          </Text>
        </Row>
      </Button>
    </Box>
  )
})
