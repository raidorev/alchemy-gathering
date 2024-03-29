import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { essences } from '@/services/essence'
import { allFlora } from '@/services/flora'
import { InventoryItem, InventoryItemType } from '@/services/inventory'
import { times } from '@/utils/array'

export interface InventoryStore {
  inventory: InventoryItem[]
}

export const useInventoryStore = defineStore(
  'inventory',
  () => {
    const inventory = ref<InventoryItem[]>([])

    const getGrouped = (code: InventoryItem['code']) =>
      computed(() => {
        const items = inventory.value.filter((item) => item.code === code)

        return {
          code,
          count: items.length,
        }
      })

    const add = (
      code: InventoryItem['code'],
      type: InventoryItemType,
      count = 1,
    ) => {
      const items = times(count, () => createItem(code, type))
      inventory.value.push(...items)
    }

    const remove = (code: InventoryItem['code'], count = 1) => {
      while (count > 0) {
        const index = inventory.value.findIndex((item) => item.code === code)
        if (index > -1) {
          inventory.value.splice(index, 1)
        }
        count--
      }
    }

    const clear = () => {
      inventory.value = []
    }

    return {
      inventory,
      getGrouped,
      add,
      remove,
      clear,
    }
  },
  {
    persist: true,
  },
)

function createItem(
  code: InventoryItem['code'],
  type: InventoryItemType,
): InventoryItem {
  let items: InventoryItem[]
  if (type === InventoryItemType.Flora) {
    items = allFlora
  } else if (type === InventoryItemType.Essence) {
    items = essences
  } else {
    throw new Error(`Unknown item type: ${type}`)
  }

  const item = items.find((item) => item.code === code)
  if (!item) {
    throw new Error(`Unknown item: ${code}`)
  }

  return item
}
