import { loveSomeone, parentText } from './translations/hintsTranslations';
import { HintsTraslationsKeys } from './translations/hintsTranslations/types';
import { AllTranslations, TranslationData } from '../types';

const conditionalTranslates: { [key in AllTranslations]?: (arg: string) => unknown } = {
  [HintsTraslationsKeys.hLoveParent]: parentText,
  [HintsTraslationsKeys.hLoveSomeone]: loveSomeone,
};

const conditionKeys = Object.keys(conditionalTranslates) as AllTranslations[];

export const conditionTranslates = ({ key, arg = '' }: TranslationData): Record<string, unknown> | undefined => {
  if (conditionKeys.includes(key)) {
    const translateFunc = conditionalTranslates[key];
    if (translateFunc) {
      return { [key]: translateFunc(arg) };
    }
  }

  return {};
};
