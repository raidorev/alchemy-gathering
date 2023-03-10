<script lang="ts" setup>
import { watch } from 'vue'
import { useTheme } from 'vuetify'

import { useAppStore } from '@/store/app'

const theme = useTheme()
const { app } = useAppStore()

const switchTheme = () => {
  app.theme = app.theme === 'light' ? 'dark' : 'light'
}

watch(
  () => app.theme,
  (themeName) => {
    theme.global.name.value = themeName
  },
  { immediate: true },
)
</script>

<template>
  <v-btn icon @click="switchTheme">
    <v-icon v-if="app.theme === 'dark'">mdi-weather-sunny</v-icon>
    <v-icon v-else>mdi-weather-night</v-icon>
  </v-btn>
</template>
