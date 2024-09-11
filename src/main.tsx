// main.tsx або index.tsx

import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppRouter } from '../src/core/router';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
