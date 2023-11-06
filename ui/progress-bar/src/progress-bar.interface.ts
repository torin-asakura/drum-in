export interface ProgressBarProps {
  scrollId: string
}

type PositionKey = 'x' | 'y'

export type Position = Record<PositionKey, number>
