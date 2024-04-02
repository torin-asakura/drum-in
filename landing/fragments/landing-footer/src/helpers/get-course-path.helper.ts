import { ElementDataProps } from '@globals/data'

export const getCoursePath = (element: ElementDataProps): string => {
  if ('individualCourseData' in element) {
    return element?.individualCourseData?.path || '/'
  }
  if ('content' in element) {
    return element?.content?.path || '/'
  }
  return '/'
}
