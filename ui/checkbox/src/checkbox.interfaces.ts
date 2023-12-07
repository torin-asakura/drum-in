import React from 'react'

export interface CheckboxProps {
  checked: boolean
  onCheck?: (newState: boolean) => any
  fill?: boolean
  children: React.ReactNode
}
