import { gql } from '../../__generated__'

export const GET_CTA = gql(`
query CtaFillForm{
 generalFragments {
    nodes {
      commonFragments {
        cta {
          title
          text{
            beforeAccent
            accent
            afterAccent
          }
          button
        }
      }
    }
  }
}
`)