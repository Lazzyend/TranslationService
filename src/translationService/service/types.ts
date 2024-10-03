import { DefaultTranslationKeys } from './english/translations/defaultTranslations/types';
import { HintsTraslationsKeys } from './english/translations/hintsTranslations/types';

// When new file will be added - need to add it also into key - key: LoginFormKeys & NewKeys
export const allTranslations = { ...DefaultTranslationKeys, ...HintsTraslationsKeys };
export type AllTranslations = keyof typeof allTranslations;

export type TranslationData = { key: AllTranslations; arg?: string };

export enum Lang {
  ENGLISH = 'English',
  // Future languages can be added here
}
