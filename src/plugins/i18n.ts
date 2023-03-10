import { createI18n } from 'vue-i18n'

import en from '@/languages/en.json'
import ru from '@/languages/ru.json'

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], 'en' | 'ru', false>({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  // TODO: Get i18n types working
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  messages: { en, ru },
})
