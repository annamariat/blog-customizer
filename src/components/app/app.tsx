

/** главный «дирижёр» страницы в React‑приложении. */
//App.tsx —корневой компонент приложения в React */
import { useState } from 'react';
import { defaultArticleState } from '@/constants/articleProps';
import { clsx } from 'clsx';
import { ArticleParamsForm } from '@components/article-params-form';
import { Article } from '../article/Article';
import type { CSSProperties } from 'react';
import type { ArticleStateType } from '@/constants/articleProps';
import styles from './app.module.scss';

export const App = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  // Инициализируем состояние дефолтными значениями
  const [articleState, setArticleState] = useState<ArticleStateType>(defaultArticleState);

  return (
    <main
      className={clsx(styles.main)}
    /**без них не меняется размер , фон, ширина , цвет, шрифт */
      style={
        {
          '--font-family': articleState.fontFamilyOption.value,
          '--font-size': articleState.fontSizeOption.value,
          '--font-color': articleState.fontColor.value,
          '--bg-color': articleState.backgroundColor.value,
          '--container-width': articleState.contentWidth.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        articleState={articleState}
        setArticleState={setArticleState}
      />
      <Article />
    </main>
  );
};
