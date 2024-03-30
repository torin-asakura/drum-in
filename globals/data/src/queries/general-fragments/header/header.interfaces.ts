
export type MainCourseDataProps= {
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

export type IndividualCourseDataProps ={
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

export type HeaderDataProps = {
            ctaButton?: string | null
            logo?: { node: { sourceUrl?: string | null } } | null
            dropdownList?: {
              title?: string | null
              items?: {
                nodes: Array<
                  | MainCourseDataProps
                  | IndividualCourseDataProps
                >
              } | null
            } | null
            navigationElements?: Array<{
              title?: string | null
              path?: string | null
            } | null> | null
          } | null
