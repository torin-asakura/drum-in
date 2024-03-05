export interface SelectedCourseProps {
  title: string
  description: string
  price?: number
  recalculate?: (price: number, operation: boolean) => void
}
