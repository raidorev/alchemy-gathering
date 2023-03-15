<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { rareFlora } from '@/services/flora'
import { InventoryItem } from '@/services/inventory'
import { Terrain, terrains } from '@/services/terrain'

const emit = defineEmits<{ (event: 'gather', result: InventoryItem[]): void }>()

const props = defineProps<{
  roll: number
  terrain: Terrain
}>()

const { t } = useI18n()

const otherTerrains = computed(() => {
  return terrains.filter((terrain) => terrain !== props.terrain)
})

const isActive = ref(false)

const pick = (flora: InventoryItem) => {
  isActive.value = false
  emit('gather', [flora])
}

const getAvailableFlora = (terrain: Terrain) => {
  return rareFlora[terrain].filter(
    (flora) => flora.baseDifficultyClass <= props.roll - 5,
  )
}
</script>

<template>
  <v-dialog v-model="isActive" transition="dialog-bottom-transition">
    <template #activator="{ props }">
      <v-btn
        block
        size="small"
        color="primary"
        v-bind="props"
        :disabled="roll < 20"
      >
        {{ t('gatheringVariant.rareFloraDifferentTerrain') }}
      </v-btn>
    </template>

    <v-card>
      <v-toolbar
        color="primary"
        :title="t('gatheringVariant.rareFloraDifferentTerrain')"
      />
      <v-card-text>
        <v-expansion-panels variant="accordion">
          <v-expansion-panel
            v-for="terrain in otherTerrains"
            :key="terrain"
            :title="t(`terrain.${terrain}`)"
          >
            <v-expansion-panel-text>
              <v-row dense>
                <v-col
                  v-for="flora in getAvailableFlora(terrain)"
                  :key="flora.code"
                >
                  <v-btn
                    block
                    color="secondary"
                    size="small"
                    @click="() => pick(flora)"
                  >
                    {{ t(`floras["${flora.code}"]`) }}
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>
