export type StepData = {
  __typename?: string
  description?: string | null
  title?: string | null
} | null

export interface StepsInformationProps {
  stepsData?: StepData[] | null
}
