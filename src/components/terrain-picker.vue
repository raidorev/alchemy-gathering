<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { Terrain, terrains } from '@/services/terrain'

const emit = defineEmits<{
  (event: 'pick', terrain: Terrain, count: number): void
}>()

const { t } = useI18n()
const { t: T } = useI18n({ useScope: 'global' })

const valid = ref(false)

const items = terrains.map((terrain) => ({
  id: terrain,
  key: T(`terrains.${terrain}`),
}))

const terrain = ref(terrains[0])
const count = ref(3)

const onSubmit = () => {
  emit('pick', terrain.value, count.value)
}
</script>

<template>
  <v-form v-model="valid" @submit.prevent="onSubmit">
    <v-row>
      <v-col cols="12" md="4">
        <v-select
          v-model="terrain"
          :items="items"
          item-value="id"
          item-title="key"
          hide-details
        />
      </v-col>

      <v-col cols="12" md="4">
        <v-text-field v-model="count" type="number" hide-details />
      </v-col>

      <v-col cols="12" md="4">
        <div class="d-flex h-100 align-center">
          <v-btn color="primary" type="submit" block :disabled="!valid">
            {{ t('makeAttempts') }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-form>
</template>

<i18n lang="json" locale="en">
{
  "makeAttempts": "Make attempts"
}
</i18n>
