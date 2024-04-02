export type PrivacyPolicyDataProps = {
  __typename?: 'PrivacyPolicy'
  title?: string | null
  content?: Array<{
    __typename?: 'PrivacyPolicyContent'
    title?: string | null
    description?: string | null
  } | null> | null
} | null
