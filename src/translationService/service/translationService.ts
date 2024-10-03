import { englishTexts } from './english';
import { AllTranslations, Lang } from './types';

export type TranslationsType = {
  lang: Lang;
  key: AllTranslations;
  arg?: string;
};

export const translationService = ({ lang, key, arg }: TranslationsType) => {
  const languages = {
    [Lang.ENGLISH]: englishTexts,
    // Future languages can be added here
  };

  return languages[lang]({ key, arg });
};
