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

export function getInventoryItemName(
  code: InventoryItem['code'],
  type: InventoryItem['type'],
): string
export function getInventoryItemName(item: InventoryItem): string
export function getInventoryItemName(
  itemOrCode: InventoryItem | InventoryItem['code'],
  type?: InventoryItem['type'],
): string {
  function isInventoryItem(
    itemOrCode: InventoryItem | InventoryItem['code'],
  ): itemOrCode is InventoryItem {
    return (itemOrCode as InventoryItem).code !== undefined
  }

  if (isInventoryItem(itemOrCode)) {
    return getInventoryItemName(itemOrCode.code, itemOrCode.type)
  }

  const code = itemOrCode

  // TODO: Fix types
  const { t } = i18n.global as unknown as { t: (key: string) => string }

  if (type === InventoryItemType.Flora) {
    return t(`floras.${code}`)
  }

  if (type === InventoryItemType.Essence) {
    return t(`essences.${code}`)
  }

  throw new Error('Unknown item type')
}
