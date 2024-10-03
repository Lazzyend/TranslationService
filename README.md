# Translation Service with no libs for React Typescript projects

This project is a demo how you can build your own translations into project without any libs.

## Sum


This service utilizes the custom hook useTranslations, which is located in the translationService folder. All translations are accessed through a single root type named allTranslations. To optimize performance and relevancy, translations are cached for the duration of a user session. This ensures that the user only loads necessary translations once, without having to repeatedly fetch them from memory.

Additionally, the service supports dynamic translations based on various conditions. This flexibility is evident in the function signature:
```
export const englishTexts = ({ key, arg = '' }: TranslationData): string | any
```
The return type any allows for diverse data structures, such as arrays of objects, to accommodate different use cases like data for sliders or selection menus.

## Start project

1. Clone this repo
2. npm i
3. npm run start

### PS

In this demo only one language but you can easy add them to test how it works.
