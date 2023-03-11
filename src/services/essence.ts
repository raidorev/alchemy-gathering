import { InventoryItem, InventoryItemType } from './inventory'

export type EssenceName =
  | 'Earth'
  | 'Fire'
  | 'Air'
  | 'Water'
  | 'Ice'
  | 'Lightning'

export const essences: InventoryItem[] = [
  {
    code: 'Earth',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'Fire',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'Air',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'Water',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'Ice',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
  {
    code: 'Lightning',
    type: InventoryItemType.Essence,
    baseDifficultyClass: 10,
  },
]
