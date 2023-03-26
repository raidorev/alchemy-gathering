import { InventoryItem, InventoryItemType } from './inventory'
import { Terrain } from './terrain'

const allFloraNames = [
  'alchemilla',
  'alil',
  'angelSkin',
  'arcticRoot',
  'bittergrass',
  'blodgrass',
  'bloodpurge',
  'blueLotusFlower',
  'darkberry',
  'deadlyNightshade',
  'desertAloe',
  'dragonwort',
  'ephedra',
  'fairyBells',
  'fleshwort',
  'flintmoss',
  'glowshroom',
  'juniperBerries',
  'kavaRoot',
  'knitbone',
  'lunarHollyBerries',
  'maidensTear',
  'mistletoe',
  'redLichen',
  'redMountainFlower',
  'sabitoSeeds',
  'sandPalmSeeds',
  'silverleafSap',
  'sweetElorien',
  'whiteMagnolia',
  'willowBark',
  'witchHazel',
  'wizardsFingers',
] as const

export type FloraName = (typeof allFloraNames)[number]

export const commonFloraNames: FloraName[] = [
  'alchemilla',
  'deadlyNightshade',
  'ephedra',
  'fleshwort',
  'juniperBerries',
  'willowBark',
]

export const rareFloraNames: FloraName[] = allFloraNames.filter(
  (flora) => !commonFloraNames.includes(flora),
)

export const commonFlora: InventoryItem[] = commonFloraNames.map(
  (code): InventoryItem => ({
    code,
    type: InventoryItemType.Flora,
    baseDifficultyClass: 10,
  }),
)

const arcticFlora: InventoryItem[] = [
  {
    code: 'arcticRoot',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'mistletoe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'silverleafSap',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'alil',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const coastFlora: InventoryItem[] = [
  {
    code: 'redLichen',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'sabitoSeeds',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'flintmoss',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'blueLotusFlower',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const desertFlora: InventoryItem[] = [
  {
    code: 'desertAloe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'sandPalmSeeds',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'bittergrass',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'whiteMagnolia',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const forestFlora: InventoryItem[] = [
  {
    code: 'kavaRoot',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'mistletoe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'lunarHollyBerries',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'darkberry',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const grasslandFlora: InventoryItem[] = [
  {
    code: 'blodgrass',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'fairyBells',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'witchHazel',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'whiteMagnolia',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const mountainFlora: InventoryItem[] = [
  {
    code: 'dragonwort',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'sweetElorien',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'redMountainFlower',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'maidensTear',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const swampFlora: InventoryItem[] = [
  {
    code: 'bloodpurge',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'wizardsFingers',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'knitbone',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'maidensTear',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const undergroundFlora: InventoryItem[] = [
  {
    code: 'glowshroom',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'wizardsFingers',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'flintmoss',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'angelSkin',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

export const rareFlora: Record<Terrain, InventoryItem[]> = {
  [Terrain.Arctic]: arcticFlora,
  [Terrain.Coast]: coastFlora,
  [Terrain.Desert]: desertFlora,
  [Terrain.Forest]: forestFlora,
  [Terrain.Grassland]: grasslandFlora,
  [Terrain.Mountain]: mountainFlora,
  [Terrain.Swamp]: swampFlora,
  [Terrain.Underground]: undergroundFlora,
}

export const allFlora = [...commonFlora, ...Object.values(rareFlora).flat()]
