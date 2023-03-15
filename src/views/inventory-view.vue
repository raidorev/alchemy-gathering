<script lang="ts" setup>
import { useInventoryStore } from '@/store/inventory'

const inventoryStore = useInventoryStore()
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Count</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="[code, item] in inventoryStore.inventoryGrouppedByCode.entries()"
        :key="code"
      >
        <td>
          <span class="">
            {{ code }}
          </span>
        </td>
        <td>{{ item.count }}</td>
        <td>
          <div class="d-flex">
            <v-btn
              size="small"
              icon
              color="error"
              class="mr-2"
              @click="inventoryStore.remove(code)"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>
