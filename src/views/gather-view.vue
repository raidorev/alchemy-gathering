<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import GatherAttempt from '@/components/gather-attempt.vue'
import TerrainPicker from '@/components/terrain-picker.vue'
import { IGatherAttempt } from '@/services/gather'
import { natureCheck } from '@/services/roll'
import { Terrain } from '@/services/terrain'
import { useInventoryStore } from '@/store/inventory'
import { times } from '@/utils/array'
import { uniqueId } from '@/utils/util'

const { t } = useI18n()

const results = ref<IGatherAttempt[]>([])

const onPick = (terrain: Terrain, count: number) => {
  results.value = times(count, () => {
    const roll = natureCheck()

    return {
      key: uniqueId(),
      terrain,
      roll,
      items: [],
    }
  })
}

const inventoryStore = useInventoryStore()

const gather = () => {
  inventoryStore.inventory.push(
    ...results.value.flatMap((attempt) => attempt.items),
  )
  results.value = []
}
</script>

<template>
  <terrain-picker @pick="onPick" />

  <div class="my-5">
    <template v-for="attempt in results" :key="attempt.key">
      <hr class="mt-2" />
      <gather-attempt
        :terrain="attempt.terrain"
        :roll="attempt.roll"
        @gather="attempt.items = $event"
      />
    </template>
  </div>

  <v-btn block color="success" @click="gather">{{ t('gather') }}</v-btn>
</template>
