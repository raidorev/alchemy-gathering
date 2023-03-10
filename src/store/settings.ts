import { defineStore } from 'pinia'
import { reactive } from 'vue'

export interface ISettings {
  /** Nature check modifier */
  natureCheckModifier: number
  /** Proficiency and possession of Herbalism Kit */
  proficiencyInHerbalismKit: boolean
  /** Help from a friendly creature */
  help: boolean
  /** Favorite terrain (from Ranger class) */
  favoriteTerrain: boolean
}

export const useSettingsStore = defineStore(
  'settings',
  () => {
    const settings = reactive<ISettings>({
      natureCheckModifier: 0,
      proficiencyInHerbalismKit: true,
      help: false,
      favoriteTerrain: false,
    })

    return { settings }
  },
  {
    persist: true,
  },
)
