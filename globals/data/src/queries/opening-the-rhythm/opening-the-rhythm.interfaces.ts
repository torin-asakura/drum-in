export type OpeningTheRhythmDataProps = {
  course?: {
    content?: {
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
      background?: {
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
      } | null
    } | null
  } | null
}
