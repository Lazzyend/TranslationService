import { conditionTranslates } from './conditionTranslates';
import { basicTexts as defaultTranslations } from './translations/defaultTranslations';
import { basicTexts as hintsTranslations } from './translations/hintsTranslations';
import { TranslationData } from '../types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const englishTexts = ({ key, arg = '' }: TranslationData): string | any => {
  const allTexts = {
    ...conditionTranslates({ key, arg }),
    ...defaultTranslations,
    ...hintsTranslations,
  };

  // @ts-ignore
  return allTexts[key];
};
