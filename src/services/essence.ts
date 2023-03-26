import { InventoryItem, InventoryItemType } from './inventory'

export type EssenceName =
  | 'earth'
  | 'fire'
  | 'air'
  | 'water'
  | 'ice'
  | 'lightning'

export const essences: InventoryItem[] = [
  {
    code: 'earth',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'fire',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'air',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'water',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'ice',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'lightning',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
]
