import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import '@fontsource/playfair-display-sc/400.css';
import '@fontsource/playfair-display-sc/700.css';
import '@fontsource/playfair-display-sc/900.css';


import '../index.css';

import { CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SnackbarProvider>
      <CssBaseline />
      <App />
    </SnackbarProvider>
  </React.StrictMode>,
)
