module.exports = {
  root: true,
  extends: ['@raidorev', 'plugin:@intlify/vue-i18n/recommended'],
  settings: {
    'vue-i18n': {
      localeDir: './src/languages/*.{json,json5,yaml,yml}',
      messageSyntaxVersion: '^9.2.2',
    },
  },
  rules: {
    '@intlify/vue-i18n/no-raw-text': [
      'error',
      {
        ignoreNodes: ['v-icon'],
      },
    ],

    'sonarjs/no-duplicate-string': ['error', 5],
  },
}
