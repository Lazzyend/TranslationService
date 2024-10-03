import { HintsTraslationsKeys } from './types';

export const parentText = (parent: string): string =>
  ({
    father: 'I love Father',
    mother: 'I love Mother',
  }[parent] || 'I love someone else');

export const loveSomeone = (someone: string): string => `I love ${someone}`;

export const basicTexts = {
  [HintsTraslationsKeys.hNewPasswordLength]: 'Length: At least 8 characters, but preferably 12 or more.',
  [HintsTraslationsKeys.hNewPasswordMixCase]: 'Character Types: Include a mix of uppercase and lowercase letters.',
  [HintsTraslationsKeys.hNewPasswordNumbers]: 'Include numbers (0-9).',
  [HintsTraslationsKeys.hNewPasswordSpecialCharacters]: 'Include special characters (e.g., !, @, #, $).',
};
