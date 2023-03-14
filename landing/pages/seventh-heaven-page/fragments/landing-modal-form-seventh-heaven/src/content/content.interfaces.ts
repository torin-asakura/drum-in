export interface ContentProps {
  onClose?: () => any
  roleVar: Array<string>
  options: Array<{
    value: string
    mutuallyExclusive: boolean
  }>
  setRole: (value: Array<string>) => any
}
