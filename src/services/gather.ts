import { i18n } from '@/plugins/i18n'

export enum GatheringVariant {
  Flora,
  Essence,
  RareFlora,
  RareFloraDifferentTerrain,
}

export const gatheringVariantName = (variant: GatheringVariant) => {
  // TODO: Fix types
  const { t } = i18n.global as unknown as { t: (key: string) => string }

  switch (variant) {
    case GatheringVariant.Flora: {
      return t('gatheringVariant.flora')
    }
    case GatheringVariant.Essence: {
      return t('gatheringVariant.essence')
    }
    case GatheringVariant.RareFlora: {
      return t('gatheringVariant.rareFlora')
    }
    case GatheringVariant.RareFloraDifferentTerrain: {
      return t('gatheringVariant.rareFloraDifferentTerrain')
    }
    default: {
      throw new Error('Unknown variant')
    }
  }
}
