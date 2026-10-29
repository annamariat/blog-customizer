/**Это точка входа твоего React‑приложения — самый первый файл,
 * с которого всё начинается. Его ещё называют main.tsx (или index.tsx в папке src). */


import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from '@components/app/app';

import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
