<script lang="ts" setup>
import LocaleSwitcher from './locale-switcher.vue'
import ThemeSwitcher from './theme-switcher.vue'
</script>

<template>
  <v-app-bar color="teal-darken-4" image="@/assets/app-bar.jpg">
    <template #image>
      <v-img
        gradient="to top right, rgba(125, 130, 184, .8), rgba(69, 176, 121, .8)"
      />
    </template>

    <v-app-bar-title>Gather time!</v-app-bar-title>

    <theme-switcher />
    <locale-switcher />
  </v-app-bar>
</template>
