<script lang="ts" setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

import { Tab } from '@/router'

const { t } = useI18n()

const route = useRoute()
const router = useRouter()

const currentTab = computed({
  get: () => route.name as Tab,
  set: (value: string) => {
    router.push({ name: value })
  },
})

const color = computed(() => {
  return currentTab.value === Tab.Gather ? 'primary' : 'secondary'
})
</script>

<template>
  <v-bottom-navigation v-model="currentTab" :bg-color="color" mode="shift">
    <v-btn :value="Tab.Gather">
      <v-icon>mdi-flower-tulip</v-icon>
      <span>{{ t('gathering') }}</span>
    </v-btn>

    <v-btn :value="Tab.Inventory">
      <v-icon>mdi-file-table-box-multiple</v-icon>
      <span>{{ t('inventory') }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>

<i18n lang="json" locale="en">
{
  "gathering": "Gathering",
  "inventory": "Inventory"
}
</i18n>
