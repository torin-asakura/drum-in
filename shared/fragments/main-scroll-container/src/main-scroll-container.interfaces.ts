import { PropsWithChildren } from 'react'
import { MutableRefObject }  from 'react'

export interface MainScrollContainerProps extends PropsWithChildren {
  containerRef: MutableRefObject<null>
}
