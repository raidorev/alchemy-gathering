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

    const remove = (code: InventoryItem['code'], count = 1) => {
      while (count > 0) {
        const index = inventory.value.findIndex((item) => item.code === code)
        if (index > -1) {
          inventory.value.splice(index, 1)
        }
        count--
      }
    }

    const inventoryGrouppedByCode = computed(() => {
      const groups = new Map<InventoryItem['code'], { count: number }>()

      for (const item of inventory.value.sort((a, b) =>
        a.code.localeCompare(b.code),
      )) {
        const group = groups.get(item.code)
        if (group) {
          group.count++
        } else {
          groups.set(item.code, { count: 1 })
        }
      }

      return groups
    })

    return { inventory, remove, inventoryGrouppedByCode }
  },
  {
    persist: true,
  },
)
