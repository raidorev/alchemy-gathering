<script lang="ts" setup>
import TheAppBar from '@/components/the-app-bar.vue'
</script>

<template>
  <the-app-bar />

  <v-main>
    <v-container>
      <router-view />
    </v-container>
  </v-main>
</template>
