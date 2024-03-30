export type PrivacyPolicyDataProps = {
  title?: string | null
  content?: Array<{
    title?: string | null
    description?: string | null
  } | null> | null
}
