<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { essenceCodes } from '@/services/essence'
import { commonFloraNames, rareFloraNames } from '@/services/flora'
import { getInventoryItemName, InventoryItemType } from '@/services/inventory'
import { useInventoryStore } from '@/store/inventory'

const { t } = useI18n()
const { t: T } = useI18n({ useScope: 'global' })

const dialog = ref(false)

const inventoryStore = useInventoryStore()

const groups = [
  {
    name: T('commonFlora'),
    background: 'success',
    codes: commonFloraNames,
    type: InventoryItemType.Flora,
  },
  {
    name: T('rareFlora'),
    background: 'success',
    codes: rareFloraNames,
    type: InventoryItemType.Flora,
  },
  {
    name: T('essence'),
    background: 'secondary',
    codes: essenceCodes,
    type: InventoryItemType.Essence,
  },
]

const clear = () => {
  inventoryStore.clear()
  dialog.value = false
}
</script>

<template>
  <v-table density="compact">
    <thead class="bg-primary">
      <tr>
        <th>{{ t('name') }}</th>
        <th>{{ t('count') }}</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="{ name, background, codes, type } in groups" :key="name">
        <tr :class="[`bg-${background}`]">
          <td colspan="3">{{ name }}</td>
        </tr>
        <tr
          v-for="{ count, code } in codes.map(
            (code) => inventoryStore.getGrouped(code).value,
          )"
          :key="code"
        >
          <td>
            {{ getInventoryItemName(code, type) }}
          </td>
          <td>{{ count }}</td>
          <td>
            <div class="d-flex">
              <v-btn
                density="compact"
                icon
                color="error"
                class="me-2"
                :disabled="count === 0"
                @click="inventoryStore.remove(code)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
              <v-btn
                density="compact"
                icon
                color="success"
                @click="inventoryStore.add(code, type)"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>

  <v-dialog v-model="dialog" transition="dialog-top-transition" width="auto">
    <template #activator="{ props }">
      <div class="text-end mt-3">
        <v-btn color="error" v-bind="props">
          {{ t('clearInventory') }}
        </v-btn>
      </div>
    </template>

    <v-card>
      <v-toolbar color="primary" :title="t('confirmClearTitle')"></v-toolbar>
      <v-card-text>
        {{ t('confirmClearText') }}
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn variant="text" color="error" @click="dialog = false">
          {{ t('cancel') }}
        </v-btn>
        <v-btn variant="elevated" color="error" @click="clear">
          {{ t('clearInventory') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<i18n lang="json" locale="en">
{
  "name": "Name",
  "count": "Count",
  "clearInventory": "Clear inventory",
  "cancel": "Cancel",
  "confirmClearTitle": "Are you sure?",
  "confirmClearText": "Are you sure you want to clear your inventory? This action cannot be undone."
}
</i18n>

<i18n lang="json" locale="ru">
{}
</i18n>
