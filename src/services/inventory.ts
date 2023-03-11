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

export const getInventoryItemName = (item: InventoryItem) => {
  // TODO: Fix types
  const { t } = i18n.global as unknown as { t: (key: string) => string }

  if (item.type === InventoryItemType.Flora) {
    return t(`flora["${item.code}"]`)
  }

  if (item.type === InventoryItemType.Essence) {
    return t(`essence["${item.code}"]`)
  }

  throw new Error('Unknown item type')
}
