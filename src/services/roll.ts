import { useSettingsStore } from '@/store/settings'

export const randomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const d20 = () => randomInt(1, 20)

export interface RollOptions {
  modifier: number
  mode: 'normal' | 'advantage' | 'disadvantage'
}

export const roll = (options: RollOptions) => {
  const { modifier, mode } = options
  const roll = d20()

  if (mode === 'advantage') {
    return Math.max(roll, d20()) + modifier
  }

  if (mode === 'disadvantage') {
    return Math.min(roll, d20()) + modifier
  }

  return roll + modifier
}

export const natureCheck = () => {
  const { settings } = useSettingsStore()

  const advantage = settings.help || settings.proficiencyInHerbalismKit

  const modifier =
    settings.natureCheckModifier + (settings.favoriteTerrain ? 2 : 0)

  const mode: RollOptions['mode'] = advantage ? 'advantage' : 'normal'

  return roll({ modifier, mode })
}
