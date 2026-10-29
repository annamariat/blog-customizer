/**это набор маленьких «помощников» для интерактивности и доступности твоего кастомного селекта.
 * Каждый файл — один конкретный сценарий поведения.
 *
 *
 *
 *
 *
 * */

/**позволяет выбрать опцию в списке (например, в выпадающем меню) по нажатию Enter, когда фокус стоит на элементе.
 * Работает через ref на <li>, проверяет, что именно этот элемент в фокусе, и вызывает onClick. */



import { useEffect } from 'react';

import type { OptionType } from 'src/constants/articleProps';

type UseEnterOptionSubmit = {
  onClick: (value: OptionType['value']) => void;
  value: OptionType['value'];
  optionRef: React.RefObject<HTMLLIElement | null>;
};

export const useEnterOptionSubmit = ({
  onClick,
  value,
  optionRef,
}: UseEnterOptionSubmit): void => {
  useEffect(() => {
    const option = optionRef.current;
    if (!option) return;
    const handleEnterKeyDown = (event: KeyboardEvent): void => {
      if (document.activeElement === option && event.key === 'Enter') {
        onClick(value);
      }
    };

    option.addEventListener('keydown', handleEnterKeyDown);
    return (): void => {
      option.removeEventListener('keydown', handleEnterKeyDown);
    };
  }, [value, onClick, optionRef]);
};
