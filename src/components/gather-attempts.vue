<script lang="ts" setup>
import { ref } from 'vue'

import CommonEssence from '@/components/gather-variants/common-essence.vue'
import CommonFlora from '@/components/gather-variants/common-flora.vue'
import DifferentTerrain from '@/components/gather-variants/different-terrain.vue'
import RareFlora from '@/components/gather-variants/rare-flora.vue'
import { InventoryItem } from '@/services/inventory'
import { Terrain } from '@/services/terrain'

defineProps<{
  roll: number
  terrain: Terrain
}>()

const result = ref<InventoryItem[]>([])
const gather = (newResult: InventoryItem[]) => {
  result.value = newResult
}
</script>

<template>
  <h4>{{ terrain }}: {{ roll }}</h4>

  <div v-if="roll >= 10" class="d-flex flex-wrap">
    <div class="mr-2 mb-2">
      <common-flora :roll="roll" @gather="gather" />
    </div>

    <div class="mr-2">
      <common-essence :roll="roll" @gather="gather" />
    </div>

    <div class="mr-2">
      <rare-flora :roll="roll" :terrain="terrain" @gather="gather" />
    </div>

    <div class="mr-2">
      <different-terrain :roll="roll" :terrain="terrain" @gather="gather" />
    </div>

    <div class="bg-grey-lighten-1 d-flex align-center px-2 rounded">
      {{ result }}
    </div>
  </div>
  <v-alert v-else type="warning">No flora for you :(</v-alert>
</template>
