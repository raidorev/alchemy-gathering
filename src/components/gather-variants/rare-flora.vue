<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { rareFlora } from '@/services/flora'
import { InventoryItem } from '@/services/inventory'
import { Terrain } from '@/services/terrain'

const emit = defineEmits<{ (event: 'gather', result: InventoryItem[]): void }>()

const props = defineProps<{
  roll: number
  terrain: Terrain
}>()

const { t } = useI18n()

const flora = computed(() => {
  return rareFlora[props.terrain].filter(
    (flora) => flora.baseDifficultyClass <= props.roll,
  )
})
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        block
        size="small"
        color="primary"
        v-bind="props"
        :disabled="roll < 15"
      >
        {{ t('rareFlora') }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in flora"
        :key="index"
        :value="index"
        @click="emit('gather', [item])"
      >
        <v-list-item-title>{{ t(`floras["${item.code}"]`) }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<i18n lang="json" locale="en">
{
  "rareFlora": "Rare Flora"
}
</i18n>
