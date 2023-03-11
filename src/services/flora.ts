import { InventoryItem, InventoryItemType } from './inventory'
import { Terrain } from './terrain'

const allFloraNames = [
  'Alchemilla',
  'Alil',
  'Angel skin',
  'Arctic root',
  'Bittergrass',
  'Blodgrass',
  'Bloodpurge',
  'Blue lotus flower',
  'Darkberry',
  'Deadly nightshade',
  'Desert aloe',
  'Dragonwort',
  'Ephedra',
  'Fairy bells',
  'Fleshwort',
  'Flintmoss',
  'Glowshroom',
  'Juniper berries',
  'Kava root',
  'Knitbone',
  'Lunar holly berries',
  "Maiden's tear",
  'Mistletoe',
  'Red lichen',
  'Red mountain flower',
  'Sabito seeds',
  'Sand palm seeds',
  'Silverleaf sap',
  'Sweet elorien',
  'White magnolia',
  'Willow bark',
  'Witch hazel',
  "Wizard's fingers",
] as const

export type FloraName = (typeof allFloraNames)[number]

export const commonFloraNames: FloraName[] = [
  'Alchemilla',
  'Deadly nightshade',
  'Ephedra',
  'Fleshwort',
  'Juniper berries',
  'Willow bark',
]

export const commonFlora: InventoryItem[] = commonFloraNames.map(
  (code): InventoryItem => ({
    code,
    type: InventoryItemType.Flora,
    baseDifficultyClass: 10,
  }),
)

const arcticFlora: InventoryItem[] = [
  {
    code: 'Arctic root',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Mistletoe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Silverleaf sap',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'Alil',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const coastFlora: InventoryItem[] = [
  {
    code: 'Red lichen',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Sabito seeds',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Flintmoss',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'Blue lotus flower',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const desertFlora: InventoryItem[] = [
  {
    code: 'Desert aloe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Sand palm seeds',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Bittergrass',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'White magnolia',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const forestFlora: InventoryItem[] = [
  {
    code: 'Kava root',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Mistletoe',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Lunar holly berries',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'Darkberry',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const grasslandFlora: InventoryItem[] = [
  {
    code: 'Blodgrass',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Fairy bells',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Witch hazel',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'White magnolia',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const mountainFlora: InventoryItem[] = [
  {
    code: 'Dragonwort',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Sweet elorien',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Red mountain flower',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: "Maiden's tear",
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const swampFlora: InventoryItem[] = [
  {
    code: 'Bloodpurge',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: "Wizard's fingers",
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Knitbone',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: "Maiden's tear",
    type: InventoryItemType.Flora,
    baseDifficultyClass: 25,
  },
]

const undergroundFlora: InventoryItem[] = [
  {
    code: 'Glowshroom',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: "Wizard's fingers",
    type: InventoryItemType.Flora,
    baseDifficultyClass: 15,
  },
  {
    code: 'Flintmoss',
    type: InventoryItemType.Flora,
    baseDifficultyClass: 20,
  },
  {
    code: 'Angel skin',
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
