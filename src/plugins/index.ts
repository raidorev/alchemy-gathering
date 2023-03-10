import { type App } from 'vue'

import router from '@/router'
import { pinia } from '@/store'

import { i18n } from './i18n'
import vuetify from './vuetify'
import { loadFonts } from './webfontloader'

export function registerPlugins(app: App) {
  void loadFonts()
  app.use(i18n).use(vuetify).use(router).use(pinia)
}
