import { InventoryItem } from './inventory'

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
    baseDifficultyClass: 10,
  },
  {
    code: 'Fire',
    baseDifficultyClass: 10,
  },
  {
    code: 'Air',
    baseDifficultyClass: 10,
  },
  {
    code: 'Water',
    baseDifficultyClass: 10,
  },
  {
    code: 'Ice',
    baseDifficultyClass: 10,
  },
  {
    code: 'Lightning',
    baseDifficultyClass: 10,
  },
]
