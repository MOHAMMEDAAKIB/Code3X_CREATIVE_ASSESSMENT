// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#000000' },
    secondary: { main: '#9DC88D' },
    background: { default: '#F5F5F5', paper: '#EAF3E9' },
    text: { primary: '#1A1A1A', secondary: '#8A8A8A' },
    grey: { 300: '#E2E2E2', 400: '#C9C9C9' },
  },

  typography: {
    fontFamily: '"Inter", "Poppins", sans-serif',
    h4: { fontWeight: 800 },
  },

  shape: {
    borderRadius: 50,
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: '#fff',
            '& fieldset': { borderColor: '#E2E2E2' },
            '&:hover fieldset': { borderColor: '#C9C9C9' },
            '&.Mui-focused fieldset': { borderColor: '#9DC88D' },
          },
          '& .MuiOutlinedInput-input': {
            paddingTop: 14,
            paddingBottom: 14,
            paddingLeft: 20,
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          fontWeight: 600,
          paddingTop: 12,
          paddingBottom: 12,
          boxShadow: 'none',
        },
      },
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            backgroundColor: '#000000',
            '&:hover': { backgroundColor: '#1a1a1a', boxShadow: 'none' },
          },
        },
      ],
    },

    MuiIconButton: {
      // scoped to color="primary" only — leaves the default
      // (unstyled) IconButton, like the password toggle, alone
      variants: [
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: '#000000',
            color: '#FFFFFF',
            width: 44,
            height: 44,
            '&:hover': { backgroundColor: '#1a1a1a' },
          },
        },
      ],
    },
  },
});

export default theme;