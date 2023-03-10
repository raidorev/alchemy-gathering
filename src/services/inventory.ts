import { EssenceName } from './essence'
import { FloraName } from './flora'

export interface InventoryItem {
  code: FloraName | EssenceName
  baseDifficultyClass: number
}

export const inventory: InventoryItem[] = []
