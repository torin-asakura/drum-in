export interface HeaderDataProps {
  headerData: {
    generalFragments?: {
      nodes: Array<{
        commonFragments?: {
          header?: {
            ctaButton?: string | null
            logo?: { node: { sourceUrl?: string | null } } | null
            dropdownList?: {
              title?: string | null
              items?: {
                nodes: Array<
                  | {
                      title?: string | null
                      id: string
                      content?: {
                        path?: string | null
                        price?: {
                          details?: {
                            levelsNumber?: number | null
                            monthsNumber?: number | null
                            videoTrainingsNumber?: number | null
                          } | null
                        } | null
                      } | null
                    }
                  | { id: string }
                  | {
                      title?: string | null
                      id: string
                      individualCourseData?: {
                        path?: string | null
                        price?: {
                          level?: number | null
                          bonuses?: string | null
                          liveTrainingsNumber?: string | null
                          videoTrainingsNumber?: number | null
                          courseLengthInMonths?: number | null
                        } | null
                      } | null
                    }
                >
              } | null
            } | null
            navigationElements?: Array<{
              title?: string | null
              path?: string | null
            } | null> | null
          } | null
        } | null
      }>
    } | null
  }
}
