import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { useI18n, type I18n } from 'vue-i18n'
import { createVuetify } from 'vuetify'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'

import { i18n } from './i18n'

const baseColors = {
  primary: '#7d82b8',
  secondary: '#749db8',
  success: '#45b079',
  warning: '#eddea4',
}

export default createVuetify({
  locale: {
    adapter: createVueI18nAdapter({
      // eslint-disable-next-line @typescript-eslint/ban-types
      i18n: i18n as I18n<{}, {}, {}, string, false>,
      useI18n,
    }),
  },
  theme: {
    themes: {
      light: {
        colors: { ...baseColors },
      },
      dark: {
        colors: { ...baseColors },
      },
    },
  },
})
