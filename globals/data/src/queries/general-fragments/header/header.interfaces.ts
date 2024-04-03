export type MainCourseDataProps = {
  id: string
  title?: string | null
  content?: {
    path?: string | null
    price?: {
      priceMonthly?: number | null
      details?: {
        videoTrainingsNumber?: number | null
        monthsNumber?: number | null
        levelsNumber?: number | null
      } | null
    } | null
  } | null
}

export type IndividualCourseDataProps = {
  id: string
  title?: string | null
  individualCourseData?: {
    path?: string | null
    price?: {
      monthlyPrice?: number | null
      level?: number | null
      videoTrainingsNumber?: number | null
      liveTrainingsNumber?: string | null
      bonuses?: string | null
      courseLengthInMonths?: number | null
    } | null
  } | null
}

export type HeaderDataProps = {
  ctaButton?: string | null
  logo?: { node: { sourceUrl?: string | null } } | null
  dropdownList?: {
    title?: string | null
    items?: {
      nodes: Array<MainCourseDataProps | IndividualCourseDataProps>
    } | null
  } | null
  navigationElements?: Array<{
    title?: string | null
    path?: string | null
  } | null> | null
} | null
