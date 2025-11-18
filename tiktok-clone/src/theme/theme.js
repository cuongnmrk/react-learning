import { createTheme } from '@mui/material/styles';

export const tiktokTheme = createTheme({
  palette: {
    primary: {
      main: '#fe2c55', // TikTok pink
      light: '#ff5b7f',
      dark: '#e91e3a',
    },
    secondary: {
      main: '#000000',
      light: '#333333',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#161823',
      secondary: 'rgba(22, 24, 35, 0.5)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
    },
    body1: {
      fontSize: '16px',
    },
    body2: {
      fontSize: '14px',
    },
    caption: {
      fontSize: '12px',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
  },
});