import { TerminalScreen } from './terminal.enum'

export interface TerminalProps {
  amount: number
  privacyPolicy: boolean
  screen: TerminalScreen
  terminalStoreId?: string | null
}
