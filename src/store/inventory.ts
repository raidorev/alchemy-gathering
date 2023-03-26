import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import { InventoryItem } from '@/services/inventory'

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
      remove,
      clear,
    }
  },
  {
    persist: true,
  },
)
