export type StudentsListType = Array<{
  __typename?: 'StudentsList'
  title?: string | null
  firstBadge?: string | null
  secondBadge?: string | null
} | null>

export type StudentDataListProps = {
  __typename?: 'Students'
  title?: string | null
  description?: string | null
  list?: StudentsListType | null
}
