<script lang="ts" setup>
import { useI18n } from 'vue-i18n'

import { essenceCodes } from '@/services/essence'
import { commonFloraNames, rareFloraNames } from '@/services/flora'
import { getInventoryItemName, InventoryItemType } from '@/services/inventory'
import { useInventoryStore } from '@/store/inventory'

const { t } = useI18n()
const { t: T } = useI18n({ useScope: 'global' })

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
                class="mr-2"
                :disabled="count === 0"
                @click="inventoryStore.remove(code)"
              >
                <v-icon>mdi-minus</v-icon>
              </v-btn>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </v-table>

  <div class="text-end mt-5">
    <v-btn color="error" @click="inventoryStore.clear()">
      {{ t('clearInventory') }}
    </v-btn>
  </div>
</template>

<i18n lang="json" locale="en">
{
  "name": "Name",
  "count": "Count",
  "clearInventory": "Clear inventory"
}
</i18n>

<i18n lang="json" locale="ru">
{}
</i18n>
