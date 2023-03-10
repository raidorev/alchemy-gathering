<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useSettingsStore } from '@/store/settings'

const { t } = useI18n()

const { settings } = useSettingsStore()
</script>

<template>
  <v-dialog transition="dialog-top-transition" width="auto">
    <template #activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card>
        <v-card-title>
          {{ t('settings.title') }}
        </v-card-title>

        <v-card-text>
          <v-text-field
            v-model.number="settings.natureCheckModifier"
            type="number"
            :label="t('settings.natureCheckModifier')"
            color="primary"
            hide-details
          />
          <v-switch
            v-model="settings.proficiencyInHerbalismKit"
            :label="t('settings.proficiencyInHerbalismKit')"
            color="primary"
            hide-details
          />
          <v-switch
            v-model="settings.help"
            :label="t('settings.help')"
            color="primary"
            hide-details
          />
          <v-switch
            v-model="settings.favoriteTerrain"
            :label="t('settings.favoriteTerrain')"
            color="primary"
            hide-details
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn variant="text" @click="isActive.value = false">
            {{ t('settings.close') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
