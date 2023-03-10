import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface IApp {
  theme: 'light' | 'dark'
  locale: 'en' | 'ru'
}

export const useAppStore = defineStore(
  'app',
  () => {
    const app = reactive<IApp>({
      theme: 'light',
      locale: 'en',
    })

    return { app }
  },
  {
    persist: true,
  },
)
