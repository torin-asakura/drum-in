import { useState } from 'react'

const useHover = () => {
  const [hover, setHover] = useState<boolean>(false)

  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
  }

  return [hover, hoverProps]
}

export { useHover }
