<script lang="ts" setup>
import TheAppBar from '@/components/the-app-bar.vue'
import TheBottomNavigation from '@/components/the-bottom-navigation.vue'
</script>

<template>
  <the-app-bar />

  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>

  <the-bottom-navigation />
</template>
