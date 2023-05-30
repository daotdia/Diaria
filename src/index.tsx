// /src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { DiaryProvider } from './contexts/DiaryContext';  // Importa tu proveedor de contexto DiaryProvider

ReactDOM.render(
  <React.StrictMode>
    <DiaryProvider>
      <App />
    </DiaryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
