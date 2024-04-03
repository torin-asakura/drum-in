export type OpeningTheRhythmBackgroundProps = {
  desktop?: {
    hero?: { node: { sourceUrl?: string | null } } | null
    teacher?: { node: { sourceUrl?: string | null } } | null
    footer?: { node: { sourceUrl?: string | null } } | null
  } | null
  mobile?: {
    hero?: { node: { sourceUrl?: string | null } } | null
    teacher?: { node: { sourceUrl?: string | null } } | null
    footer?: { node: { sourceUrl?: string | null } } | null
  } | null
}

export type OpeningTheRhythmDataProps = {
  payment?: {
    title?: string | null
    benefit?: string | null
    courses?: {
      nodes: Array<{
        title?: string | null
        id: string
        individualCourseData?: {
          aboutCourse?:string|null
          price?: {
            fullPrice?: number | null
            courseLengthInMonths?: number | null
          } | null
        } | null
      }>
    } | null
  } | null
  hero?: {
    title?: string | null
    description?: string | null
    runningLine?: string | null
    cta?: {
      title?: string | null
      tagsCloud?: Array<{ tag?: string | null } | null> | null
    } | null
  } | null
  cta?: { title?: string | null; subtitle?: string | null } | null
  details?: {
    title?: string | null
    description?: string | null
    levels?: Array<{
      target?: string | null
      tooltip?: string | null
      level?: string | null
      content?: string | null
      lengthOfCourseInMonths?: number | null
      liveTrainingsNumber?: number | null
      videoTrainingsNumber?: number | null
    } | null> | null
  } | null
  price?: {
    title?: string | null
    priceMonthly?: number | null
    priceFull?: number | null
    discount?: number | null
    details?: {
      videoTrainingsNumber?: number | null
      levelsNumber?: number | null
      monthsNumber?: number | null
    } | null
  } | null
  background?: OpeningTheRhythmBackgroundProps | null
} | null
