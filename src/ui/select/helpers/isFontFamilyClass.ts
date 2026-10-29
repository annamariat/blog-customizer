/**Без type guard TypeScript бы ругался: нельзя присваивать string туда,
 * где ожидается строго ограниченный тип.
 *
 *
 *
 * Почему это именно в helpers, а не в компоненте
 * 
Переиспользуемость. Эту проверку можно вызывать в разных местах (в утилитах, валидаторах, других компонентах),
не дублируя логику.

Чистота компонентов. Компоненты остаются простыми: они принимают уже проверенные данные
 или вызывают хелпер, если нужно убедиться в типе.

Единый источник истины. Вся логика проверки завязана на одном
массиве fontFamilyClasses, который живёт в константах. */




import { fontFamilyClasses } from 'src/constants/articleProps';

import type { FontFamiliesClasses } from 'src/constants/articleProps';

/** Так выглядят typeGuards в ts, он позволяет нам определить является ли переменная определенным типом.
 * Подробнее о них можно почитать тут - https://www.typescriptlang.org/docs/handbook/advanced-types.html */
export function isFontFamilyClass(
  family?: string
): family is FontFamiliesClasses {
  return fontFamilyClasses.includes(family as FontFamiliesClasses);
}
