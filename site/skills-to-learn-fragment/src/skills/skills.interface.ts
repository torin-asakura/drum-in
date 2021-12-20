/* TODO strict type */
interface Item {
  header: string
  content: string[]
}
export interface SkillsProps {
  items: { texts: Item[] }
}
