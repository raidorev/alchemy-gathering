<script lang="ts" setup>
import { computed } from 'vue'

import { useAppStore } from '@/store/app'

const { app } = useAppStore()

const color = computed(() => {
  return app.currentTab === 'gather' ? 'primary' : 'secondary'
})
</script>

<template>
  <v-bottom-navigation v-model="app.currentTab" :bg-color="color" mode="shift">
    <v-btn value="gather">
      <v-icon>mdi-flower-tulip</v-icon>
      <span>Gathering</span>
    </v-btn>

    <v-btn value="inventory">
      <v-icon>mdi-file-table-box-multiple</v-icon>
      <span>Inventory</span>
    </v-btn>
  </v-bottom-navigation>
</template>
