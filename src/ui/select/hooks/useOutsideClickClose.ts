/** закрывает выпадающий список (или любую панель), если кликнули мимо него.
 * Следит за rootRef компонента и событием на window:
 * если клик вне элемента — вызывает onClose и сбрасывает isOpen. */






import { useEffect } from 'react';

import type * as React from 'react';

type UseOutsideClickClose = {
  isOpen: boolean;
  onChange: (newValue: boolean) => void;
  onClose?: () => void;
  rootRef: React.RefObject<HTMLDivElement | null>;
};

export const useOutsideClickClose = ({
  isOpen,
  rootRef,
  onClose,
  onChange,
}: UseOutsideClickClose): void => {
  useEffect(() => {
    const handleClick = (event: MouseEvent): void => {
      const { target } = event;
      if (target instanceof Node && !rootRef.current?.contains(target)) {
        isOpen && onClose?.();
        onChange?.(false);
      }
    };

    if (!isOpen) {
      return;
    }

    window.addEventListener('mousedown', handleClick);

    return (): void => {
      window.removeEventListener('mousedown', handleClick);
    };
  }, [onClose, onChange, isOpen]);
};
