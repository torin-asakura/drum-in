type Cb = () => any

export interface OptionProps {
  onSelect: (value: Array<string>) => any
  value: string
  label?: string
  mutuallyExclusive?: boolean
  onUpdate?: (active: Array<string>, push: Cb, remove: Cb) => any
}
