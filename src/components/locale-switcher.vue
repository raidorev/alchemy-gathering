<script lang="ts" setup>
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { IApp, useAppStore } from '@/store/app'

const { t, locale } = useI18n()

const { app } = useAppStore()

const locales: { name: IApp['locale']; label: string }[] = [
  { name: 'en', label: 'English' },
  { name: 'ru', label: 'Русский' },
]

const switchLocale = (localeName: IApp['locale']) => {
  app.locale = localeName
}

watch(
  () => app.locale,
  (localeName) => {
    locale.value = localeName
  },
  { immediate: true },
)
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn icon="mdi-translate" flat v-bind="props" />
    </template>
    <v-list density="compact" nav>
      <v-list-subheader
        class="text-high-emphasis text-uppercase font-weight-black"
      >
        {{ t('languages') }}
      </v-list-subheader>

      <v-list-item
        v-for="{ label, name } in locales"
        :key="name"
        @click="switchLocale(name)"
      >
        <v-list-item-title>{{ label }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<i18n lang="json" locale="en">
{
  "languages": "Languages"
}
</i18n>
