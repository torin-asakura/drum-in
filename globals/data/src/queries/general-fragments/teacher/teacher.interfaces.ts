export type GalleryDataProps = Array<{
                                      alt?: string | null
                                      image?: {
                                                node: {
                                                        sourceUrl?: string | null
                                                      } | null
                                              } | null
                                    } | null>

export type TeacherDataProps = {

            subtitle?: string | null
            title?: string | null
            description?: string | null
            experience?: Array<{
              number?: number | null
              text?: string | null
            } | null> | null
            education?: {
              title?: string | null
              list?: Array<{
                element?: string | null
              } | null> | null
            } | null
            gallery?: GalleryDataProps | null
          } | null
