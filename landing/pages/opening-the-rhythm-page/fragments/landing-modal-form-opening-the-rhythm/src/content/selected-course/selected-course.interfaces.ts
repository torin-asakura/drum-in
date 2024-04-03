export interface SelectedCourseProps {
  title: string
  description: string
  price?: number
  recalculateAmount: (price: number, operation: boolean) => void
  months?: number | null
  recalculateMonths?: (months: number, operation: boolean) => void
}
