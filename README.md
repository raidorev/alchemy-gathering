# Ingredients gathering helper for HeavyArms's Alchemy Almanac

## State of the project

This is more of a proof-of-concept for now. I plan to add more features and polish the code in the future, but for now, it works well enough for my purposes.

## Why

I absolutely adore incorporating the [alchemy module by HeavyArms](https://www.heavyarms.com/products/alchemy) into my Dungeons & Dragons games. It adds a unique and exciting element to gameplay that my players and I love. However, one aspect that can be a bit tedious is gathering ingredients for the alchemical creations, especially when traveling for long periods.

In a recent session, my group traveled for seven days straight, and my alchemist player had to roll ten dice every day, search through the book for ingredients, and then jot them down. This process took about 20-30 minutes in total and became a bit of a nuisance.

To solve this problem, I decided to create a helper tool that streamlines the ingredient gathering process. Now, my players can focus on the fun and exciting aspects of alchemy, without getting bogged down by the nitty-gritty details.

## How

To use this tool, follow these simple steps:

1. Go to the web app and input your Intelligence (Nature) modifier, as well as any other relevant modifiers or conditions that may apply.

1. Choose the terrain you will be exploring and select the number of attempts you want to make, then click "Roll".

1. The tool will then generate a list of ingredient gathering variants based on your roll and terrain.

1. Choose the variant you want to use in each attempt.

1. Click "Gather" to add the ingredients to your inventory.

## Dev stuff

This project utilizes [Vue.js](https://vuejs.org) and [Vuetify](https://vuetifyjs.com) for the UI, [Vite](https://vitest.dev) for building, and [TypeScript](https://www.typescriptlang.org) as the primary language. It also employs [Vue I18n](https://vue-i18n.intlify.dev) for i18n and [Pinia](https://pinia.vuejs.org) for state management. Hosting is done on [Vercel](https://vercel.com).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## TODO

- [ ] Inventory management
- [ ] Inventory import/export
- [ ] PWA support
- [ ] "Smart" ingredient gathering based on inventory and recipes
- [ ] Full russian translation
