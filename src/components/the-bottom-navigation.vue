<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { Tab } from '@/router'

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
      <span>Gathering</span>
    </v-btn>

    <v-btn :value="Tab.Inventory">
      <v-icon>mdi-file-table-box-multiple</v-icon>
      <span>Inventory</span>
    </v-btn>
  </v-bottom-navigation>
</template>
