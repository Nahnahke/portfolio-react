import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components'
import './index.css';
import './fonts/fonts.css';
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const theme = {
  '--side-margins-mobile': '30px',
  '--side-margins-tablet': '50px',
  '--side-margins-desktop': '50px'
};

root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)