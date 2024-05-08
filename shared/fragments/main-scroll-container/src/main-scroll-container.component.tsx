import React                            from 'react'
import { FC }                           from 'react'

import { MAIN_SCROLL_CONTAINER_STYLES } from './main-scroll-container.constants'
import { MainScrollContainerProps }     from './main-scroll-container.interfaces'

export const MainScrollContainer: FC<MainScrollContainerProps> = ({ containerRef, children }) => (
  <main style={MAIN_SCROLL_CONTAINER_STYLES} ref={containerRef} data-scroll-container>
    {children}
  </main>
)
