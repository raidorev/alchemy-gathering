import { i18n } from '@/plugins/i18n'

import { EssenceName } from './essence'
import { FloraName } from './flora'

export enum InventoryItemType {
  Flora = 'Flora',
  Essence = 'Essence',
}

interface FloraItem {
  code: FloraName
  type: InventoryItemType.Flora
}

interface EssenceItem {
  code: EssenceName
  type: InventoryItemType.Essence
}

export type InventoryItem = (FloraItem | EssenceItem) & {
  baseDifficultyClass: number
}

export const inventory: InventoryItem[] = []
