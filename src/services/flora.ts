import { InventoryItem } from './inventory'
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
    baseDifficultyClass: 10,
  }),
)

const arcticFlora: InventoryItem[] = [
  {
    code: 'Arctic root',
    baseDifficultyClass: 15,
  },
  {
    code: 'Mistletoe',
    baseDifficultyClass: 15,
  },
  {
    code: 'Silverleaf sap',
    baseDifficultyClass: 20,
  },
  {
    code: 'Alil',
    baseDifficultyClass: 25,
  },
]

const coastFlora: InventoryItem[] = [
  {
    code: 'Red lichen',
    baseDifficultyClass: 15,
  },
  {
    code: 'Sabito seeds',
    baseDifficultyClass: 15,
  },
  {
    code: 'Flintmoss',
    baseDifficultyClass: 20,
  },
  {
    code: 'Blue lotus flower',
    baseDifficultyClass: 25,
  },
]

const desertFlora: InventoryItem[] = [
  {
    code: 'Desert aloe',
    baseDifficultyClass: 15,
  },
  {
    code: 'Sand palm seeds',
    baseDifficultyClass: 15,
  },
  {
    code: 'Bittergrass',
    baseDifficultyClass: 20,
  },
  {
    code: 'White magnolia',
    baseDifficultyClass: 25,
  },
]

const forestFlora: InventoryItem[] = [
  {
    code: 'Kava root',
    baseDifficultyClass: 15,
  },
  {
    code: 'Mistletoe',
    baseDifficultyClass: 15,
  },
  {
    code: 'Lunar holly berries',
    baseDifficultyClass: 20,
  },
  {
    code: 'Darkberry',
    baseDifficultyClass: 25,
  },
]

const grasslandFlora: InventoryItem[] = [
  {
    code: 'Blodgrass',
    baseDifficultyClass: 15,
  },
  {
    code: 'Fairy bells',
    baseDifficultyClass: 15,
  },
  {
    code: 'Witch hazel',
    baseDifficultyClass: 20,
  },
  {
    code: 'White magnolia',
    baseDifficultyClass: 25,
  },
]

const mountainFlora: InventoryItem[] = [
  {
    code: 'Dragonwort',
    baseDifficultyClass: 15,
  },
  {
    code: 'Sweet elorien',
    baseDifficultyClass: 15,
  },
  {
    code: 'Red mountain flower',
    baseDifficultyClass: 20,
  },
  {
    code: "Maiden's tear",
    baseDifficultyClass: 25,
  },
]

const swampFlora: InventoryItem[] = [
  {
    code: 'Bloodpurge',
    baseDifficultyClass: 15,
  },
  {
    code: "Wizard's fingers",
    baseDifficultyClass: 15,
  },
  {
    code: 'Knitbone',
    baseDifficultyClass: 20,
  },
  {
    code: "Maiden's tear",
    baseDifficultyClass: 25,
  },
]

const undergroundFlora: InventoryItem[] = [
  {
    code: 'Glowshroom',
    baseDifficultyClass: 15,
  },
  {
    code: "Wizard's fingers",
    baseDifficultyClass: 15,
  },
  {
    code: 'Flintmoss',
    baseDifficultyClass: 20,
  },
  {
    code: 'Angel skin',
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
