<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { commonFlora } from '@/services/flora'
import { InventoryItem } from '@/services/inventory'
import { times, randomElement } from '@/utils/array'

const emit = defineEmits<{ (event: 'gather', result: InventoryItem[]): void }>()

const props = defineProps<{
  roll: number
}>()

const { t } = useI18n()

const gather = () => {
  const count = Math.floor((props.roll - 10) / 5) + 1
  emit(
    'gather',
    times(count, () => randomElement(commonFlora)),
  )
}
</script>

<template>
  <v-btn size="small" color="success" @click="gather">
    {{ t('gatheringVariant.flora') }}
  </v-btn>
</template>
