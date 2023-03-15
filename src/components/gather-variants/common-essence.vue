<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { essences } from '@/services/essence'
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
    times(count, () => randomElement(essences)),
  )
}
</script>

<template>
  <v-btn block size="small" color="secondary" @click="gather">
    {{ t('essence') }}
  </v-btn>
</template>

<i18n lang="json" locale="en">
{
  "essence": "Essence"
}
</i18n>
