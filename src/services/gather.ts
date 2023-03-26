import { InventoryItem } from '@/services/inventory'
import { Terrain } from '@/services/terrain'

export enum GatheringVariant {
  Flora,
  Essence,
  RareFlora,
  RareFloraDifferentTerrain,
}

export interface IGatherAttempt {
  key: string
  terrain: Terrain
  roll: number
  items: InventoryItem[]
}
