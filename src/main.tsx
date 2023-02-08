import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary';

import 'antd/dist/reset.css';
import './styles/globals.scss';

import './i18n';
import { Provider } from 'jotai';
import { DebugAtoms } from './components/DebugAtoms/DebugAtoms';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <Provider>
      <DebugAtoms />
      <App />
    </Provider>
  </ErrorBoundary>,
);
