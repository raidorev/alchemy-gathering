<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import GatherAttempt from '@/components/gather-attempt.vue'
import TerrainPicker from '@/components/terrain-picker.vue'
import { natureCheck } from '@/services/roll'
import { Terrain } from '@/services/terrain'
import { times } from '@/utils/array'
import { uniqueId } from '@/utils/util'

interface GatherAttempt {
  key: string
  terrain: Terrain
  roll: number
}

const { t } = useI18n()

const results = ref<GatherAttempt[]>([])

const onPick = (terrain: Terrain, count: number) => {
  results.value = times(count, () => {
    const roll = natureCheck()

    return {
      key: uniqueId(),
      terrain,
      roll,
    }
  })
}
</script>

<template>
  <terrain-picker @pick="onPick" />

  <div class="my-5">
    <template v-for="attempt in results" :key="attempt.key">
      <hr class="mt-2" />
      <gather-attempt :terrain="attempt.terrain" :roll="attempt.roll" />
    </template>
  </div>

  <v-btn block color="success">{{ t('gahter') }}</v-btn>
</template>
