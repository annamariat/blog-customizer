import { useState } from 'react';
import { clsx } from 'clsx';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import type { ArticleStateType } from 'src/constants/articleProps';
// Импортируем наши дефолтные значения
import { defaultArticleState } from 'src/constants/articleProps';
import {
  fontFamilyOptions,
  fontSizeOptions,
  fontColors,
  backgroundColors,
  contentWidthArr,
} from 'src/constants/articleProps';

import { Separator } from '@/ui/separator';
import { Select } from 'src/ui/select';
import { RadioGroup } from 'src/ui/radio-group';

import styles from './ArticleParamsForm.module.scss';

type ArticleParamsFormProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  articleState: ArticleStateType;
  setArticleState: (state: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
  isOpen,
  setIsOpen,
  articleState,
  setArticleState,
}: ArticleParamsFormProps): React.JSX.Element => {
  const [draftState, setDraftState] = useState<ArticleStateType>(articleState);

  const togglePanel = () => setIsOpen(!isOpen);

  const handleFontChange = (selected: any) => {
    setDraftState((prev: ArticleStateType) => ({ ...prev, fontFamilyOption: selected }));
  };

  const handleFontSizeChange = (selected: any) => {
    setDraftState((prev: ArticleStateType) => ({ ...prev, fontSizeOption: selected }));
  };

  const handleFontColorChange = (selected: any) => {
    setDraftState((prev: ArticleStateType) => ({ ...prev, fontColor: selected }));
  };

  const handleBgColorChange = (selected: any) => {
    setDraftState((prev: ArticleStateType) => ({ ...prev, backgroundColor: selected }));
  };

  const handleWidthChange = (selected: any) => {
    setDraftState((prev: ArticleStateType) => ({ ...prev, contentWidth: selected }));
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setArticleState(draftState);
  };

  const handleReset = () => {
    console.log('🚀 Сброс на заводские настройки!');
    // ВОТ ГЛАВНОЕ ИЗМЕНЕНИЕ: сбрасываем на defaultArticleState
    setDraftState(defaultArticleState);
  };

  return (
    <>
      <ArrowButton isOpen={isOpen} onClick={togglePanel} />
      <aside className={clsx(styles.container, { [styles.container_open]: isOpen })}>
        <form className={styles.form} onSubmit={handleApply}>
          <h2 className={styles.title}>ЗАДАЙТЕ ПАРАМЕТРЫ</h2>


          <Select
            title="Шрифт"
            options={fontFamilyOptions}
            selected={draftState.fontFamilyOption}
            onChange={handleFontChange}
          />

          <Separator />

          <RadioGroup
            title="Размер шрифта"
            name="fontSize"
            options={fontSizeOptions}
            selected={draftState.fontSizeOption}
            onChange={handleFontSizeChange}
            showText={true}
          />

          <Separator />

          <RadioGroup
            title="Цвет шрифта"
            name="fontColor"
            options={fontColors}
            selected={draftState.fontColor}
            onChange={handleFontColorChange}
            showText={false}
          />

          <Separator />

          <RadioGroup
            title="Цвет фона"
            name="bgColor"
            options={backgroundColors}
            selected={draftState.backgroundColor}
            onChange={handleBgColorChange}
            showText={false}
          />

          <Separator />

          <Select
            title="Ширина контента"
            options={contentWidthArr}
            selected={draftState.contentWidth}
            onChange={handleWidthChange}
          />

          <Separator />

          <div className={styles.bottomContainer}>
            <Button
              title="Сбросить"
              type="clear"
              onClick={handleReset}
            />
            <Button
              title="Применить"
              htmlType="submit"
              type="apply"
            />
          </div>
        </form>
      </aside>
    </>
  );
};
