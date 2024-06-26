import { TerminalScreen } from './terminal.enum'

export interface TerminalProps {
  amount: number
  disabled: boolean
  screen: TerminalScreen
  terminalStoreId?: string | null
}
