import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { tiktokTheme } from './theme/theme';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={tiktokTheme}>
      <CssBaseline />
      <MainLayout>
        <Home />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;