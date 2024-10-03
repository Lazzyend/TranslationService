import { useState, useCallback } from 'react';

import { TranslationsType, translationService } from '../service/translationService';
import { AllTranslations, Lang } from '../service/types';

const useTranslation = () => {
  const [translated, setTranslated] = useState<{ [key: string]: string }>({});
  const lang = Lang.ENGLISH;
  // TODO: When we are going to have more than one language, we should get it from user data, so that's why we need hook
  // const [lang, setLang] = useState(Lang.ENGLISH);  // Defaulting to English, potentially updated from user settings

  // const { user } = useContext(UserDataContext);
  // useEffect(() => {
  //   if (user && user.lang) {
  //     setLang(user.lang); // Update the language when user settings change
  //   }
  // }, [user]);

  const translate = useCallback(
    (key: AllTranslations, arg?: string) => {
      const translationCacheKey = `${lang}-${key}-${arg || ''}`;

      // Check cache first
      if (translated[translationCacheKey]) {
        return translated[translationCacheKey];
      }

      // If not in cache, call the translation service
      const translationServiceData: TranslationsType = {
        lang,
        key,
        arg,
      };

      const newTranslate = translationService(translationServiceData);
      setTranslated((prev) => ({ ...prev, [translationCacheKey]: newTranslate }));

      return newTranslate;
    },
    [lang, translated]
  );

  return translate;
};

export default useTranslation;
