<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import LocaleSwitcher from './locale-switcher.vue'
import SettingsModal from './settings-modal.vue'
import ThemeSwitcher from './theme-switcher.vue'

const { t } = useI18n()
</script>

<template>
  <v-app-bar color="teal-darken-4" image="@/assets/app-bar.jpg">
    <template #image>
      <v-img
        gradient="to top right, rgba(125, 130, 184, .8), rgba(69, 176, 121, .8)"
      />
    </template>

    <template #prepend>
      <settings-modal />
    </template>

    <v-app-bar-title>{{ t('title') }}</v-app-bar-title>

    <theme-switcher />
    <locale-switcher />
  </v-app-bar>
</template>

<i18n lang="json" locale="en">
{
  "title": "Gather time!"
}
</i18n>
