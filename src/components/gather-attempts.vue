<script lang="ts" setup>
import { ref } from 'vue'

import CommonEssence from '@/components/gather-variants/common-essence.vue'
import CommonFlora from '@/components/gather-variants/common-flora.vue'
import DifferentTerrain from '@/components/gather-variants/different-terrain.vue'
import RareFlora from '@/components/gather-variants/rare-flora.vue'
import { InventoryItem, getInventoryItemName } from '@/services/inventory'
import { Terrain } from '@/services/terrain'

defineProps<{
  roll: number
  terrain: Terrain
}>()

const result = ref<InventoryItem[]>([])
const gather = (newResult: InventoryItem[]) => {
  result.value = newResult
}

const formattedResult = (result: InventoryItem[]) => {
  const items = Object.values(
    // eslint-disable-next-line unicorn/no-array-reduce
    result.reduce((groups, item) => {
      if (!groups[item.code]) {
        groups[item.code] = {
          name: getInventoryItemName(item),
          count: 0,
        }
      }
      groups[item.code].count += 1
      return groups
    }, {} as Record<InventoryItem['code'], { name: string; count: 0 }>),
  )

  return items.map((item) => `${item.count}x ${item.name}`).join(', ')
}
</script>

<template>
  <h4 class="d-flex align-center my-2">Result: {{ roll }}</h4>

  <template v-if="roll >= 10">
    <v-row dense>
      <v-col>
        <common-flora :roll="roll" @gather="gather" />
      </v-col>
      <v-col>
        <common-essence :roll="roll" @gather="gather" />
      </v-col>
      <v-col>
        <rare-flora :roll="roll" :terrain="terrain" @gather="gather" />
      </v-col>

      <v-col>
        <different-terrain :roll="roll" :terrain="terrain" @gather="gather" />
      </v-col>

      <v-col cols="12">
        <v-alert color="teal" variant="tonal" border="start">
          {{ formattedResult(result) }}
        </v-alert>
      </v-col>
    </v-row>
  </template>

  <v-alert v-else type="warning">No items for you :(</v-alert>
</template>
